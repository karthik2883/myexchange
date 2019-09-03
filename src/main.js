import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import VueGlide from 'vue-glide-js';




const routes = [
    {
        path: '/',
        component: App.components.Front,
        meta: {
            guest: true,
            title: "Home",
            ticker: true

        }
    },
    {
        path: '/login',
        component: App.components.Login,
        meta: {
            guest: true,
            title: "login",
            ticker: false
        }
    },
    {
        path: '/signup',
        component: App.components.Signup,
        meta: {
            guest: true,
            title: "Signup",
            ticker: false

        }
    },
    {
        path: '/exchange',
        component: App.components.Exchange,
        meta: {
            guest: false,
            requiresAuth: true,
            title: "Exchange",
            ticker: false
        }
    },
    {
        path: '/overview',
        component: App.components.Overview,
        meta: {
            guest: false,
            requiresAuth: false,
            title: "Overview",
            ticker: false
        }

    },
    {
        path: '/marketcap',
        component: App.components.Marketcap,
        meta: {
            guest: false,
            requiresAuth: true,
            title: "Marketcap",
            ticker: false
        }
    },
    {
        path: '/trade', component: App.components.Trade,
        meta: {
            guest: true,
            title: "Trade"
        }
    },
    {
        path: '/applytolist', component: App.components.ApplyToList,
        meta: {
            guest: true,
            title: "applytolist",
            ticker: false
        }
    },
    {
        path: '/faq', component: App.components.Faq,
        meta: {
            guest: true,
            title: "Faq",
            ticker: false
        }
    }

];

const router = new VueRouter({ routes, mode: 'history' });
router.beforeEach((to, from, next) => {
    document.title = `EvrEx - ${to.meta.title}`

    next()
})
Vue.use(VueRouter);
Vue.use(VueGlide);


Vue.config.productionTip = false;

new Vue({
    vuetify,
    router: router,
    render: h => h(App)
}).$mount('#app');
