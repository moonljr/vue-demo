<template>
  <div class="iinput">
    <input type="text"
      :value="currentValue"
      @input="handleInput"
      @blur="handleBlur" />
  </div>
</template>

<script>
export default {
  name: 'iinput',
  props: {
    value: {
      type: String,
      default: ''
    },
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  methods: {
    handleInput (event) {
      const value = event.target.value;
      this.currentValue = value;
      this.$emit('input', value);
      this.dispatch('fromItem', 'on-form-change', value);
    },
    handleBlur () {
      this.dispatch('fromItem', 'on-form-blur', this.currentValue);
    }
  },
  watch: {
    value (val) {
      this.currentValue = val;
    }
  },
}
</script>

<style>
</style>
