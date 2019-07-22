<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { findComponentsDownward } from '../../../utils/assist';
export default {
  name: 'iCheckboxGroup',
  props: {
    value: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentValue: '',
      childrens: []
    }
  },
  methods: {
    updateModel (updata) {
      this.childrens = findComponentsDownward(this, 'iCheckbox')
      if (this.childrens) {
        const { value } = this;
        this.childrens.forEach(child => {
          child.model = value;
          if (updata) {
            child.currentValue = value.indexOf(child.label) >= 0;
            child.group = true;
          }
        })
      }
    },
    change (data) {
      this.currentValue = data;
      this.$emit('input', data);
      this.$emit('on-change', data);
      this.dispatch('fromItem', 'on-from-change', data)
    }
  },
  mounted () {
    this.updateModel(true);
  },
  watch: {
    value () {
      this.updateModel(true);
    }
  }
}
</script>

<style>
</style>
