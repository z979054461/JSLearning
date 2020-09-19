# vueRouter

## 动态路由匹配

1. “动态路径参数”(dynamic segment) 使用冒号 : 标记。
    当匹配到一个路由时，参数值会被设置到 this.$route.params，可以在每个组件内使用。
    ```javascript
    const User = {
    template: '<div>User {{ $route.params.id }}</div>'
    }

    { path: '/user/:id', component: User }
    ```

2. 当使用路由参数时,原来的组件实例会被复用。意味着组件的生命周期钩子不会再被调用。

    解决方案：

    1. 
    ```javascript
    watch: {
        '$route' (to, from) {
        // 对路由变化作出响应...
        }
    }
    ```

    2. beforeRouteUpdate 导航守卫
    ```javascript
    beforeRouteUpdate (to, from, next) {
    // react to route changes...
    // don't forget to call next()
    }
    ```

3. 匹配任意路径 使用通配符 (*)

    '*' //会匹配所有路径

    '/user-*' //会匹配以 `/user-` 开头的任意路径

    当使用一个通配符时，$route.params 内会自动添加一个名为 pathMatch 参数。它包含了 URL 通过通配符被匹配的部分：

4. 高阶匹配模式

    vue-router 使用 [path-to-regexp](https://github.com/pillarjs/path-to-regexp/tree/v1.7.0) 作为路径匹配引擎，所以支持很多高级的匹配模式，例如：可选的动态路径参数、匹配零个或多个、一个或多个，甚至是自定义正则匹配。查看它的 [文档](https://github.com/pillarjs/path-to-regexp/tree/v1.7.0#parameters) 学习高阶的路径匹配，还有 [这个例子](https://github.com/vuejs/vue-router/blob/dev/examples/route-matching/app.js) 展示 vue-router 怎么使用这类匹配。

5. 匹配优先级
   
    匹配的优先级就按照路由的定义顺序：谁先定义的，谁的优先级就最高。

## 嵌套路由
- 一个被渲染组件同样包含自己的嵌套 `<router-view>`。例如，在 User 组件的模板添加一个 `<router-view>`

    ```javascript
    const User = {
    template: `
        <div class="user">
        <h2>User {{ $route.params.id }}</h2>
        <router-view></router-view>
        </div>
    `
    }
    ```
- 要在嵌套的出口中渲染组件，需要在 VueRouter 的参数中使用 children 配置：
    ```javascript
    const router = new VueRouter({
    routes: [
        { path: '/user/:id', component: User,
        children: [
            {
            // 当 /user/:id/profile 匹配成功，
            // UserProfile 会被渲染在 User 的 <router-view> 中
            path: 'profile',
            component: UserProfile
            },
            {
            // 当 /user/:id/posts 匹配成功
            // UserPosts 会被渲染在 User 的 <router-view> 中
            path: 'posts',
            component: UserPosts
            }
        ]
        }
    ]
    })
    ```

## 编程式的导航
  除了使用 `<router-link>` 创建 a 标签来定义导航链接，我们还可以借助 router 的实例方法，通过编写代码来实现。
 
1. `router.push(location, onComplete?, onAbort?)`

    点击 **`<router-link :to="...">`** 等同于调用 **`router.push(...)`**

    ```javascript
    // 字符串
    router.push('home')

    // 对象
    router.push({ path: 'home' })

    // 命名的路由
    router.push({ name: 'user', params: { userId: '123' }})

    // 带查询参数，变成 /register?plan=private
    router.push({ path: 'register', query: { plan: 'private' }})
    ```

    如果提供了 path，params 会被忽略
    ```javascript
    const userId = '123'
    router.push({ name: 'user', params: { userId }}) // -> /user/123
    router.push({ path: `/user/${userId}` }) // -> /user/123
    // 这里的 params 不生效
    router.push({ path: '/user', params: { userId }}) // -> /user
    ```
    同样的规则也适用于 router-link 组件的 to 属性

2. `router.replace(location, onComplete?, onAbort?)`

    跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。
    `<router-link :to="..." replace>  router.replace(...)`

3. `router.go(n)`

    这个方法的参数是一个整数，意思是在 history 记录中向前或者后退多少步，类似 window.history.go(n)

    ```javascript
    // 在浏览器记录中前进一步，等同于 history.forward()
    router.go(1)

    // 后退一步记录，等同于 history.back()
    router.go(-1)

    // 前进 3 步记录
    router.go(3)

    // 如果 history 记录不够用，那就默默地失败呗
    router.go(-100)
    router.go(100)
    ```

## 命名路由
- 用名称来标识一个路由,不设置名称将导航到首页
    ```javascript
    const router = new VueRouter({
    routes: [
        {
        path: '/user/:userId',
        name: 'user',
        component: User
        }
    ]
    })
    ```
    要链接到一个命名路由，可以给 router-link 的 to 属性传一个对象：

    ```<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>```

    或者

    ```router.push({ name: 'user', params: { userId: 123 }})```

    这两种方式都会把路由导航到 /user/123 路径。

## 命名视图
- 你可以在界面中拥有多个单独命名的视图，而不是只有一个单独的出口。
    ```html
    <router-view class="view one"></router-view> //router-view 没有设置名字，默认为 default
    <router-view class="view two" name="a"></router-view>
    <router-view class="view three" name="b"></router-view>
    ```

    一个视图使用一个组件渲染，因此对于同个路由，多个视图就需要多个组件。确保正确使用 components 配置 (带上 s)：

    ```javascript
    const router = new VueRouter({
    routes: [
        {
        path: '/',
        components: {
            default: Foo,
            a: Bar,
            b: Baz
        }
        }
    ]
    })
    ```
- 嵌套命名视图
  - Nav 只是一个常规组件。
  - UserSettings 是一个视图组件。
  - UserEmailsSubscriptions、UserProfile、UserProfilePreview 是嵌套的视图组件。
    ```
    /settings/emails                                       /settings/profile
    +-----------------------------------+                  +------------------------------+
    | UserSettings                      |                  | UserSettings                 |
    | +-----+-------------------------+ |                  | +-----+--------------------+ |
    | | Nav | UserEmailsSubscriptions | |  +------------>  | | Nav | UserProfile        | |
    | |     +-------------------------+ |                  | |     +--------------------+ |
    | |     |                         | |                  | |     | UserProfilePreview | |
    | +-----+-------------------------+ |                  | +-----+--------------------+ |
    +-----------------------------------+                  +------------------------------+
    ```
    ```html
    <!-- UserSettings.vue -->
    <div>
    <h1>User Settings</h1>
    <NavBar/>
    <router-view/>
    <router-view name="helper"/>
    </div>
    ```
    ```javascript
    {
    path: '/settings',
    // 你也可以在顶级路由就配置命名视图
    component: UserSettings,
    children: [{
        path: 'emails',
        component: UserEmailsSubscriptions
    }, {
        path: 'profile',
        components: {
        default: UserProfile,
        helper: UserProfilePreview
        }
    }]
    }
    ```

## 重定向和别名
1. 重定向

    重定向也是通过 routes 配置来完成，下面例子是从 /a 重定向到 /b：
    ```javascript
    const router = new VueRouter({
    routes: [
        { path: '/a', redirect: '/b' }
        { path: '/a', redirect: { name: 'foo' }}//命名路由
        { path: '/a', redirect: to => {//动态返回重定向目标
        // 方法接收 目标路由 作为参数
        // return 重定向的 字符串路径/路径对象
        }}
    ]
    })
    ```
    注意导航守卫并没有应用在跳转路由上，而仅仅应用在其目标上。在下面这个例子中，为 /a 路由添加一个 beforeEach 或 beforeLeave 守卫并不会有任何效果。
2. 别名

    “重定向”的意思是，当用户访问 /a时，URL 将会被替换成 /b，然后匹配路由为 /b，那么“别名”又是什么呢？

    /a 的别名是 /b，意味着，当用户访问 /b 时，URL 会保持为 /b，但是路由匹配则为 /a，就像用户访问 /a 一样。

## 路由组件传参
    在组件中使用 $route 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。  
    通过 props 解耦
    ```javascript
    const User = {
    props: ['id'],
    template: '<div>User {{ id }}</div>'
    }
    const router = new VueRouter({
    routes: [
        { path: '/user/:id', component: User, props: true },

        // 对于包含命名视图的路由，你必须分别为每个命名视图添加 `props` 选项：
        {
        path: '/user/:id',
        components: { default: User, sidebar: Sidebar },
        props: { default: true, sidebar: false }
        }
    ]
    })
    ```
    1. 布尔模式

        如果 props 被设置为 true，route.params 将会被设置为组件属性。
    2. 对象模式

        如果 props 是一个对象，它会被按原样设置为组件属性。当 props 是静态的时候有用。
        ```javascript
        const router = new VueRouter({
        routes: [
            { path: '/promotion/from-newsletter', component: Promotion, props: { newsletterPopup: false } }
        ]
        })
        ```
    3. 函数模式

        你可以创建一个函数返回 props。这样你便可以将参数转换成另一种类型，将静态值与基于路由的值结合等等。
        ```javascript
        const router = new VueRouter({
        routes: [
            { path: '/search', component: SearchUser, props: (route) => ({ query: route.query.q }) }
        ]
        })
        ```
        URL /search?q=vue 会将 {query: 'vue'} 作为属性传递给 SearchUser 组件。

## HTML5 History 模式
- vue-router 默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。

    如果不想要很丑的 hash，我们可以用路由的 history 模式，这种模式充分利用 history.pushState API 来完成 URL 跳转而无须重新加载页面。
    ```javascript
    const router = new VueRouter({
    mode: 'history',
    routes: [...]
    })
    ```
    这个模式需要后端配置支持，先跳过。

---

## 导航守卫
参数或查询的改变并不会触发进入/离开的导航守卫。你可以通过观察 $route 对象来应对这些变化，或使用 beforeRouteUpdate 的组件内守卫。  
- 全局前置守卫 `router.beforeEach`
    ```javascript
    const router = new VueRouter({ ... })
    /**
    * {Route} to 目标 路由对象
    * {Route} from 当前要离开的路由对象
    * {Function} next  一定要调用该方法来 resolve 这个钩子。
    */
    router.beforeEach((to, from, next) => {
    // ...
    })
    ```
    - `next()`: 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。
    - `next(false)`: 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址。
    - `next('/')` 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向 next 传递任意位置对象，且允许设置诸如 replace: true、name: 'home' 之类的选项以及任何用在 router-link 的 to prop 或 router.push 中的选项。
    - `next(error)`: (2.4.0+) 如果传入 next 的参数是一个 Error 实例，则导航会被终止且该错误会被传递给 router.onError() 注册过的回调。

- 全局解析守卫 `router.beforeResolve`
    和 `router.beforeEach` 类似，区别是在导航被确认之前，同时在所有组件内**守卫和异步路由组件被解析之后**，解析守卫就被调用。
    ```javascript
    router.afterEach((to, from, next) => {
    // ...
    })
    ```

- 全局后置钩子 `router.afterEach`
    ```javascript
    router.afterEach((to, from) => {
    // ...
    })
    ```

- 路由独享的守卫 `beforeEnter`
    beforeEnter 在全局beforeResolve之前
    ```javascript
    const router = new VueRouter({
    routes: [
        {
        path: '/foo',
        component: Foo,
        beforeEnter: (to, from, next) => {
            // ...
        }
        }
    ]
    })
    ```

- 组件内的守卫 
    - beforeRouteEnter
    - beforeRouteUpdate 
    - beforeRouteLeave
    ```javascript
    const Foo = {
    template: `...`,
    beforeRouteEnter (to, from, next) {
        // 在渲染该组件的对应路由被 confirm 前调用
        // 不！能！获取组件实例 `this`
        // 因为当守卫执行前，组件实例还没被创建
    },
    beforeRouteUpdate (to, from, next) {
        // 在当前路由改变，但是该组件被复用时调用
        // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
        // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
        // 可以访问组件实例 `this`
    },
    beforeRouteLeave (to, from, next) {
        // 导航离开该组件的对应路由时调用
        // 可以访问组件实例 `this`
    }
    }
    ```
    注意 `beforeRouteEnter` 是支持给 next 传递回调的唯一守卫。
    ```javascript
    beforeRouteEnter (to, from, next) {
    next(vm => {
        // 通过 `vm` 访问组件实例
    })
    }
    ```
    `beforeRouteLeave`通常用来禁止用户在还未保存修改前突然离开。该导航可以通过 next(false) 来取消。
    ```javascript
    beforeRouteLeave (to, from, next) {
    const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
    if (answer) {
        next()
    } else {
        next(false)
    }
    }
    ```

- 完整的导航解析流程
1. 导航被触发。
2. 在失活的组件里调用 beforeRouteLeave 守卫。
3. 调用全局的 beforeEach 守卫。
4. 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
5. 在路由配置里调用 beforeEnter。
6. 解析异步路由组件。
7. 在被激活的组件里调用 beforeRouteEnter。
8. 调用全局的 beforeResolve 守卫 (2.5+)。
9. 导航被确认。
10. 调用全局的 afterEach 钩子。
11. 触发 DOM 更新。
12. 用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。

## 路由元信息
定义路由的时候可以配置 meta 字段：  

    ```javascript
    const router = new VueRouter({
    routes: [
        {
        path: '/foo',
        component: Foo,
        children: [
            {
            path: 'bar',
            component: Bar,
            // a meta field
            meta: { requiresAuth: true }
            }
        ]
        }
    ]
    })
    ```

## 过渡动效
- 全局
    ```html
    <transition>
    <router-view></router-view>
    </transition>
    ```
- 单组件
    ```javascript
    const Foo = {
    template: `
        <transition name="slide">
        <div class="foo">...</div>
        </transition>
    `
    }

    const Bar = {
    template: `
        <transition name="fade">
        <div class="bar">...</div>
        </transition>
    `
    }
    ```
- 基于路由的动态过渡
    ```html
    <!-- 使用动态的 transition name -->
    <transition :name="transitionName">
    <router-view></router-view>
    </transition>
    ```
    ```js
    // 接着在父组件内
    // watch $route 决定使用哪种过渡
    watch: {
    '$route' (to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
    }
    ```

## 数据获取
- 导航完成后获取数据
先完成导航，然后在接下来的组件生命周期钩子中获取数据。在数据获取期间显示“加载中”之类的指示。  
- 导航完成之前获取
导航完成前，在路由进入的守卫中获取数据，在数据获取成功后执行导航。(数据获取期间，会停留在当前页)

## 滚动行为
使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样。 vue-router 能做到，而且更好，它让你可以自定义路由切换时页面如何滚动。  
**注意: 这个功能只在支持 history.pushState 的浏览器中可用。**  
```js
const router = new VueRouter({
  routes: [...],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
  }
})
//example
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

  // 模拟“滚动到锚点”的行为。也利用路由元信息更细颗粒度地控制滚动
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
```

## 路由懒加载
- 结合 Vue 的异步组件和 Webpack 的代码分割功能，轻松实现路由组件的懒加载。  
    1. 将异步组件定义为返回一个 Promise 的工厂函数 (该函数返回的 Promise 应该 resolve 组件本身)：
    ```js
    const Foo = () => Promise.resolve({ /* 组件定义对象 */ })
    ```
    2. 在 Webpack 2 中，我们可以使用动态 import语法来定义代码分块点 (split point)：
    ```js
    import('./Foo.vue') // 返回 Promise
    ```
    结合这两者，这就是如何定义一个能够被 Webpack 自动代码分割的异步组件。  
    ```js
    const Foo = () => import('./Foo.vue')
    ```
    在路由配置中什么都不需要改变，只需要像往常一样使用 Foo：
    ```js
    const router = new VueRouter({
    routes: [
        { path: '/foo', component: Foo }
    ]
    })
    ```
- 把组件按组分块
有时候我们想把某个路由下的所有组件都打包在同个异步块 (chunk) 中。只需要使用 命名 chunk，一个特殊的注释语法来提供 chunk name (需要 Webpack > 2.4)。
```js
const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue')
const Bar = () => import(/* webpackChunkName: "group-foo" */ './Bar.vue')
const Baz = () => import(/* webpackChunkName: "group-foo" */ './Baz.vue')
```   
Webpack 会将任何一个异步模块与相同的块名称组合到相同的异步块中。
