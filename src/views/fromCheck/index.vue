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
    </ifrom>
    <button @click="handleSubmit">提交</button>
    <button @click="handleReset">重置</button>
  </div>
</template>
<script>
import ifrom from './components/from';
import fromItem from './components/fromItem';
import iinput from './components/input';
export default {
  name: 'fromCheck',
  data () {
    return {
      formValidate: {
        name: '',
        email: ''
      },
      ruleValidate: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
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
    iinput
  }
}
</script>
<style lang="scss" scoped>
.fromCheck {
  padding: 20px;
}
</style>
