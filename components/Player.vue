<template>
  <e-cont :x="x - 20" :y="y - 20" :w="40" :h="40" :r="r" :s="s" :ox="20" :oy="20">
    <div class="maru"></div>
  </e-cont>
</template>

<script>
import ECont from '@/components/ECont'
export default {
  name: 'Player',
  components: {
    ECont
  },
  props: {
    x: { type: [Number, String], default: 0 },
    y: { type: [Number, String], default: 0 },
    r: { type: [Number, String], default: 0 },
    s: { type: [Number, String], default: 1 }
  },
  methods: {
  }
}
</script>
<style>
.maru {
  width: 40px;
  height: 40px;
  background: #000;
  position: absolute;
  top: 50%;
}
</style>
