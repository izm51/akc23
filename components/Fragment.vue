<template>
  <e-cont :x="x - 20" :y="y - 20" :w="40" :h="40" :r="r" :s="s" :ox="20" :oy="20">
    <div class="frag negi" v-if="type==='negi'">
      {{fragMessage}}
    </div>
    <div class="frag get" v-else>
      Get!
    </div>
  </e-cont>
</template>

<script>
import ECont from '@/components/ECont'
export default {
  name: 'Fragment',
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
  data () {
    return {
      fragMessage: null
    }
  },
  created() {
    if (this.type==="negi") {
      if (Math.random() < 1/3) {
        this.fragMessage = 'うぇ～'
      } else if (Math.random() < 2/3) {
        this.fragMessage = 'やめて～'
      } else {
        this.fragMessage = 'ﾈｷﾞﾈｷﾞ～'
      }
    }
  },
}
</script>
<style lang="scss" scoped>
.frag {
  width: 80px;
}
</style>
