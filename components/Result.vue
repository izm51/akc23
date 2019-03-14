<template>
  <div class="result">
    <div class="message">
      {{score}}歳おめでとう！
      <div @click="$router.push('/')">TOPへ</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Result',
  props: {
    score: { type: [Number, String], default: 0 },
  }
}
</script>

<style lang="scss">
.result {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  height: 60vh;
  background: #fff;
  border: 1px #000 solid;
  border-radius: 30px;
  font-size: 24px;
  text-align: center;
  .message {
    position: absolute;
    top: 50%;
    left: 50%;
    width: fit-content;
    transform: translate(-50%, -50%);
  }
}
</style>

