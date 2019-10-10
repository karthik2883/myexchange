<template>
    <v-bottom-navigation v-model="bottomNav" dark color="grey darken-4">
        <v-btn class="font-weight-light" value="aboutus">
            <span>About us</span>
        </v-btn>

        <v-btn class="font-weight-light" value="term">
            <span>Term of use</span>
        </v-btn>

        <v-btn class="font-weight-light" value="aml">
            <span>Aml</span>
        </v-btn>
        <v-btn class="font-weight-light" value="privacypolicy">
            <span>Privacy Policy</span>
        </v-btn>
        <v-btn class="font-weight-light" value="Fee">
            <span>Fee Schedule</span>
        </v-btn>
        <v-btn class="font-weight-light" value="apply">
            <span>Apply to list</span>
        </v-btn>
        <v-btn class="font-weight-light" value="faq">
            <span>FAQ</span>
        </v-btn>
        <v-btn class="font-weight-light" value="bounty">
            <span>Bounty</span>
        </v-btn>
    </v-bottom-navigation>
</template>

<script>
export default {
    name: 'AppBottomNavigation',
    data() {
        return {
            bottomNav: 'recent'
        };
    }
};
</script>
