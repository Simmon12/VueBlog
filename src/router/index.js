import Vue from 'vue'
import Router from 'vue-router'

import home from '@/views/front/home'
import list from '@/components/ArticleList'
import postDetail from '@/views/front/postDetail'
import admin from '@/views/back/admin'
import adminList from '@/views/back/adminList'
import articlePost from '@/views/back/articlePost'
import userInfo from '@/views/back/userInfoSet'

import login from '@/views/back/login'
import register from '@/views/back/register'

Vue.use(Router)

let router = new Router({
  // mode: 'history',     // 如果不配置mode，就会使用默认的hash模式，该模式下会将路径格式化为#！开头
  routes: [
    {
      path: '/', redirect: '/home'
    },
    {
      path: '/home',
      component: home,
      children: [
        { path: '', component: list},
        { path: 'articleList', component: list},
        { path: 'article/?id=:id',
          name: 'postDetail',
          component: postDetail
        },
        {
          path: 'userInfo',
          component: userInfo
        }
      ]
    },
    {
      path: '/admin',
      component: admin,
      meta: {
        requiresAuth: true,    // 添加该字段，表示这个路由是需要登录
      },
      children: [
        { path: '', component:adminList },
        { path: 'adminList', component: adminList },
        { path: 'userInfo', component: userInfo },
        { path: 'articlePost', component: articlePost},
        {
          path: 'articlePost/?id=:id',
          name: 'editArticle',
          component: articlePost
        }
      ]
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/register',
      component: register
    }

  ]
})

router.beforeEach((to, from, next) => {
  console.log("ttt111: ", to.path);
  console.log("requireAuth: ", to.matched.some(record => record.meta.requiresAuth));
  if(to.matched.some(record => record.meta.requiresAuth)) {              // 判断该路由是否需要登录权限
    console.log("wo bei yongle ");
    let user = JSON.parse(window.sessionStorage.getItem('access-user'))
    // alert("user is  ss ", user);
    if(!user) {
      // alert(user);
      next({path: '/login'})
    } else {
      // alert("ss",user);
      next()
    }
  } else {
    next();
  }
  // if(to.path.startsWith('/login')) {
  //   window.sessionStorage.removeItem('access-user')
  //   next()
  // }else {
  //   let user = JSON.parse(window.sessionStorage.getItem('access-user'))
  //   if(!user) {
  //     next({path: '/login'})
  //   } else {
  //     next()
  //   }
  // }
})

export default router;
