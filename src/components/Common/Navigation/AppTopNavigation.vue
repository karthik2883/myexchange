<template>
    <v-app-bar app fixed dark color="secondary darken-1 " elevate-on-scroll>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn class="white--text font-weight-regular" to="/home" text>
                <v-img
                    :src="require('@/assets/m-logo.png')"
                    alt="everus"
                    contain
                    style="height: 50px; width:50px;"
                ></v-img>
                <!-- <img :src="require('@/assets/everus.png')" alt="everus" width="50px" height="50px" /> -->
            </v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn
                class="white--text font-weight-regular"
                to="/trade?currency=btc&dest=bch"
                small
                text
            >TRADE</v-btn>
            <!-- <v-btn class="black--text" to="/overview" text>OVERVIEW</v-btn>
            <v-btn class="black--text" to="/marketcap" text>MARKETCAP</v-btn>-->

            <!--user login -->
            <!-- <v-btn class="white--text" to="/exchange" text>EXCHANGE</v-btn> 

            <v-btn class="white--text font-weight-regular" to="/ieo" text>IEO</v-btn>-->

            <v-btn class="white--text font-weight-regular" to="/faq" text>FAQ</v-btn>
            <v-btn class="white--text font-weight-regular" to="/applytolist" text>APPLYTOLIST</v-btn>

            <!--admin login -->
        </v-toolbar-items>
        <template v-if="$vuetify.breakpoint.smAndUp">
            <v-btn icon class="black--text font-weight-regular">
                <v-btn icon to="/login">
                    <v-icon>mdi-account</v-icon>
                </v-btn>
            </v-btn>
            <v-btn icon class="black--text font-weight-regular">
                <v-btn icon to="/signup">
                    <v-icon>mdi-account-multiple-plus</v-icon>
                </v-btn>
            </v-btn>
            <v-menu open-on-hover>
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>
                <v-list color="secondary darken-1 ">
                    <v-list-item>
                        <v-list-item-title class="white--text font-weight-regular">
                            <v-btn
                                class="white--text font-weight-regular"
                                to="/balances"
                                text
                            >BALANCES</v-btn>
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title class="white--text font-weight-regular">
                            <v-btn class="white--text font-weight-regular" to="/order" text>ORDER</v-btn>
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title class="white--text font-weight-regular">
                            <v-btn
                                class="white--text font-weight-regular"
                                to="/history"
                                text
                            >HISTORY</v-btn>
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title class="white--text font-weight-regular">
                            <v-btn
                                class="white--text font-weight-regular"
                                to="/history"
                                text
                            >Account</v-btn>
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title class="white--text font-weight-regular">
                            <v-btn
                                class="white--text font-weight-regular"
                                to="/Supports"
                                text
                            >SUPPORTS</v-btn>
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title class="white--text font-weight-regular">
                            <v-btn
                                class="white--text font-weight-regular"
                                to="/Supports"
                                text
                            >Logout</v-btn>
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </template>
    </v-app-bar>
</template>
<script>
export default {
    name: 'AppNavigation',
    data() {
        return {};
    }
};
</script>
 <style   scoped>
.v-menu__content {
    top: 55px !important;
}
</style>