<template>
  <div class="component-b">
    <p>----------component-b组件-------</p>
    component-b组件
    <p class="cr">接收componenta组件传递过来的数据>>>>{{message}}</p>
    <p class="cr">接收dispatchAndbroadcast组件传递过来的数据>>>{{indexmessage}}</p>
    <button @click="emitIndex">给dispatchAndbroadcast组件传递数据</button>
    <button @click="componenta">给component-a组件传递数据</button>
    <p>----------component-b组件-------</p>
  </div>
</template>
<script>
export default {
  name: 'component-b',
  data () {
    return {
      message: '',
      indexmessage: ''
    }
  },
  created () {
    this.$on('on-message', this.showMessage);
    this.$on('on-index-message', this.showIndexMessage);
  },
  methods: {
    showMessage (text) {
      this.message = text
    },
    showIndexMessage (text) {
      this.indexmessage = text
    },
    emitIndex () {
      this.dispatch('dispatchAndbroadcast', 'emit-messageB', '发送给dispatchAndbroadcast组件的数据', '<<qqqq');
      // this.dispatch('index', 'emit-messageB', ['1','2','3']);
      // this.dispatch('index', 'emit-messageB', {a:1,b:2});
    },
    componenta () {
      this.dispatch('component-a', 'emit-index-messageB', '发送给componenta组件的数据', '<<zzzz');
      // this.dispatch('component-a', 'emit-index-messageB', ['a','b','c']);
      // this.dispatch('component-a', 'emit-index-messageB', {z:2,c:1});
    }
  }
}
</script>
<style lang="scss" scoped>
.component-b {
}
</style>
