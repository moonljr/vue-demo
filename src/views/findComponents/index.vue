<template>
  <!-- 查找任意组件的通信方法 -->
  <div class="findComponents">
    findComponents组件
    <comA></comA>
  </div>
</template>
<script>
import {
  findComponentUpward,
  findComponentsUpward,
  findComponentDownward,
  findComponentsDownward,
  findBrothersComponents} from '@/utils/assist.js';
import comA from './components/comA';
export default {
  name: 'findComponents',
  data () {
    return {
      name: 'indexzzzzz'
    }
  },
  mounted () {
    let comA = findComponentDownward(this, 'comA')
    console.log('comA', comA);
    console.log('comA.name',comA.name);
  },
  methods: {
    sayHello () {
      console.log('this is index');
    }
  },
  components: {
    comA
  }
}
</script>
<style lang="scss" scoped>
.findComponents {
}
</style>
