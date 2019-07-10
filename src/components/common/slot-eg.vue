<template>
    <div>
      <header>
        <h3>
          <slot name="header">我是头部</slot>
        </h3>
      </header>
      <main>

      </main>
      <footer>
        <p>我是底部</p>
        <slot></slot>
        <slot name="footer"></slot>
      </footer>
    </div>
</template>

<script>
export default {
  name: 'slot-eg'
}
</script>

<style lang="less" scoped>

</style>
