<template>
  <e-cont :x="x - 20" :y="y - 20" :w="40" :h="40" :r="r" :s="s" :ox="20" :oy="20">
    <div class="partner">
      <img src="~assets/img/zumi.png" class="chara" v-if="mode==0">
      <img src="~assets/img/zumi1.gif" class="chara" v-else-if="mode==1">
      <img src="~assets/img/zumi2.gif" class="chara" v-else-if="mode==2">
      <img src="~assets/img/zumi3.gif" class="chara" v-else-if="mode==3||mode==4">
      <img src="~assets/img/zumi.png" class="chara" v-else>
    </div>
  </e-cont>
</template>

<script>
import ECont from '@/components/ECont'
export default {
  name: 'Partner',
  components: {
    ECont
  },
  props: {
    x: { type: [Number, String], default: 0 },
    y: { type: [Number, String], default: 0 },
    r: { type: [Number, String], default: 0 },
    s: { type: [Number, String], default: 1 },
    mode: { type: [Number, String], default: '' }
  }
}
</script>
<style lang="scss">
.partner {
  width: 40px;
  height: 40px;
  // background: #000;
  position: absolute;
  top: 50%;
  .chara {
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translate(-50%, 0);
    height: 120px;
  }
}
</style>
