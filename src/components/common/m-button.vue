<template>
  <div
    :style="{'backgroundColor': color }"
    @click="clickButton(color)"
    class="m-button">
    <slot></slot>
  </div>
</template>

<script>
// 判断参数是否是其中之一
function oneOf (value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true
    }
  }
  return false
}
export default {
  name: 'MButton',
  inject: ['app'],
  props: {
    color: {
      type: String,
      default: 'blue',
      validator (value) {
        return oneOf(value, ['green', 'red', 'blue'])
      }
    }
  },
  mounted () {
    console.log(111, this.app.loginName)
  },
  methods: {
    clickButton (title) {
      this.$emit('click-button', title)
    }
  }
}
</script>

<style lang="less" scoped>
.m-button {
  display: inline-block;
  vertical-align: middle;
  width: 100px;
  height: 40px;
  margin: 5px;
  text-align: center;
  line-height: 40px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}
</style>
