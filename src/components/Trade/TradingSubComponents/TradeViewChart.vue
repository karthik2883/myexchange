<template>
    <v-container fluid>
        <v-layout row>
            <v-flex md12>
                <v-card :elevation="24">
                    <v-layout row wrap align-center>
                        <v-flex>
                            <VueTradingView
                                :options="{
                        'width': 920,
                        'height': 400,
                        'symbol': 'BITSTAMP:BTCUSD',
                        'interval': 'D',
                        'timezone': 'Etc/UTC',
                        'theme': 'Light',
                        'style': '1',
                        'locale': 'en',
                        'toolbar_bg': '#f1f3f6',
                        'enable_publishing': false,
                        'allow_symbol_change': true
                        }"
                            />
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import VueTradingView from 'vue-trading-view';
export default {
    name: 'TradingViewChart',
    data() {
        return {};
    },
    components: {
        VueTradingView
    }
};
</script>