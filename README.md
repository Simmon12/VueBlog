### vue-blog
##### Vue.js+Node.js+Mongodb+Express的前后端分离的个人博客
<h3 style="font-weight: normal"> 主要技术构成</h3>
#### 	前端
* Vue.js , vue-router, axios, 
* UI使用element-ui, 借鉴<a href="http://blog.evanyou.me/">尤雨溪大佬博客</a>的风格和hexo的风格，后期会改.
* 使用sessionStorage保存用户的登录状态，使用router.beforeEach注册全局的before钩子实现前端的登录拦截，后端的拦截待续

#### 后端
* express框架，数据库使用mongodb，
* 插件使用： vue-simplemde, highlight.js, simplemde, 通过以上插件实现markdown编辑器和代码的高亮

#### 待续
* 后台的登录拦截
* 评论功能
* 多人应用博客
* 页数
* 响应式开发和手机上的开发


<h3 style="font-weight: normal"> 运行方式</h3>
``` bash
 npm install
 打开本地的数据库
 npm run dev
 打开服务端：
 cd server
 node app.js
```
访问方式
* 访问主页： localhost:8080/home
* 登录密码： username：admin， password：admin
