<template>
  <label>
    <span>
      <input v-if="group"
        type="checkbox"
        :disabled='disabled'
        :value="label"
        v-model="model"
        @change="change">
      <input v-else
        type="checkbox"
        :disabled='disabled'
        :checked='currentValue'
        @change="change">
    </span>
    <slot></slot>
  </label>
</template>

<script>
import { findComponentUpward } from '../../../utils/assist';
export default {
  name: 'iCheckbox',
  props: {
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: [String, Number, Boolean],
    },
  },
  data () {
    return {
      currentValue: this.value,
      group: false,
      parent: null,
      model: [],
    }
  },
  watch: {
    value (n, o) {
      if (n === this.trueValue || n === this.falseValue) {
        this.updateModel();
      } else {
        throw 'Value should be trueValue or falseValue.';
      }
      // this.currentValue = n;
    }
  },
  created () {

  },
  mounted () {
    this.parent = findComponentUpward(this, 'iCheckboxGroup')
    if (this.parent) {
      this.group = true
    }
    if (this.group) {
      this.parent.updateModel(true);
    } else {
      this.updateModel();
    }
  },
  methods: {
    change (event) {
      if (this.disabled) {
        return false;
      }
      const checked = event.target.checked;
      this.currentValue = checked;
      const value = checked ? this.trueValue : this.falseValue;
      this.$emit('input', value);
      if (this.group) {
        this.parent.change(this.model);
      } else {
        this.$emit('on-change', value);
        this.dispatch('fromItem', 'on-from-change', value)
      }

    },
    updateModel () {
      this.currentValue = this.value === this.trueValue
    },
  }
}
</script>

<style>
</style>
