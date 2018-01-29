<template>
  <div class="main">
    <aside class="nav-side">
      <div class="top">
        <div class="l-circle"></div>
        <div class="s-circle"><router-link to="/home/articleList"><img src="./../../assets/avater.jpg"></router-link></div>
      </div>
      <div class="nav-main">
        <p class="name">荔枝淼淼</p>
        <div class="icon"><a href="https://github.com/Simmon12" target="_blank"><img src="./../../assets/github.png"></a></div>
        <small class="subtitle">Never stop trying !!</small>
        <router-link to="/home"><div class="homePage">主页</div></router-link>

        <div class="link">
          <span class="all-article"><router-link to="/home/articleList"> 所有文章/</router-link></span><span class="about-me"><router-link to="/home/userInfo">关于我/</router-link></span><span class="relative-link"><a href="/admin">管理</a></span>
        </div>

      </div>
   </aside>
    <div class="right-side">
       <div class="content-wrapper">
         <div class="content">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
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
  flex: 0 0 20%;
  width: 20%;
  min-width: 150px;
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
.nav-main .homePage  a {
  color: #696969;
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
  margin-top: 5px;
  text-align: center;
}

/** nav-side end*/


@media only screen and (max-width: 50em) {
  .main {
    display: block;
    background: #eaeaea;
    overflow:scroll;
  }
  .right-side {
    display: block;
    overflow-y: hidden;
  }
  aside {
    display: block;
    width: 100%;
    height: 280px;
  }
  .top {
    height: 100px;
  }
  .l-circle {
    bottom: -40px;
  }
  .s-circle {
    bottom: -37px;
  }
  .nav-main {
    margin-top: 0;
    padding-top: 20px;

    background: #eaeaea;
  }
  .nav-main .name {
    font-size: 26px;
    margin-bottom: 5px;
  }
  .nav-main .subtitle {
    margin-top: 0px;

  }
  .nav-main .icon {
    display: none;
  }
  .nav-main .homePage {
    margin: 20px auto;
    padding: 5px;
    width: 50%;
    background-color: #a0a0a0;
    box-shadow: 0 0 4px #ccc;
    cursor: pointer;
    border-radius:5px;
  }
  .nav-main .homePage  {
    color: white;
  }
  .nav-main .homePage a:hover {
    color: white;
  }
  .nav-main .link {
    display: none;
  }
}



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
  width: 60%;
  min-height: 670px;
  margin: 10px auto;
  padding-top: 20px;
  margin-bottom: 20px;
}
@media only screen and (max-width: 50em) {
  .content-wrapper {
    width: 96%;
    margin: 20px auto;
  }
}

</style>
