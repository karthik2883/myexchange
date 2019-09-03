<template>
    <v-bottom-navigation v-model="bottomNav" dark color="grey darken-4">
        <v-btn value="aboutus">
            <span>About us</span>
        </v-btn>

        <v-btn value="term">
            <span>Term of use</span>
        </v-btn>

        <v-btn value="aml">
            <span>Aml</span>
        </v-btn>
        <v-btn value="privacypolicy">
            <span>Privacy Policy</span>
        </v-btn>
        <v-btn value="Fee">
            <span>Fee Schedule</span>
        </v-btn>
        <v-btn value="apply">
            <span>Apply to list</span>
        </v-btn>
        <v-btn value="faq">
            <span>FAQ</span>
        </v-btn>
        <v-btn value="bounty">
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
