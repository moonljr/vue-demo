<template>
  <div class="from">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ifrom',
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object
    }
  },
  provide () {
    return {
      from: this
    }
  },
  data () {
    return {
      fields: []
    }
  },
  created () {
    this.$on('on-from-item-add', (field) => {
      field && this.fields.push(field)
    })
    this.$on('on-from-item-remove', (field) => {
      field.prop && this.fields.splice(this.fields.indexOf(field), 1)
    })
    // console.log('this.field', this.fields);
  },
  mounted () {
  },
  methods: {
    // 公开方法：全部重置数据
    resetFields () {
      this.fields.forEach(field => {
        field.resetField();
      });
    },
    // 公开方法：全部校验数据，支持 Promise
    validate (callback) {
      return new Promise(resolve => {
        let valid = true;
        let count = 0;
        if (!this.fields.forEach.length) {
          valid = false;
          resolve(valid);
          if (typeof callback === 'function') {
            callback(valid);
          }
        }
        this.fields.forEach(field => {
          field.validate('', errors => {
            if (errors) {
              valid = false;
            }
            if (++count === this.fields.length) {
              // 全部校验完成
              resolve(valid);
              if (typeof callback === 'function') {
                callback(valid);
              }
            }
          });
        });
      });
    }
  }
}
</script>

<style>
</style>
