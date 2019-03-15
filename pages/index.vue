<template>
  <div class="main">
    <div @click="$router.push('/game')">START</div>
    <div @click="$router.push('/game?level=easy')">EASY</div>
    <div @click="$router.push('/game?level=normal')">NORMAL</div>
    <div @click="$router.push('/game?level=hard')">HARD</div>
    <div @click="$router.push('/game?level=veryhard')">VERYHARD</div>
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

<style>
.main {
  height: 100vh;
  width: 100vw;
  max-width: 100vw;
  overflow: hidden;
}
</style>
