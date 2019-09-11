<template>
    <v-container grid-list-md>
        <v-layout row class="pa-5">
            <v-flex md12 text-left>
                <v-layout row>
                    <v-flex md8 text-left>
                        <p class="headline">History</p>
                    </v-flex>
                    <v-flex md4 text-right>
                        <p md4 class="subtitle-1">1 LTC ≈ 0.38453 ETH</p>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    name: 'History',
    data() {
        return {
            appTitle: 'History'
        };
    }
};
</script>
