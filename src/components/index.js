import Vue from 'vue'

// 自动加载 global 目录下的 .js 结尾的文件
const componentsContext = require.context('./global', true, /\.js$/)

componentsContext.keys().forEach(component => {
  const componentConfig = componentsContext(component)
  /**
   * 兼容 import export 和 require module.export 两种规范
   */
  const ctrl = componentConfig.default || componentConfig
  // console.log('ctrl', ctrl)
  if (ctrl.name) {
    Vue.component(ctrl.name, ctrl)
  } else {
    console.log('ctrl', ctrl.__file)
    throw new Error('注册全局组件缺少name属性')
  }
})
