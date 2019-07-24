<template>
  <div class="tree">
    <h3>实战 7：树形控件 —— Tree</h3>
    <Tree :data="data"
      show-checkbox
      @on-toggle-expand="handleToggleExpand"
      @on-check-change="handleCheckChange"></Tree>
  </div>
</template>
<script>
import Tree from '../../components/tree';
export default {
  name: 'treeView',
  data () {
    return {
      data: [
        {
          title: 'parent 1',
          expand: false,
          children: [
            {
              title: 'parent 1-1',
              expand: false,
              children: [
                {
                  title: 'leaf 1-1-1'
                },
                {
                  title: 'leaf 1-1-2'
                }
              ]
            },
            {
              title: 'parent 1-2',
              children: [
                {
                  title: 'leaf 1-2-1'
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleToggleExpand (data) {
      console.log('handleToggleExpand>>>',data);
    },
    handleCheckChange (data) {
      console.log('handleCheckChange>>>',data);
    }
  },
  components: {
    Tree
  }
}
</script>
<style lang="scss" scoped>
.tree {
}
</style>
