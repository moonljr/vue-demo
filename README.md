# vue-demo
### vue 常用技巧
- 使用命令行创建组件
- 全局注册filter
- 全局注册mixin
- 按模块划分路由

### $attrs 与 $listeners 的使用
```js
// 一般应用与封装第三方UI组件库的时候使用
// 在gSelect子组件中
 <label class="gSelect">
    <span>{{item}}</span>
    <el-select v-model="value"
      v-bind="$attrs" v-on="$listeners">
      <el-option v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </label>

// 在父组件中使用gSelect组件
<g-select clearable placeholder='asa' item='选择框' @change="change" @clear='clear'></g-select>
```
