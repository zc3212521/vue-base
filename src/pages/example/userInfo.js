export default {
  data () {
    return {
      userInfo: null
    }
  },
  methods: {
    getUserInfo () {
      // $.ajax('/user/info', (data) => {
      //   this.userInfo = data;
      // });
      let data = {
        gender: '男',
        hobit: '篮球'
      }
      this.userInfo = data
    }
  },
  created () {
    this.getUserInfo()
  }
}
