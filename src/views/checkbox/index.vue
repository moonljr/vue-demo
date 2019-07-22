<template>
  <div class="checkboxContainer">
     <h3>组合多选框组件——CheckboxGroup & Checkbox</h3>
     <i-checkbox v-model="single">单独选项</i-checkbox>
     <div>数据 {{ single}}</div>
      <br>
     <checkboxGroup v-model="multiple">
       <i-checkbox label="option1">上海</i-checkbox>
       <i-checkbox label="option2">北京</i-checkbox>
       <i-checkbox label="option3">天津</i-checkbox>
       <i-checkbox label="option4">成都</i-checkbox>
     </checkboxGroup>
     <div>数据 {{ multiple}}</div>
  </div>
</template>
<script>
import iCheckbox from './components/checkbox';
import checkboxGroup from './components/checkbox-group';
export default {
  name: 'checkbox',
  data () {
    return {
      single: false,
      multiple: []
    }
  },
  created () {

  },
  methods: {

  },
  components: {
    iCheckbox,
    checkboxGroup
  }
}
</script>
<style lang="scss" scoped>
.checkboxContainer {
  padding: 20px;
}
</style>
