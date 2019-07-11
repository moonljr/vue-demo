<template>
  <div class="comA">
    <p>comA组件</p>
  </div>
</template>

<script>
import {
  findComponentUpward,
  findComponentsUpward,
  findComponentDownward,
  findComponentsDownward,
  findBrothersComponents} from '@/utils/assist.js';
export default {
  name: 'comA',
  data () {
    return {
      name: 'comAaaaaa'
    }
  },
  mounted () {
    let index = findComponentUpward(this, 'findComponents')
    index.sayHello();
    console.log('index', index);
    console.log('$parent', this.$parent.$options.name);
  },
  methods: {
    sayHello () {
      console.log('this is comA');
    }
  }
}
</script>

<style>
</style>
