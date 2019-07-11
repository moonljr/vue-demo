function broadcast(componentName, eventName, params) {
  this.$children.forEach(child => {
    const name = child.$options.name;
    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}
const globalMixins = {
  created() {
    // console.log('全局mixins--create');
  },
  methods: {
    log() {
      console.log('全局mixins--methods');
    },
    /**
     * 子组件通过事件传值给父组件
     * this.dispath(父组件的name, 事件名称, 参数)
     */
    dispatch(componentName, eventName, params) {
      let parent = this.$parent || this.$root;
      let name = parent.$options.name;

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;
        if (parent) {
          name = parent.$options.name;
        }
      }
      if (parent) {
        // 接收单一参数
        // parent.$emit.apply(parent, [eventName].concat(params));
        // 可以接收多个参数 或者 数组  或者 对象
        parent.$emit.apply(parent, [eventName].concat([params]));
      }
    },
    /**
     * 父组件通过事件传值给子组件
     * this.broadcast(子组件的name, 事件名称, 参数)
     */
    broadcast(componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params);
    }
  },

}
export default globalMixins;
