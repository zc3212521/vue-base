<template>
  <div class="about">
    <router-link to="/home">Go to home</router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'about',
  computed: {
    ...mapState({
      count: state => state.count,
      name: state => state.name
    })
  }
}
</script>

<style>
  .about {
    background-color: orangered;
    width: 100vw;
    height: 100vh;
  }
</style>
