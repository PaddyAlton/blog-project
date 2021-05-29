import Vue from 'vue'
import VueRouter from 'vue-router'

// component imports
import Post from '@/components/Post'
import Author from '@/components/Author'
import PostsByTag from '@/components/PostsByTag'
import AllPosts from '@/components/AllPosts'

// configure Vue to use VueRouter
Vue.use(VueRouter)

// set up route -> component mappings
const routes = [
    { path: '/author/:username', component: Author },
    { path: '/post/:slug', component: Post },
    { path: '/tag/:tag', component: PostsByTag },
    { path: '/', component: AllPosts },
  ]
  
// create router, an instance of VueRouter that uses the routes above
const router = new VueRouter({
routes: routes,
mode: 'history',
})

// export router
export default router
