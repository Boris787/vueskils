import Vue from 'vue'
import router from 'vue-router'
import Skills from './components/Skills.vue'
import About from './components/About.vue'

Vue.use(router)

export default new router ({
    routes: [
        {
            path: '/',
            name: 'skills',
            component: Skills
        },
        {
            path: '/about/:name',
            name: 'about',
            component: About
        }
    ]
})