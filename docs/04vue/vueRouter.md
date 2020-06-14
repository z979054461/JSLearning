# vueRouter

## 基础
### 动态路由匹配

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

### 嵌套路由
- 一个被渲染组件同样包含自己的嵌套 <router-view>。例如，在 User 组件的模板添加一个 <router-view>

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

### 编程式的导航
    除了使用 <router-link> 创建 a 标签来定义导航链接，我们还可以借助 router 的实例方法，通过编写代码来实现。
 
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
    <router-link :to="..." replace>  router.replace(...)

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

### 命名路由
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

### 命名视图
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

### 重定向和别名
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
### 路由组件传参
- 在组件中使用 $route 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。
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

### HTML5 History 模式
- vue-router 默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。

    如果不想要很丑的 hash，我们可以用路由的 history 模式，这种模式充分利用 history.pushState API 来完成 URL 跳转而无须重新加载页面。
    ```javascript
    const router = new VueRouter({
    mode: 'history',
    routes: [...]
    })
    ```
    这个模式需要后端配置支持，先跳过。

## 进阶
### 导航守卫

### 路由元信息

### 过渡动效

### 数据获取

### 滚动行为

### 路由懒加载

