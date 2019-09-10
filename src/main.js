/**
 * float like a butterfly sting like a bee --Ali
 **/

import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify/lib';
import VueRouter from 'vue-router';
import VueGlide from 'vue-glide-js';
//import colors from 'vuetify/lib/util/colors';

const routes = [

    {
        path: '*',
        component: App.components.SplashScreen,
        meta: {
            guest: true,
            title: "Anima",
            ticker: false,
            topappbar: false,
            bottombar: false

        }
    },
    {
        path: '/home',
        component: App.components.Front,
        meta: {
            guest: true,
            title: "Home",
            ticker: true,
            topappbar: true,
            bottombar: true

        }
    },
    {
        path: '/login',
        component: App.components.Login,
        meta: {
            guest: true,
            title: "login",
            ticker: false,
            topappbar: true,
            bottombar: true
        }
    },
    {
        path: '/signup',
        component: App.components.Signup,
        meta: {
            guest: true,
            title: "Signup",
            ticker: false,
            topappbar: true,
            bottombar: true

        }
    },
    {
        path: '/exchange',
        component: App.components.Exchange,
        meta: {
            guest: false,
            requiresAuth: true,
            title: "Exchange",
            ticker: false,
            topappbar: true,
            bottombar: true
        }
    },
    {
        path: '/balances',
        component: App.components.Balances,
        meta: {
            guest: false,
            requiresAuth: true,
            title: "Balances",
            ticker: false,
            topappbar: true,
            bottombar: true
        }
    },
    {
        path: '/overview',
        component: App.components.Overview,
        meta: {
            guest: false,
            requiresAuth: false,
            title: "Overview",
            ticker: false,
            topappbar: true,
            bottombar: true
        }

    },
    {
        path: '/marketcap',
        component: App.components.Marketcap,
        meta: {
            guest: false,
            requiresAuth: true,
            title: "Marketcap",
            ticker: false,
            topappbar: true,
            bottombar: true
        }
    },
    {
        path: '/trade', component: App.components.Trade,
        meta: {
            guest: true,
            title: "Trade",
            ticker: false,
            topappbar: true,
            bottombar: true
        }
    },
    {
        path: '/applytolist', component: App.components.ApplyToList,
        meta: {
            guest: true,
            title: "Apply To List",
            ticker: false,
            topappbar: true,
            bottombar: true
        }
    },
    {
        path: '/faq', component: App.components.Faq,
        meta: {
            guest: true,
            title: "Faq",
            ticker: false,
            topappbar: true,
            bottombar: true
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
const vuetifyOptions = {}
Vue.use(Vuetify);

new Vue({
    vuetify: new Vuetify(vuetifyOptions),
    router: router,
    render: h => h(App),
}).$mount('#app');
