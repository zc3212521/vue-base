<template>
  <div>
    <div v-for="item in data" :key="item.name" style="padding-left: 20px;">
      <div>
        {{item.name}}
      </div>
      <div v-if="item.child">
        <my-component :data="item.child"></my-component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-component',
  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>

</style>
