<template>
  <div class="home">
    <van-cell-group>
      <van-field v-model="username" label="账号" placeholder="请输入用户名" />
    </van-cell-group>
    <!-- 输入密码 -->
    <van-field v-model="password" type="password" label="密码" />
    <van-button type="info" @click="gohome()">登录</van-button>
  </div>
</template>

<script>
import { Button } from 'vant';
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data(){
    return {
      username:'',
      password:'',
      userToken:''
    }
  },
    name: 'Home',
    components: {
    HelloWorld
  },
  methods:{
    gohome(){
      this.$router.push({
        path: `/about`,
      })
    }
  }
}
</script>

<style>
.home {
  /* border-radius: 15px; */
  size:1px;
  height: 50px;
  line-height: 50px;
  background-color: #20a0ff;
  color: #fff;
  text-align: center;
}
</style>
