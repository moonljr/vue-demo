<template>
  <div class="tree">
    <tree-node v-for="(item, index) in cloneData"
      :key="index"
      :data="item"
      :show-checkbox="showCheckbox"></tree-node>
  </div>
</template>
<script>
import TreeNode from './node.vue';
import { deepCopy } from '../../utils/assist';
export default {
  name: 'Tree',
  props: {
    data: {
      type: Array,
      default () {
        return [];
      }
    },
    showCheckbox: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      cloneData: []
    }
  },
  created () {
    this.rebuildData();
    console.log('cloneData', this.cloneData);
  },
  watch: {
    data () {
      this.rebuildData();
    }
  },
  methods: {
    rebuildData () {
      this.cloneData = deepCopy(this.data);
    },
    emitEvent (eventName, data) {
      this.$emit(eventName, data, this.cloneData);
    }
  },
  components: {
    TreeNode
  }
}
</script>
<style lang="scss" scoped>
.tree {
}
</style>
