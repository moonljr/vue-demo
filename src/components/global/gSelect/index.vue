<template>
  <label class="gSelect">
    <span>{{item}}</span>
    <el-select v-model="value"
      v-bind="$attrs" v-on="$listeners">
      <el-option v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </label>
</template>
<script>
export default {
  name: 'gSelect',
  props: {
    item: {
      type: String,
      default: '下拉框'
    }
  },
  data () {
    return {
      value: '',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
    }
  }
}
</script>
<style lang="scss" scoped>
.gSelect {
}
</style>
