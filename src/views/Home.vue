<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <p>计数器</p> <span>{{$store.state.count}}</span> -->
    <button @click="jia">加</button>
    <button @click="jian">减</button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import {mapGetters} from 'vuex';

export default {
  name: 'home',
  methods: {
    jia() {

    },
    jian() {

    }
  },
  components: {
    HelloWorld
  }
}
</script>
