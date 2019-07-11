<template>
  <div class="dispatchAndbroadcast">
    <p>----------dispatchAndbroadcast组件-------</p>
    <button @click="emitComponentbClick">给componentb传递数据</button>
    <p class="cr">接受从componentb传过来的数据>>>>> {{indexmessage}}</p>
    <componenta></componenta>
    <p>----------dispatchAndbroadcast组件-------</p>
    <!-- <componentb></componentb> -->
  </div>
</template>
<script>
import componenta from '@/components/component-a';
export default {
  name: 'dispatchAndbroadcast',
  data () {
    return {
      indexmessage: ''
    }
  },
  created () {
    this.$on('emit-messageB', this.showIndexMessage);
  },
  methods: {
    showIndexMessage (text) {
      this.indexmessage = text
    },
    emitComponentbClick () {
      this.broadcast('component-b', 'on-index-message', '从dispatchAndbroadcast组件传递过来的数据');
    }
  },
  components: {
    componenta,
    // componentb
  }
}
</script>
<style lang="scss" scoped>
.dispatchAndbroadcast {
}
</style>
