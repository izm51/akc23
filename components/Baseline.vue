<template>
  <e-cont :x="x" :y="y - 40" :w="w" :h="80" :r="r" :s="s" :ox="w/2" :oy="40">
    <div class="base"></div>
  </e-cont>
</template>

<script>
import ECont from '@/components/ECont'
export default {
  name: 'Baseline',
  components: {
    ECont
  },
  props: {
    x: { type: [Number, String], default: 0 },
    w: { type: [Number, String], default: 0 },
    y: { type: [Number, String], default: 0 },
    r: { type: [Number, String], default: 0 },
    s: { type: [Number, String], default: 1 }
  }
}
</script>
<style>
.base {
  width: 100%;
  height: 80px;
  background: #444;
  position: absolute;
  top: 50%;
}
</style>
