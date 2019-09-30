/**
 * float like a butterfly sting like a bee --Ali
 **/

import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify/lib';
import VueRouter from 'vue-router';
import VueGlide from 'vue-glide-js';
import Vuex from 'vuex';
import axios from 'axios'
import VueAxios from 'vue-axios'
import Schema from './components/Common/Schema/WsSchema'

console.log(Schema.ws_auth_schema);
//import colors from 'vuetify/lib/util/colors';
import VueNativeSock from 'vue-native-websocket'
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
        path: '/history',
        component: App.components.History,
        meta: {
            guest: false,
            requiresAuth: true,
            title: "History",
            ticker: false,
            topappbar: true,
            bottombar: true
        }
    },
    {
        path: '/Order',
        component: App.components.Order,
        meta: {
            guest: false,
            requiresAuth: true,
            title: "Order",
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
});


Vue.use(VueRouter);
Vue.use(VueGlide);
Vue.use(Vuex);
Vue.use(VueAxios, axios);
//Vue.prototype.$http = axios;

export const store = new Vuex.Store({
    state: {
        count: 0,
        socket: {
            isConnected: false,
            message: '',
            reconnectError: false

        }
    },
    mutations: {
        SOCKET_ONOPEN(state, event) {

            state.socket.isConnected = true
        },
        SOCKET_ONCLOSE(state, event) {
            state.socket.isConnected = false
        },
        SOCKET_ONERROR(state, event) {
            console.error(state, event)
        },
        // default handler called for all methods
        SOCKET_ONMESSAGE(state, message) {
            state.message = message
        },
        // mutations for reconnect methods
        [WebSocket.WS_RECONNECT](state, count) {
            console.info(state, count)
        },
        [WebSocket.WS_RECONNECT_ERROR](state) {
            state.socket.reconnectError = true;
        },
        increment(state) {
            state.count++
        }
    }
});

Vue.use(VueNativeSock, 'ws://14.98.160.146:8090', {
    format: 'json',
    store: store,
    reconnection: true, // (Boolean) whether to reconnect automatically (false)
    reconnectionAttempts: 5, // (Number) number of reconnection attempts before giving up (Infinity),
    reconnectionDelay: 3000, // (Number) how long to initially wait before attempting a new (1000)

});

Vue.config.productionTip = false;
const vuetifyOptions = {}
Vue.use(Vuetify);

new Vue({
    vuetify: new Vuetify(vuetifyOptions),
    router: router,
    render: h => h(App),
    store,
    methods: {
        socketping() {
            //heart beat .... 1 sec id: should be int
            this.ping = setInterval(() => {
                Vue.prototype.$socket.sendObj({ method: 'server.ping', params: [], id: 1 });
            }, 1000)

        },
        statesubscribe() {
            this.subscribeBTCBCH = setInterval(() => {
                Vue.prototype.$socket.sendObj({
                    method: 'state.subscribe',
                    params: ['BTCBCH'],
                    id: 1
                });
            }, 1000);
            this.subscribeBCHBTC = setInterval(() => {
                Vue.prototype.$socket.sendObj({
                    method: 'state.subscribe',
                    params: ['BCHBTC'],
                    id: 1
                });
            }, 1002);
        }
    },
    created() {
        this.socketping();
        this.statesubscribe();
    },
    beforeDestroy() {
        clearInterval(this.ping)
        clearInterval(this.subscribeBTCBCH)
        clearInterval(this.subscribeBCHBTC)
    }
}).$mount('#app');

