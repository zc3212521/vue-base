<template>
  <div class="about">
    <h1>This is an about page</h1>
    <my-own></my-own>
  </div>
</template>

<script>
import myOwn from './components/myOwn'
export default {
  components: {
    myOwn
  },
  destroyed () {
    console.log('destroyed')
  }
}

</script>
