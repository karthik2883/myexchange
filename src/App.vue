<template>
    <v-app class="grey--text text--darken-2">
        <LoadingScreen :isLoading="isLoading" />
        <AppTopNavigation />

        <v-content v-if="!isLoading">
            <v-container class="py-0 disp-flex flex-center-y flex-grow pa-10">
                <router-view />
            </v-container>
        </v-content>

        <LiveTicker v-if="$route.meta.ticker" />
        <AppBottomNavigation />
    </v-app>
</template>

<script>
import Signup from './components/ACL/Signup';
import Login from './components/ACL/Login';
import LoadingScreen from './components/Common/Splash/LoadingScreen';
import LiveTicker from './components/Common//Ticker/LiveTicker';
import AppTopNavigation from './components/AppTopNavigation';
import Exchange from './components/Exchange';
import Overview from './components/Overview';
import Marketcap from './components/Marketcap';
import Trade from './components/Trade';
import AppBottomNavigation from './components/AppBottomNavigation';
import ApplyToList from './components/FrontEnd/ApplyToList';
import Faq from './components/FrontEnd/Faq';
import Front from './components/FrontEnd/Front';

export default {
    name: 'App',
    components: {
        LoadingScreen,
        LiveTicker,
        AppTopNavigation,
        Front,
        ApplyToList,
        Faq,
        Exchange,
        Overview,
        Marketcap,
        Trade,
        AppBottomNavigation,
        Login,
        Signup
    },
    data() {
        return { isLoading: true };
    },
    mounted() {
        setTimeout(() => {
            this.isLoading = false;
        }, 3000);
    }
};
</script>
<style scoped>
.v-input--selection-controls__input {
    top: 10px;
}
</style>
