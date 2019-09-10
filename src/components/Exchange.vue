<template>
    <v-container grid-list-md>
        <v-layout row class="pa-5">
            <v-flex md12 text-left>
                <v-layout row>
                    <v-flex md8 text-left>
                        <p class="headline">Exchange</p>
                    </v-flex>
                    <v-flex md4 text-right>
                        <p md4 class="subtitle-1">1 LTC ≈ 0.38453 ETH</p>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex md12 text-left>
                <p md6 class="subtitle-1">
                    In this section, you can quickly make currency exchange.
                    To do this, the assets must be in the trade account of your wallet.
                </p>
            </v-flex>
            <v-flex md12>
                <v-divider class="mx-4" :inset="inset"></v-divider>
            </v-flex>
            <v-flex md12 text-left>
                <p md6 class="subtitle-1">Select currency pair to exchange</p>
            </v-flex>
            <v-flex md12 text-left></v-flex>
            <v-flex md12 text-left>
                <v-layout row>
                    <v-flex md4>
                        <v-select label="LTC"></v-select>
                        <v-text-field></v-text-field>
                    </v-flex>
                    <v-flex md4>
                        <v-container bg fill-height grid-list-md text-xs-center>
                            <v-row justify="center">
                                <v-btn class="ma-2" color="primary" dark>
                                    <v-icon>mdi-swap-horizontal</v-icon>
                                </v-btn>
                            </v-row>
                        </v-container>
                    </v-flex>
                    <v-flex md4>
                        <v-select label="USDT"></v-select>
                        <v-text-field></v-text-field>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    name: 'Exchange',
    data() {
        return {
            appTitle: 'Exchange'
        };
    }
};
</script>
