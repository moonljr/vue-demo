<template>
  <div class="debounce">
    <h1>debounce</h1>

    <debounce time="300"
      :before="beforeFun">
      <input type="text"
        v-model="inpModel"
        @input="inputChange" />
    </debounce>
    <debounce time="1000"
      :before="beforeFun">
     <button @click="handleClickButton">handleClickButton</button>
    </debounce>
  </div>
</template>

<script>
// import gSelect from '@/components/global/gSelect';
export default {
  name: 'demo_debounce',
  data () {
    return {
      inpModel: 1
    }
  },
  methods: {
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
.debounce {
  text-align: left;
}
</style>
