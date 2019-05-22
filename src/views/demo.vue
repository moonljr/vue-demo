<template>
  <div class="demo">
    <h1>demo</h1>
    <!-- $attrs 与 ￥listeners 的使用 -->
    <g-select clearable
      placeholder='asa'
      item='选择框'
      @change="change"
      @clear='clear'></g-select>

    <debounce time="300"
      :before="beforeFun">
      <input type="text"
        v-model="inpModel"
        @input="inputChange" />
    </debounce>
    <debounce time="300"
      :before="beforeFun">
     <button @click="handleClickButton">handleClickButton</button>
    </debounce>
  </div>
</template>

<script>
// import gSelect from '@/components/global/gSelect';
export default {
  name: 'demo',
  data () {
    return {
      inpModel: 1
    }
  },
  methods: {
    change (e) {
      console.log('eee', e);
    },
    clear (e) {
      console.log('clear', '选择的值被清空了');
    },
    inputChange (e) {
      console.log(e.target.value, '防抖')
    },
    beforeFun (e) {
      // console.log(e.target.value, '不防抖')
    },
    handleClickButton() {

      console.log('按钮被点击了');
    }
  }
}
</script>

<style lang='scss'>
.demo {
  text-align: left;
}
</style>
