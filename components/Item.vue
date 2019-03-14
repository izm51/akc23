<template>
  <e-cont :x="x - 20" :y="y - 20" :w="40" :h="40" :r="r" :s="s" :ox="20" :oy="20">
    <div class="negi" v-if="type==='negi'">{{type}}</div>
    <div class="item" v-else>{{type}}</div>
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
  methods: {
    collide (targetComp, name) {
      this.$emit(`hit${name}`, targetComp)
    }
  }
}
</script>
<style>
.item {
  width: 40px;
  height: 40px;
  background: rgb(255, 94, 0);
  border-radius: 50%;
  position: absolute;
  top: 50%;
}
.negi {
  width: 40px;
  height: 40px;
  background: rgb(0, 255, 13);
  border-radius: 50%;
  position: absolute;
  top: 50%;
}
</style>
