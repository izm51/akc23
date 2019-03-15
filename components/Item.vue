<template>
  <e-cont :x="x - 20" :y="y - 20" :w="40" :h="40" :r="r" :s="s" :ox="20" :oy="20">
    <div class="negi" v-if="type==='negi'">
      <div class="tamanegi" v-if="negi==='tamanegi'"><img src="~assets/img/tamanegi.png"></div>
      <div class="naganegi" v-if="negi==='naganegi'"><img src="~assets/img/naganegi.png"></div>
    </div>
    <div class="item" v-else>
      <div class="gift">
        <img src="~assets/img/gift1.png" v-if="type%6===0">
        <img src="~assets/img/gift2.png" v-if="type%6===1">
        <img src="~assets/img/gift3.png" v-if="type%6===2">
        <img src="~assets/img/gift4.png" v-if="type%6===3">
        <img src="~assets/img/gift5.png" v-if="type%6===4">
        <img src="~assets/img/gift6.png" v-if="type%6===5">
      </div>
    </div>
  </e-cont>
</template>

<script>
import ECont from '@/components/ECont'
export default {
  name: 'Item',
  components: {
    ECont
  },
  props: {
    x: { type: [Number, String], default: 0 },
    y: { type: [Number, String], default: 0 },
    r: { type: [Number, String], default: 0 },
    s: { type: [Number, String], default: 1 },
    type: { type: [String], default: '' }
  },
  data() {
    return {
      negi: null
    }
  },
  created() {
    if (this.type==="negi") {
      // たまねぎ見えないので全部長ネギ
      if (Math.random() < 0) {
        this.negi = 'tamanegi'
      }
      else {
        this.negi = 'naganegi'
      }
    }
  },
  methods: {
    collide (targetComp, name) {
      this.$emit(`hit${name}`, targetComp)
    }
  }
}
</script>
<style lang="scss" scoped>
.item {
  width: 40px;
  height: 40px;
  // background: rgb(255, 94, 0);
  background-size: 40px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  .gift {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 45px;
    img {
      width: 100%;
    }
  }
}
.negi {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  // background-color: rgb(0, 255, 34);
  background-size: contain;
  .tamanegi {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    img {
      width: 100%;
    }
  }
  .naganegi {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 45px;
    img {
      width: 100%;
    }
  }
}
</style>
