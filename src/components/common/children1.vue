<template>
  <div class="child">
    <p>我是子组件，我的名字是： {{ fullName }}</p>
    <a-input v-model="firstName" placeholder="输入first name"/>
    <br><br>
    <a-input v-model="lastName" placeholder="输入last name"/>
  </div>
</template>

<script>
export default {
  name: 'children1',
  data () {
    return {
      firstName: 'Tom',
      lastName: 'Cat'
    }
  },
  computed: {
    fullName () {
      return `${this.firstName} ${this.lastName}`
    }
  },
  methods: {
    changeName (first, last) {
      this.firstName = first
      this.lastName = last
    }
  }
}
</script>

<style lang="less" scoped>
  .child {
    color: orangered;
    border: 1px solid gold;
  }
</style>
