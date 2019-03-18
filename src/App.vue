<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home111</router-link> |
      <router-link to="/about">About</router-link>
      <div id="haha">
        <a href="http://127.0.0.1:8080/#/population/person/main">12344</a>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: blue;
    }
  }
}
</style>
