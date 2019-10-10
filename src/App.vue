<template>
    <v-app class="secondary">
        <AppTopNavigation v-if="$route.meta.topappbar" />
        <v-content>
            <v-container class="py-0 disp-flex flex-center-y flex-grow pa-10">
                <transition name="fade" mode="out-in">
                    <router-view />
                </transition>
            </v-container>
        </v-content>
        <LiveTicker v-if="$route.meta.ticker" />
        <AppBottomNavigation v-if="$route.meta.bottombar" />
        <AppFooter />
    </v-app>
</template>

<script>
import Signup from './components/Acl/Signup';
import Login from './components/Acl/Login';
import SplashScreen from './components/Common/Splash/SplashScreen';
import LiveTicker from './components/Common//Ticker/LiveTicker';
import AppTopNavigation from './components/Common/Navigation/AppTopNavigation';
import Exchange from './components/Backend/Exchange';
import Balances from './components/Backend/Balances';
import History from './components/Backend/History';
import Order from './components/Backend/Order';
import Overview from './components/Overview';
import Marketcap from './components/Marketcap';
import Trade from './components/Trade/Trade';
import AppBottomNavigation from './components/Common/Navigation/AppBottomNavigation';
import AppFooter from './components/Common/Navigation/AppFooter';
import ApplyToList from './components/FrontEnd/ApplyToList';
import Faq from './components/FrontEnd/Faq';
import Front from './components/FrontEnd/Front';
import { constants } from 'crypto';

export default {
    name: 'App',
    components: {
        SplashScreen,
        LiveTicker,
        AppTopNavigation,
        Front,
        ApplyToList,
        Faq,
        Exchange,
        Balances,
        Overview,
        Marketcap,
        Trade,
        AppBottomNavigation,
        AppFooter,
        Login,
        Signup,
        History,
        Order
    },
    data() {
        return {};
    }
};
</script>
<style scoped>
.v-input--selection-controls__input {
    top: 10px;
}
.fade-enter-active,
.fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}
.v-card {
    border-radius: 0px;
}
</style>
