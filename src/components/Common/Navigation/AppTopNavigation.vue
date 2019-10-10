<template>
    <v-app-bar app fixed dark color="secondary darken-1 ">
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn class="white--text font-weight-light" to="/home" text>
                <v-icon>mdi-nuke</v-icon>Brexily
                <!-- <img :src="require('@/assets/everus.png')" alt="everus" width="50px" height="50px" /> -->
            </v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn
                class="white--text font-weight-light"
                to="/trade?currency=btc&dest=bch"
                small
                text
            >TRADE</v-btn>
            <!-- <v-btn class="black--text" to="/overview" text>OVERVIEW</v-btn>
            <v-btn class="black--text" to="/marketcap" text>MARKETCAP</v-btn>-->

            <!--user login -->
            <!-- <v-btn class="white--text" to="/exchange" text>EXCHANGE</v-btn> -->
            <v-btn class="white--text font-weight-light" to="/balances" text>BALANCES</v-btn>
            <v-btn class="white--text font-weight-light" to="/order" text>ORDER</v-btn>
            <v-btn class="white--text font-weight-light" to="/history" text>HISTORY</v-btn>
            <v-btn class="white--text font-weight-light" to="/ieo" text>IEO</v-btn>
            <v-btn class="white--text font-weight-light" to="/Supports" text>SUPPORTS</v-btn>
            <v-btn class="white--text font-weight-light" to="/faq" text>FAQ</v-btn>
            <v-btn class="white--text font-weight-light" to="/applytolist" text>APPLYTOLIST</v-btn>

            <!--admin login -->
        </v-toolbar-items>
        <template v-if="$vuetify.breakpoint.smAndUp">
            <v-btn icon class="black--text font-weight-light">
                <v-btn icon to="/login">
                    <v-icon>mdi-account</v-icon>
                </v-btn>
            </v-btn>
            <v-btn icon class="black--text font-weight-light">
                <v-btn icon to="/signup">
                    <v-icon>mdi-account-multiple-plus</v-icon>
                </v-btn>
            </v-btn>
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
 