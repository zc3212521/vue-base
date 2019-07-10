<template>
  <div class="example">
    <div>
      <h3>eg0: 组件基础</h3>
      <m-button
        v-for="(item, index) in examplesData"
        :color="item.color"
        :key="index"
        @click-button="reciveCB"
      >
        {{ item.title }}
      </m-button>
    </div>
    <a-divider />
    <div>
      <h3>eg1: slot</h3>
      <slot-eg>
        <p>我是内容</p>
      </slot-eg>
    </div>
    <a-divider />
    <div>
      <h3>eg2: 搭建一个简易版的vuex</h3>
      <p>
        从根组件上获取到登录信息： loginName: {{app.loginName}}
      </p>
      <button @click="changeLoginName">change loginName to xiaoming</button>
    </div>
    <a-divider />
    <div>
      <h3>eg3: $children与$parent</h3>
      <children1 />
      <br>
      <p>
        <button @click="changeChild1Name">父组件按钮:改变子组件的Name为：啊哈哈</button>
      </p>
    </div>
    <a-divider />
    <div>
      <h3>eg3: mixin</h3>
      <p>性别：{{userInfo.gender}}</p>
      <p>爱好：{{userInfo.hobit}}</p>
    </div>
    <a-divider />
    <div>
      <h3>eg3: 递归组件</h3>
      <my-component :data="myData" />
    </div>
    <a-divider />
    <div>
      <h3>eg3: 异步 && 动态组件</h3>
      <p><a href="https://cn.vuejs.org/v2/guide/components-dynamic-async.html" target="_blank">见官网</a></p>
    </div>
  </div>
</template>

<script>
import MButton from '@/components/common/m-button'
import children1 from '@/components/common/children1'
import userInfoMixin from './userInfo'
import myComponent from '@/components/common/my-component'
import slotEg from '@/components/common/slot-eg'

export default {
  name: 'example',
  mixins: [userInfoMixin],
  components: {
    MButton,
    children1,
    myComponent,
    slotEg
  },

  inject: ['app'],

  data () {
    return {
      examplesData: [

        {
          title: 'example1'
        },
        {
          title: 'example2',
          color: 'blue'
        },
        {
          title: 'example3',
          color: 'green'
        }
      ],
      myData: [
        {
          name: '1',
          child: [
            {
              name: '1-1',
              child: [
                {
                  name: '1-1-1'
                },
                {
                  name: '1-1-2'
                }
              ]
            }
          ]
        },
        {
          name: '2',
          child: [
            {
              name: '2-1'
            },
            {
              name: '2-2'
            }
          ]
        }
      ]
    }
  },
  mounted () {
    console.log(this.app.loginName)
  },
  methods: {
    reciveCB (color) {
      alert('点击的按钮颜色是：' + color)
    },
    changeLoginName () {
      this.app.getName('xiaoming')
      this.$nextTick(() => {
        console.log('uptate', this.app.loginName)
      })
    },
    changeChild1Name () {
      this.$children.forEach(item => {
        if (item.$options.name === 'children1') {
          item.changeName('啊', '哈哈')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>

</style>
