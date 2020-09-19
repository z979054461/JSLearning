import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Bar from '../views/Bar.vue'
import Baz from '../views/Baz.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    // component: Home
    components: {
      default: Home,
      a: Bar,
      b: Baz
    },
    // redirect: to =>{
    //   return '/about'
    // }
  },
  {
    path: '/about',
    alias: '/b',
    name: 'About',
    beforeEnter: (to, from, next) => {
      console.log('about beforeEnter:', {
        to,
        from,
        next
      });
      next()
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  // 动态路径参数 以冒号开头
  {
    name: 'user',
    path: '/user/:id',
    props: true,
    component: () => import( /* webpackChunkName: "user" */ '../views/User.vue'),
    meta: {
      metatest: '/user/:id'
    },
    children: [
      // 当 /user/:id 匹配成功，
      // UserHome 会被渲染在 User 的 <router-view> 中
      {
        path: '', //空的 子路由,当访问/user/:id时渲染
        meta: {
          metatest: '/user/:id home'
        },
        component: () => import( /* webpackChunkName: "UserHome" */ '../views/User/UserHome.vue'),
      },
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'profile',
        meta: {
          metatest: '/user/:id profile'
        },
        component: () => import( /* webpackChunkName: "UserProfile" */ '../views/User/UserProfile.vue'),
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 会被渲染在 User 的 <router-view> 中
        path: 'posts',
        component: () => import( /* webpackChunkName: "UserPosts" */ '../views/User/UserPosts.vue'),
      }
    ]
  },
  {
    path: '/user-*',
    component: () => import( /* webpackChunkName: "user" */ '../views/User-all.vue')
  },
  {
    path: '*',
    component: () => import( /* webpackChunkName: "404" */ '../views/404.vue')
  }
]

function scrollBehavior(to, from, savedPosition) {
  //返回 savedPosition，在按下 后退/前进 按钮时，就会像浏览器的原生表现那样：
  if (savedPosition) {
    return savedPosition
  } else {
    return {
      x: 0,
      y: 0
    }
  }

  // 模拟“滚动到锚点”的行为
  if (to.hash) {
    return {
      selector: to.hash
    }
  }

  //2.8.0 新增 异步滚动 返回一个 Promise 来得出预期的位置描述
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        x: 0,
        y: 0
      })
    }, 500)
  })
}


const router = new VueRouter({
  routes,
  scrollBehavior,
})

router.beforeEach((to, from, next) => {
  console.log('beforeEach:', {
    to,
    from,
    next
  })


  // if(to.path == '/'){
  //   next('/about')
  // }else{
  //   next(new Error('123'))
  // }

  next()
})

router.beforeResolve((to, from, next) => {
  console.log('beforeResolve:', {
    to,
    from,
    next
  })
  next()
})
router.afterEach((to, from) => {
  console.log('afterEach:', {
    to,
    from
  })
})

export default router