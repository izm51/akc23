<template>
  <div class="main">
    <div @click="$router.push('/game')">START</div>
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
