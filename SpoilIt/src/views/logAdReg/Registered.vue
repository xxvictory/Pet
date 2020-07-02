<template>
  <!--注册-->
    <van-cell-group>
      <div class="box_registered">
        <div class="tep">
          <van-field class="tep_bg" v-model="tel"
                     type="tel"
                     placeholder="请输入账号"
                     left-icon="user-o"></van-field>
        </div>
        <!--<van-field class="tep_bg"-->
          <!--center-->
          <!--clearable-->
          <!--placeholder="请输入短信验证码"-->
          <!--left-icon="clock-o"-->
        <!--&gt;-->
          <!--<van-button slot="button" color="linear-gradient(to right, #cf95ff, #9b71f9)" size="small" type="primary">发送验证码</van-button>-->
        <!--</van-field>-->
        <van-field class="tep_bg" v-model="tel"
                   type="tel"
                   placeholder="请输入昵称"
                   left-icon="smile-o"></van-field>
        <div class="mima">
          <van-field class="tep_bg" v-model="password"
                     type="password"
                     placeholder="请输入密码"
                     left-icon="closed-eye"
          ></van-field>
      </div>
        <div class="btn_registered">
          <van-button round type="info" block color="linear-gradient(to right, #cf95ff, #9b71f9)">完成注册</van-button>
        </div>
      </div>
    </van-cell-group>
</template>

<script>
export default {
  data () {
    return {
      tel: '',
      password: ''
    }
  }
}
</script>

<style scoped>
  .box_registered{
    margin: 10% auto;
  }
  .tep{
    margin-bottom: 10%;
  }
  .mima{
    margin-top: 10%;
  }
  .tep_bg{
    border-radius: 30px;
    border:1px solid #9b71f9;
    box-shadow: #cf95ff 2px 3px 5px 3px ;
  }
  .btn_registered{
    margin-top: 15%;
    text-align: center;
  }
</style>
