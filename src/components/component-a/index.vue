<template>
  <div class="component-a">
    <p>----------component-a组件-------</p>
    component-a组件
    <button @click="handleClick">componenta给componentb传递数据</button>
    <p class="cr">接受从componentb传过来的数据>>>>> {{message}}</p>
    <componentb></componentb>
    <p>----------component-a组件-------</p>
  </div>
</template>
<script>
import componentb from '@/components/component-b';
export default {
  name: 'component-a',
  data () {
    return {
      message: '',
    }
  },
  created () {
    this.$on('emit-index-messageB', this.showMessage);
  },
  methods: {
    showMessage (text) {
      this.message = text
    },
    handleClick () {
      this.broadcast('component-b', 'on-message', 'componenta传递给componentb的数据');
    }
  },
  components: {
    componentb
  }
}
</script>
<style lang="scss" scoped>
.component-a {
}
</style>
