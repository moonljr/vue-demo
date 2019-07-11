<template>
  <button :class="'i-button-size' + size"
    :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
function valueOf (value, list) {
  let flag = list.some(e => e === value)
  return flag
}
export default {
  name: 'g-buton',
  props: {
    size: {
      type: String,
      validator (value) {
        return valueOf(value, ['small', 'large', 'default'])
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang='scss' scoped>
.i-button-size {
  &default,&small,&large {
    font-size: 14px;
    text-align: center;
    line-height: 1;
    border: none;
    border: 1px solid #000;
    background-color: #fff;
    outline: none;
  }
  &default {
    height: 30px;
  }
  &small {
    height: 20px;
  }
  &large {
    height: 40px;
  }
}
</style>
