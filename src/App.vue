<template>
    <v-app>
        <AppTopNavigation v-if="$route.meta.topappbar" />
        <v-content>
            <v-container class="py-0 disp-flex flex-center-y flex-grow pa-10">
                <router-view />
            </v-container>
        </v-content>
        <LiveTicker v-if="$route.meta.ticker" />
        <AppBottomNavigation v-if="$route.meta.bottombar" />
    </v-app>
</template>

<script>
import Signup from './components/Acl/Signup';
import Login from './components/Acl/Login';
import SplashScreen from './components/Common/Splash/SplashScreen';
import LiveTicker from './components/Common//Ticker/LiveTicker';
import AppTopNavigation from './components/AppTopNavigation';
import Exchange from './components/Exchange';
import Balances from './components/Balances';
import Overview from './components/Overview';
import Marketcap from './components/Marketcap';
import Trade from './components/Trade';
import AppBottomNavigation from './components/AppBottomNavigation';
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
        Login,
        Signup
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
</style>
