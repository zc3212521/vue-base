<template>
  <div class="home">
    <img alt="Vue logo" src="~@img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App111"/>
    <div class="img">

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { getTestData } from '@/services/moduleA.js'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mounted () {
    getTestData().then(data => console.log('data', data))
    this.doSomeThing()
  },
  methods: {
    doSomeThing () {
      console.log(111)
    }
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
