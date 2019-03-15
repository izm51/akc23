<template>
  <div class="stage-root">

    <div class="countdown" v-if="countdown > 0">
      {{countdown}}
    </div>

    <div class="score">score: {{score}}</div>

    <player ref="player"
      :x="playerPos.x" :y="playerPos.y" :s="playerPos.s"
    ></player>

    <partner ref="partner"
      :x="partner.pos.x" :y="partner.pos.y" :s="partner.pos.s" :mode="partner.mode"
    ></partner>

    <item v-for="item in items" ref="item" :key="`item-${item.id}`"
      :x="item.pos.x" :y="item.pos.y" :s="item.pos.s" :type="item.type"
      @hitPlayer="(playerComp) => onItemHitPlayer(item, playerComp)"
      @hitBaseline="(BaselineComp) => onItemHitBaseline(item, BaselineComp)"
    ></item>

    <baseline ref="baseline"
      :x="-100" :y="vh-60" :s="1" :w="vw+200"
    ></baseline>

    <result v-if="partner.status=='end'" :score="score"></result>

  </div>
</template>

<script>
import Player from '@/components/Player'
import Partner from '@/components/Partner'
import Item from '@/components/Item'
import Baseline from '@/components/Baseline'
import Result from '@/components/Result'
import CollisionDetector from '@/core/CollisionDetector'
import Tween from '@/core/Tween'
export default {
  components: {
    Player, Partner, Item, Baseline, Result
  },
  data () {
    return {
      collisionDetector: new CollisionDetector(),
      countdown: 3,
      time: 0,
      score: 0,
      level: 'hard',
      throwSpeed: {easy: [2000, 1500], normal: [1000, 1000], hard: [100, 1000], veryhard: [10, 500] },
      vw: null,
      vh: null,
      touch_x: 0,
      partner: {
        pos: { x: 20, y: 80, s: 1},
        status: null,
        mode: 0
      },
      items: [],
      itemList: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22'],
      // itemList: ['0']
    }
  },
  computed: {
    playerPos () {
      return { x: this.touch_x, y: this.vh - 120, s: 1.0}
    }
  },
  created()  {
  },
  mounted() {
    const self = this

    this.vw = window.innerWidth
    this.vh = window.innerHeight

    // 初期位置
    this.touch_x = this.vw / 2
    this.partner.pos.x = this.vw / 2
    if (this.$route.query.level) {
      this.level = this.$route.query.level
    }

    document.body.addEventListener('touchmove', function(event) {
      const touch = event.targetTouches[0];
      self.touch_x = touch.pageX
    }, false)
    document.body.addEventListener('touchstart', function(event) {
      const touch = event.targetTouches[0];
      self.touch_x = touch.pageX
    }, false)

    const countdownTimer =setInterval(() => {
      this.countdown--
      if (this.countdown == 0) {
        this.gameStart()
        clearInterval(countdownTimer)
      }
    }, 1000)
  },
  methods: {
    checkCollision () {
      this.collisionDetector.clear()
      this.collisionDetector.add(
        this.$refs.player,
        ...(this.$refs.item || []),
        this.$refs.baseline,
      )
      this.collisionDetector.detect()
    },
    async onItemHitPlayer(item, playerComp) {
      if (item.type != 'negi' ) {
        this.getItem(item.type)
      } else {
        this.negiDamege()
      }
      this.removeItem(item)
    },
    async onItemHitBaseline(item, playerComp) {
      if (item.type != 'negi' ) {
        this.lostItem(item.type)
      }
      this.removeItem(item)
    },
    getItem(type) {
      console.log("get! ", type)
      this.score++
    },
    lostItem(type) {
      console.log("lost! ", type)
    },
    negiDamege() {
      console.log("neginegi~~")
      this.score--
    },
    async throwItemTiming() {
      const throwItemInterval = this.throwSpeed[this.level][0] + Math.random() * 1000
      const throwTimer = setTimeout(() => {
        if (this.partner.status === 'walking') {
          // 球種決定
          let type = ''
          if ( Math.random() > 0.3) {
            const index = Math.floor(Math.random() * this.itemList.length)
            type = this.itemList[index]
            this.$data.itemList.splice(index, 1)

            // 進化判定
            if ([17, 9, 0].indexOf(this.itemList.length) != -1) {
              this.partner.status = 'stop'
            }
          } else {
            type = 'negi'
          }
          
          this.throwItem(type)
          this.throwItemTiming()
        }
      }, throwItemInterval)
    },
    async throwItem(type) {
      const id = Math.floor(Math.random() * 100000)
      const item = { id, pos: { x: this.partner.pos.x, y: this.partner.pos.y, s: 1}, type: type }
      this.$data.items.push(item)
      item.tw = new Tween(item.pos)
      const isFin = await item.tw.to({ x: Math.random() * this.vw, y: this.vh - 80}, this.throwSpeed[this.level][1])
      if (isFin) {
        this.removeItem(item)
      }
    },
    removeItem(itemData) {
      const index = this.$data.items.indexOf(itemData)
      if (index === -1) {return}
      this.$data.items.splice(index, 1)
    },
    async movePartner() {
      this.partner.mode++
      this.partner.tw = new Tween(this.partner.pos)
      this.partner.status = 'walking'
      while (this.partner.status === 'walking') {
        await this.partner.tw.to({x: this.vw - 20}, 500)
        await this.partner.tw.to({x: 20}, 1000)
        await this.partner.tw.to({x: this.vw / 2}, 500)
      }
      this.partnerStopped()
    },
    partnerStopped() {
      if (this.itemList.length != 0) {
        // this.partner.mode++
        const changeTimer = setTimeout(() => {
          this.movePartner()
          this.throwItemTiming()
        }, 2000)
      } else {
        const gameSetTimer = setTimeout(() => {this.gameSet()}, this.throwSpeed[this.level][1]+500)
      }
    },
    gameTick() {
      this.time++
      this.checkCollision()
    },
    gameStart() {
      const gameTimer = setInterval(this.gameTick, 10)

      this.movePartner()
      this.throwItemTiming()
    },
    gameSet() {
      this.partner.status = 'end'
      console.log("GAME SET!")
      console.log(this.score + "歳おめでとう！")
    }
  }
}
</script>

<style lang="scss">
.stage-root {
  height: 100vh;
  width: 100vw;
  max-width: 100vw;
  overflow: hidden;
  background-color: #e49e68;
  background-image: url("~assets/img/wood-pattern.png");
  background-size: 150px;
/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
}
.countdown {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60vw;
  height: 60vw;
  // background: #fff;
  border: 3px #000 solid;
  border-radius: 50%;
  line-height: 60vw;
  font-size: 35vw;
  text-align: center;
}
</style>
