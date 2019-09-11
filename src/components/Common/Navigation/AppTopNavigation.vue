<template>
    <v-app-bar app fixed dark color="blue-grey darken-4">
        <v-btn icon href="/home" class="warning">
            <img :src="require('@/assets/everus.png')" alt="everus" width="50px" height="50px" />
        </v-btn>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn class="white--text" to="/trade" text>TRADE</v-btn>
            <!-- <v-btn class="black--text" to="/overview" text>OVERVIEW</v-btn>
            <v-btn class="black--text" to="/marketcap" text>MARKETCAP</v-btn>-->
            <v-btn class="white--text" to="/faq" text>FAQ</v-btn>
            <v-btn class="white--text" to="/applytolist" text>APPLYTOLIST</v-btn>
            <!--user login -->
            <v-btn class="white--text" to="/exchange" text>EXCHANGE</v-btn>
            <v-btn class="white--text" to="/balances" text>BALANCES</v-btn>
            <v-btn class="white--text" to="/order" text>ORDER</v-btn>
            <v-btn class="white--text" to="/history" text>HISTORY</v-btn>
            <v-btn class="white--text" to="/ieo" text>IEO</v-btn>
            <v-btn class="white--text" to="/Supports" text>SUPPORTS</v-btn>
            <!--admin login -->
        </v-toolbar-items>
        <template v-if="$vuetify.breakpoint.smAndUp">
            <v-btn icon class="black--text">
                <v-btn icon to="/login">
                    <v-icon>mdi-account</v-icon>
                </v-btn>
            </v-btn>
            <v-btn icon class="black--text">
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
 