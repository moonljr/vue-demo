<template>
  <div class="fromCheck">
    <h3>具有数据校验功能的表单组件——Form</h3>
    <ifrom ref="form"
      :model='formValidate'
      :rules="ruleValidate">
      <fromItem label='用户名'
        prop='name'>
        <!-- prop='name'> -->
        <iinput v-model="formValidate.name"></iinput>
      </fromItem>
      <fromItem label='邮箱'
        prop='email'>
        <!-- prop='email'> -->
        <iinput v-model="formValidate.email"></iinput>
      </fromItem>
      <fromItem label='单选'
        prop='checkbox'>
        <iCheckbox v-model="formValidate.single">上海</iCheckbox>
      </fromItem>
      <fromItem label='多选'
        prop='checkboxmultiple'>
        <checkboxGroup v-model="formValidate.multiple">
          <i-checkbox label="option1">上海</i-checkbox>
          <i-checkbox label="option2">北京</i-checkbox>
          <i-checkbox label="option3">天津</i-checkbox>
          <i-checkbox label="option4">成都</i-checkbox>
        </checkboxGroup>
      </fromItem>
    </ifrom>
    <button @click="handleSubmit">提交</button>
    <button @click="handleReset">重置</button>
  </div>
</template>
<script>
import ifrom from './components/from';
import fromItem from './components/fromItem';
import iinput from './components/input';
import iCheckbox from '../checkbox/components/checkbox'
import checkboxGroup from '../checkbox/components/checkbox-group'
export default {
  name: 'fromCheck',
  data () {
    return {
      formValidate: {
        name: '',
        email: '',
        single: '',
        multiple: []
      },
      ruleValidate: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ],
        checkbox: [
          { required: true, message: '单选不能为空', trigger: 'blur' },
        ],
        checkboxmultiple: [
          { required: true, message: '单选不能为空', trigger: 'blur' },
        ]
      }
    }
  },
  created () {
  },
  methods: {
    handleSubmit () {
      this.$refs.form.validate().then((valid) => {
        console.log('valid>>>>', valid);
        if (valid) {
          window.alert('提交成功');
          this.$refs.form.resetFields();
        } else {
          window.alert('表单校验失败');
        }
      })
    },
    handleReset () {
      this.$refs.form.resetFields();
    }
  },
  components: {
    ifrom,
    fromItem,
    iinput,
    iCheckbox,
    checkboxGroup
  }
}
</script>
<style lang="scss" scoped>
.fromCheck {
  padding: 20px;
}
</style>
