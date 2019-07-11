<template>
<!-- vuex的基本应用 -->
  <div class="home">
    <p>计数器</p> <span>{{count}}</span>
    <br>
    <button @click="jia">加</button>
    <button @click="jian">减</button>
    <button @click="aysncjia">触发异步加数据</button>
    <button @click="aysncjian">触发异步减</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'home',
  created () {
  },
  methods: {
    ...mapMutations(['increment', 'direment']),
    ...mapActions(['incrementAsync', 'dirementAsync']),
    jia () {
      // 直接commit mutations
      // this.increment();
      // 给mutations 传参
      this.$store.commit('increment', 1)
    },
    jian () {
      // this.direment();
      this.$store.commit('direment', 2)
    },
    aysncjia() {
      this.incrementAsync();
      // this.$store.dispatch('incrementAsync')
    },
    aysncjian() {
      this.dirementAsync();
      // this.$store.dispatch('incrementAsync')
    }
  },
  computed: {
    // ...mapState(['count']),
    ...mapGetters(['count'])
  },
  components: {
    // HelloWorld
  }
}
</script>
