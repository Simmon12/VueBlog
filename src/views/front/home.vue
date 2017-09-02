<template>
  <div class="main">
    <aside class="nav-side">
      <div class="top">
        <div class="l-circle"></div>
        <div class="s-circle"><router-link to="/home/articleList"><img src="./../../assets/avater.jpg"></router-link></div>
      </div>
      <div class="nav-main">
        <p class="name">荔枝淼淼</p>
        <small class="subtitle">Never stop trying !!</small>
        <div class="homePage"><router-link to="/home">主页</router-link></div>
        <div class="icon"><a href="https://github.com/Simmon12" target="_blank"><img src="./../../assets/github.png"></a></div>
        <div class="link">
          <span class="all-article">所有文章/</span><span class="about-me"><a href="/admin">关于我/</a></span><span class="relative-link"><a href="/login">管理</a></span>
        </div>

      </div>
   </aside>
    <div class="right-side">
       <div class="content-wrapper">
         <div class="content">
           <router-view></router-view>
         </div>
       </div>
    </div>
  </div>
</template>
<style scoped>
.main {
  display: flex;
  position: absolute;
  top: 0px;
  bottom: 0px;
  overflow: hidden;
  width: 100%;
}
.right-side {
  flex: 1;
  overflow-y: scroll;
  background: #eaeaea
}

/* nav-side*/
aside {
  flex: 0 0 320px;
  width: 320px;
  height: 100%;
  font-weight: bold;
}
.top {
  height: 180px;
  background: #4d4d4d;
  position: relative;
}
.l-circle {
  position: absolute;
  bottom: -65px;
  width: 130px;
  height: 130px;
  margin-left: -65px;
  left: 50%;
  border-radius: 130px;
 background: white;
}
.s-circle {
  position: absolute;
  width: 120px;
  height: 120px;
  bottom: -60px;
  margin-left: -60px;
  left: 50%;
  border-radius: 120px;
  border: 1px solid #eaeaea;
}
.s-circle img {
  width: 120px;
  height: 120px;
  border-radius: 120px;

}
.nav-main {
  margin-top: 90px;
  font-family: Roboto,serif;
  font-weight: normal;
}
.nav-main .name {
    text-align: center;
    /*margin: .67em 0;*/
    font-size: 30px;
    -webkit-transition: .3s;
    transition: .3s;
    color: #696969;

}
.nav-main .subtitle {
    text-align: center;
    color: #999;
    font-size: 14px;
    font-weight: bold;
    line-height: 25px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

}
.nav-main .homePage {
  margin-top: 60px;
  text-align: center;
  font-size: 20px;
  color: #696969;
  line-height: 35px;
}
.nav-main .homePage a:hover {
  color: #c8cbe3;
}
.nav-main .link{
  font-size: 14px;
  color: #999;
  text-align: center;
  margin-top: 80px;
}
.nav-main .link a {
  color: #999;
}
.nav-main .icon {
  text-align: center;
}

/** nav-side end*/




.content-wrapper {
  /*box-sizing: border-box;*/
  /*margin: 50px auto;*/
  position: relative;
  background: white;
  margin: 20px;
  margin-right: 40px;
  margin-left: 40px;
  margin-bottom: 10px;

}
.content {
  box-sizing: content-box;
  max-width: 800px;
  min-height: 670px;
  margin: 10px auto;
  padding-top: 20px;
  margin-bottom: 20px;

}

</style>
