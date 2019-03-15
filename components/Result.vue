<template>
  <transition>
    <div class="result">
      <div class="clear" v-if="score==23">
        <img src="~assets/img/happyB.png">
        <div class="button" @click="$router.push('/')">もどる</div>
      </div>
      <div class="failed" v-else>
        <img src="~assets/img/sippai.png">
        <div class="message">
          {{score}}歳おめでとう笑<br>
          もう一回挑戦してね！
        </div>
        <div class="button" @click="$router.push('/')">もどる</div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Result',
  props: {
    score: { type: [Number, String], default: 0 },
  }
}
</script>

<style lang="scss" scoped>
.v-enter-active, .v-leave-active {
    transform: translate(-50%, -50%)!important;
    transition: opacity 1.5s, transform 1.5s;
}
.v-enter, .v-leave-to {
    transform: translateY(-60vh) translateX(-50%)!important;
    opacity: 0;
    .button {
      opacity: 0;
    }
}

.result {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  border-radius: 30px;
  font-size: 24px;
  text-align: center;
  .clear {
    img {
      width: 100%;
    }
  }
  .failed {
    img {
      width: 100%;
    }
  }
  .button {
    width: 160px;
    height: 40px;
    line-height: 40px;
    margin: 25px auto;
    // background: #fff;
    border: 2px #403f41 solid;
    border-radius: 5px;
    font-weight: bold;
    transition: opacity 1.5s ease 1.5s;
  }
  .message {
    width: fit-content;
    margin: 15px auto;
  }
}
</style>

