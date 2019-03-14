<template>
  <e-cont :x="x - 20" :y="y - 20" :w="40" :h="40" :r="r" :s="s" :ox="20" :oy="20">
    <div :class="{'partner': true, 'red': mode==0, 'blue': mode==1}"></div>
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
  background: #000;
  position: absolute;
  top: 50%;
  &.red {
    background: red;
  }
  &.blue {
    background: blue;
  }
}
</style>
