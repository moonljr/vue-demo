<template>
  <div class="display">
    <h3>动态渲染 .vue 文件的组件 —— Display</h3>
    <i-display :code='code'></i-display>
  </div>
</template>
<script>
import iDisplay from '../../components/display';
import defaultCode from './display-code';
export default {
  name: 'display',
  data () {
    return {
      code: defaultCode
    }
  },
  components: {
    iDisplay
  }
}
</script>
<style lang="scss" scoped>
.display {

}
</style>
