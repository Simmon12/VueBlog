<template>
  <el-row class="container">
    <!--Header-->
    <el-col :span="24" class="header">
      <el-col :span="4" class="title">VUEADMIN</el-col>
      <el-col :span="20" class="user-setting">
         <el-dropdown trigger="click">
           <span class="el-dropdown-link" style="color: white; font-weight:bold; font-size: 16px;">用户设置&nbsp;<i class="el-icon-caret-bottom el-icon--right"style="padding-left:10px"></i></span>
           <el-dropdown-menu slot="dropdown" @select="userSelect">
             <el-dropdown-item style="color:#8b93a1; font-size:16px;" index="1">个人信息</el-dropdown-item>
             <el-dropdown-item style="color:#8b93a1; font-size: 16px;"index="2">退出登录</el-dropdown-item>
           </el-dropdown-menu>
         </el-dropdown>
      </el-col>
    </el-col>
    <!--Header end-->

    <!--main-content-->
    <el-col :span="24" class="main">
      <aside>
         <el-menu default-active="1" class="el-menu-vertical-demo nav-aside" @select="handleSelect">
            <el-menu-item index="1"><i class="el-icon-document"></i>后台首页</el-menu-item>
            <el-menu-item index="2"><i class="el-icon-edit"></i>发布文章</el-menu-item>
            <el-menu-item index="3"><i class="el-icon-setting"></i>修改信息</el-menu-item>
            <el-menu-item index="4"><i class="el-icon-caret-left"></i>退出登录</el-menu-item>
            <el-menu-item index="5"><i class="el-icon-document"></i>返回博客页</el-menu-item>
         </el-menu>
      </aside>
      <section class="content-container">
        <div class="grid-content bg-purple-light">
          <el-col :span="24" class="breadcrumb">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item v-for="item in breadItems"><router-link v-bind:to='item.path' >{{item.title}}</router-link></el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
          <el-col :span="24" class="content-wrapper">
            <transition name="fade" mode="out-in">
              <!-- <keep-alive> -->
                <router-view></router-view>
              <!-- </keep-alive> -->
            </transition>
          </el-col>
        </div>
      </section>
    </el-col>
    <!--main-conent end-->
  </el-row>
</template>

<script>
   import axios from 'axios';
   export default {
    data() {
      return {
        breadItems: [
          {
            title: '后台首页',
            path: '/admin/adminList'
          }
        ]
      }
    },

    methods: {
      handleSelect(key, keyPath) {
        switch(key) {
          case '1':
            this.$router.push('/admin/adminList');
            break;
          case '2':
            this.breadItems.push({
              title: '发布文章',
              path: '/admin/articlePost'
            });
            this.$router.push('/admin/articlePost');
            break;
          case '3':
            this.breadItems.push({
              title: '修改信息',
              path: '/admin/userInfo'
            });
            this.$router.push('/admin/userInfo');
            break;
          case '4':
            axios.get('/api/user/logout')
                 .then((res) => {
                     if(res.data.code === 200) {
                       console.log(res.data.message);
                       window.sessionStorage.removeItem('access-user');
                       this.$router.push('/home');
                     }
                 })
            break;
          case '5':
            this.$router.push('/home');
        }

      },
      userSelect(key, keyPath) {
        switch(key) {
          case '1':
            this.$router.push('/admin/userInfo');
            break;
          case '2':
            console.log("tuichu");
            axios.get('/api/user/logout')
             .then((res) => {
                 if(res.data.code === 200) {
                   console.log(res.data.message);
                   window.sessionStorage.removeItem('access-user');
                   this.$router.push('/home');
                 }
             })
        }

      }
    }
   }
</script>

<style scoped>
.container {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
}

.header {
  height: 60px;
  line-height: 60px;
  background: #20a0ff;
  color: white;
}

.title {
  height: 60px;
  width: 230px;
  font-size:22px;
  color: #fff;
  font-weight: bolder;
  padding-left: 20px;
  padding-right: 20px;
  border-right: 1px solid rgba(238, 241, 146, 0.3) ;
}
.user-setting {
  cursor: pointer;
  text-align: right;
  padding-right: 40px;
  float: right;
}

.main {
  display: flex;
  position: absolute;
  top: 60px;
  bottom: 0px;
  overflow: hidden;
}
aside {
  flex: 0 0 230px;
  width: 230px;
}
.nav-aside {
  height: 100%;
  font-weight: bold;
}
.content-container {
  flex: 1;
  overflow-y: scroll;
  padding: 20px;
}
.breadcrumb {
  padding-bottom: 6px;
  margin-bottom: 10px;
  border-bottom: 1px solid #f5f5f5;
}



</style>
