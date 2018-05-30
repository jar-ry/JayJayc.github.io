import Vue from 'vue'
import Router from 'vue-router'

// Import all the components (pages)
import Home from '@/components/Home.vue'
import AboutMe from '@/components/AboutMe.vue'
import Skills from '@/components/Skills.vue'
import Projects from '@/components/Projects.vue'

// Slides for projects
import Web from '@/components/slides/Web.vue'
import Blockchain from '@/components/slides/Blockchain.vue'
import Java from '@/components/slides/Java.vue'

// Use Vue router
Vue.use(Router)

// Routes for single page app
export default new Router({
  routes :[
    {path:'/', component: Home},
    {path:'/about-me', component: AboutMe},
    {path:'/skills', component: Skills},
    {path:'/projects', component: Projects},
    {path:'/projects/web', component: Web},
    {path:'/projects/blockchain', component: Blockchain},
    {path:'/projects/java', component: Java}
  ]
});
