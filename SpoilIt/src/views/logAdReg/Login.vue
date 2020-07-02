<template>
  <div class="box">
    <van-tabs v-model="active" title-style="font-size:20px" swipeable  title-active-color="#8479EF" color="#8479EF">
      <van-tab>
        <template #title><p class="title_logReg">登录</p> </template>
        <van-cell-group>
          <div class="box_login">
            <div class="tep">
              <van-field class="tep_bg"
                         autocomplete="off"
                         type="tel"
                         v-model="phone"
                         placeholder="请输入账号"
                         left-icon="user-o"
              ></van-field>
              <!--<input type="text" placeholder="请输入手机号">-->
            </div>
            <div class="mima">
              <van-field class="tep_bg"
                         autocomplete="off"
                         v-model="verifyCode"
                         type="password"
                         placeholder="请输入密码"
                         left-icon="closed-eye"
              ></van-field>
            </div>
            <!--<p>> 忘记密码</p>-->
            <div class="btn_login">
              <van-button round type="info" block color="linear-gradient(to right, #cf95ff, #9b71f9)" @click="LoginBtn">登录</van-button>
            </div>
          </div>
        </van-cell-group>
      </van-tab>
      <van-tab>
        <template #title><p class="title_logReg">注册</p> </template>
        <Registered></Registered>
      </van-tab>
    </van-tabs>
    <div class="desc">
      <p>——  快捷登录  ——</p>
      <div class="icon_Tencentt">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-QQ1"></use>
          </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-weixin"></use>
        </svg>
      </div>
      <p>用户协议</p>
    </div>
  </div>
</template>
<script>
import Registered from './Registered'
import axios from 'axios'
export default {
  components: {
    Registered
  },
  data () {
    return {
      active: 2,
      phone: '',
      verifyCode: ''
    }
  },
  computed: {

  },
  methods: {
    // handleLogin () {
    //   console.log('成功')
    // }
    LoginBtn () {
      axios({
        url: '',
        method: 'post',
        data: {
          uname: this.phone,
          upwd: this.verifyCode
        }
      }).then(function (res) {
        console.log('登录')
        // localStorage.setItem('ele_login', true)
        this.$router.push({path: '/CommodityHome'})
      }).catch(function () {
        console.log('请求失败')
      })
    }

  }

}
</script>
<style scoped>
  .box{
    width: 85%;
    margin: 30% auto;
  }
  .box_login{
    margin: 10% auto;
  }
  .tep{
    margin-bottom: 10%;
  }
  .tep_bg{
    border-radius: 30px;
    border:1px solid #9b71f9;
    box-shadow: #cf95ff 2px 3px 5px 3px ;
  }
  .btn_login{
    margin-top: 15%;
    text-align: center;
  }
  .desc{
    margin-top: 100px;
  }
  .desc>p{
    color: #9b71f9;
    text-align: center;
  }
  .icon_Tencentt{
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .icon{
    margin-left: 20px;
  }
.title_logReg{
  font-size: 25px;
  font-family: "Palatino Linotype";
}

</style>
