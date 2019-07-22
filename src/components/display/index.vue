<template>
  <div ref="display">
  </div>
</template>
<script>
import Vue from 'vue';
import randomStr from '../../utils/random_str.js';
export default {
  name: 'idisplay',
  props: {
    code: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      id: randomStr,
      html: '',
      js: '',
      css: '',
      component: null,
    }
  },
  mounted () {
    this.renderCode();
  },
  beforeDestroy () {
    this.destroyCode();
  },
  methods: {
    // 切割 css js template的函数
    getSource (source, type) {
      const regex = new RegExp(`<${type}[^>]*>`);
      let openingTag = source.match(regex);
      if (!openingTag) {
        return ''
      } else {
        openingTag = openingTag[0]
      }
      return source.slice(source.indexOf(openingTag) + openingTag.length, source.lastIndexOf(`</${type}>`))
    },
    // 获取到对应的js css html
    splitCode () {
      const script = this.getSource(this.code, 'script').replace(/export default/, 'return ');
      const style = this.getSource(this.code, 'style');
      const template = '<div id="app">' + this.getSource(this.code, 'template') + '</div>';

      this.js = script;
      this.css = style;
      this.html = template;
    },
    renderCode () {
      this.splitCode();
      if (this.js !== '' && this.html !== '') {
        const parseStrToFunc = new Function(this.js)();
        parseStrToFunc.template = this.html;
        const Component = Vue.extend(parseStrToFunc);
        this.component = new Component().$mount();
        this.$refs.display.appendChild(this.component.$el);
        if (this.css !== '') {
          const style = document.createElement('style');
          style.type = 'text/css';
          style.id = this.id;
          style.innerHTML = this.css;
          document.getElementsByTagName('head')[0].appendChild(style);
        }
      }
    },
    destroyCode () {
      const $target = document.getElementById(this.id);
      if ($target) $target.parentNode.removeChild($target);

      if (this.component) {
        this.$refs.display.removeChild(this.component.$el);
        this.component.$destroy();
        this.component = null;
      }
    }
  },
  watch: {
    // 当 this.code 更新时，整个过程要重新来一次，所以要对 code 进行 watch 监听
    code () {
      this.destroyCode();
      this.renderCode();
    }
  }
}
</script>
<style lang="scss" scoped>
.display {
}
</style>
