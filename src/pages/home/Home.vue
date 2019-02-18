<template>
  <div class="home">
    <img alt="Vue logo" src="~@img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="img"></div>
  </div>
</template>

<script>
import HelloWorld from '@/components/business/HelloWorld.vue'
import { getTestData } from '@/http/moduleA.js'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mounted () {
    getTestData().then(res => console.log('data', res.data))
  },
  methods: {
  }
}
</script>

<style lang="css" scoped>
  .img {
    margin: 0 auto;
    width: 100px;
    height: 100px;
    background: url("~@img/logo.png");
    background-size: 100px;
  }
</style>
