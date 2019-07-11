<template>
  <div class="home">
    <canvas id="canvas" width="1200" height="800"></canvas>
    <img alt="Vue logo" src="~@img/logo.jpg">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="img"></div>
  </div>
</template>

<script>
import HelloWorld from '@/components/business/HelloWorld.vue'
// import { getTestData } from '@/http/moduleA.js'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      ctx: null
    }
  },
  mounted () {
    this.ctx = document.getElementById('canvas').getContext('2d')
    let img = new Image()
    img.src = '/2.jpg'
    img.onload = () => {
      this.draw(img)
    }
  },
  methods: {
    draw (img) {
      this.ctx.drawImage(img, 0, 0, 2869, 1920, 0, 0, 1200, 800)
      for (let i = 1; i <= 3; i++) {
        this.ctx.globalAlpha = 0.3 * i
        this.ctx.drawImage(img, 80 * i - 80, 0, 60, 1920, 60 * i - 60, 0, 60, 800)
        this.ctx.drawImage(img, 2869 - (80 * i), 0, 60, 1920, 1200 - (60 * i), 0, 60, 800)
      }
    },
    blurEffect  (canvasa, canvasb, ctxa, ctxb) {
      let tmpImageData = ctxa.getImageData(0, 0, canvasa.width, canvasa.height)
      let tmpPixelData = tmpImageData.data
      let imageData = ctxa.getImageData(0, 0, canvasa.width, canvasa.height)
      let pixelData = imageData.data

      let blurR = 3
      let totalNum = (2 * blurR + 1) * (2 * blurR + 1)
      for(let i = blurR; i < canvasb.height - blurR; i ++) {
        for(let j = blurR; j < canvasb.width - blurR; j++) {
          var totalr = 0, totalg = 0, totalb = 0
          for(let dx = -blurR; dx <= blurR; dx++) {
            for(let dy = -blurR; dy <= blurR; dy++) {
              let x = i + dx
              let y = j + dy
              let p1 = x * canvasb.width + y
              totalr += tmpPixelData[p1 * 4 + 0]
              totalg += tmpPixelData[p1 * 4 + 1]
              totalb += tmpPixelData[p1 * 4 + 2]
            }
          }
          let p = i * canvasb.width + j
          pixelData[p * 4 + 0] = totalr / totalNum
          pixelData[p * 4 + 1] = totalg / totalNum
          pixelData[p * 4 + 2] = totalb / totalNum
        }
      }
      ctxb.putImageData(imageData, 0, 0, 0, 0, canvasb.width, canvasb.width)
    }
  }
}
</script>

<style lang="css" scoped>
  .img {
    /*margin: 0 auto;*/
    width: 500px;
    height: 200px;
    background: url("~@img/logo.jpg");
    background-size: 500px;
  }
  #canvas {
    background-color: #000;
    display: block;
    margin: 10px auto;
  }
</style>
