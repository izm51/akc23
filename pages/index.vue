<template>
  <div class="main">
    <div class="title">
      <img src="~assets/img/title.png">
      <div class="text">
        <p>イマイズミが投げる誕生日プレゼントを<br>キャッチして受け取ろう！</p>
        <p>ただし、苦手なネギは避けるべし！</p>
      </div>
      <div class="start-buttons">
        <p>レベルを選んでスタート！</p>
        <!-- <div class="level-button" @click="$router.push('/game')">START</div> -->
        <div class="level-button" @click="$router.push('/game?level=easy')">EASY</div>
        <div class="level-button" @click="$router.push('/game?level=normal')">NORMAL</div>
        <div class="level-button" @click="$router.push('/game?level=hard')">HARD</div>
        <div class="level-button" @click="$router.push('/game?level=veryhard')">VERYHARD</div>
      </div>
    </div>
    <div class="version">ver 1.02</div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
.main {
  height: 100vh;
  width: 100vw;
  max-width: 100vw;
  overflow: hidden;
  background: url(~assets/img/pattern.jpg);
  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    text-align: center;
    img {
      width: 100%;
    }
    .text {
      margin: 30px 0;
    }
    .start-buttons {
      .level-button {
        color: #000;
        background: rgb(255, 153, 0);
        border: 1px rgb(151, 86, 0) solid;
        border-radius: 5px;
        width: 150px;
        margin: 10px auto;
        padding: 2px 0;
        font-size: 24px;
      }
    }
  }
  .version {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
</style>
