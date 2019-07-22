<template>
  <div class="alert">

    <h3>全局通知组件 —— $Alert</h3>
    <button @click="handleOpen1">打开提示 1</button>
    <button @click="handleOpen2">打开提示 2</button>
  </div>
</template>
<script>
export default {
  name: 'alert',
  methods: {
    handleOpen1 () {
      this.$Alert.info({
        content: '我是提示信息 1',
        duration: 3
      });
    },
    handleOpen2 () {
      this.$Alert.info({
        content: '我是提示信息 2',
        duration: 3
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.alert {
}
</style>
