<template>
  <!-- 通过dispatch broadcast实现组件间的通信 -->
  <div class="index">
    <p>----------index组件-------</p>
    <p>使用poprs的 validator 校验 size的传参
      <br>
      从父级传入的 size，它的值必须是指定的 small、large、default 中的一个</p>
    <g-buton size='large'
      @click.native="emitComponentbClick">按钮</g-buton>
    <p>通过provide-->inject获取到的数据 {{user}}</p>
    <!-- <componentb></componentb> -->
    iccc>>>>>{{ICCC}}
  </div>
</template>
<script>
import componenta from '@/components/component-a';
// import componentb from '@/components/component-b';
export default {
  name: 'index',
  inject: ['user'],
  data () {
    return {
      indexmessage: '',
      arr: []
    }
  },
  created () {
    this.$on('emit-messageB', this.showIndexMessage);
  },
  computed: {
    ICCC() {
      if(this.arr.length === 0) {
        return 1
      }
    }
  },
  methods: {
    showIndexMessage (text) {
      this.indexmessage = text
    },
    emitComponentbClick () {
      this.broadcast('component-b', 'on-index-message', '从index组件传递过来的数据');
    }
  },
  components: {
    componenta,
    // componentb
  }
}
</script>
<style lang="scss" scoped>
.index {
}
</style>
