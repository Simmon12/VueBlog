<template>
  <div>
    <el-form :model="user" :rules="rules2" ref="user" label-position="left" label-width="0px" class="demo-ruleForm login-container">
      <h3 class="title"> 登录</h3>
      <el-form-item prop="account">
        <el-input type="text" v-model="user.account" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="user.password" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
      <el-form-item style="100%;">
        <el-button type="primary" style="width:100%" @click.native.prevent="handleSubmit" :loading="loading">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        user: {
          account: '',
          password: ''
        },
        rules2: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur'},
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur'}
          ]
        },
        checked: true,
        loading: false

      }
    },
    mounted() {
      console.log(this.user);
      console.log(this.user.account);
      console.log(this.user.password);
    },
    methods: {
      handleSubmit(ev) {
        this.$refs.user.validate((valid) => {
          if(valid) {
            this.loading = true;
            axios.post('/api/user/login',{
              user: this.user
            })
            .then((res) => {
              this.loading = false;
              if(res.data.code !== 200) {
                this.$message({
                  message: res.data.message,
                  type: 'error'
                });
              } else {
                window.sessionStorage.setItem('access-user', JSON.stringify(this.user));
                this.$router.push('/admin');
              }

            })
            .catch((err) => {
              console.log(err);
            })
          }
        })

      }
    }
  }
</script>

<style scoped>
  .login-container {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    -moz-border-radius: 10px;
    background-clip: padding-box;
    margin: 160px auto;
    width: 360px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .remember {
    margin: 0px 0px 35px 0px;
  }
</style>
