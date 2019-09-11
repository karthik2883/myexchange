<template>
    <v-layout>
        <v-layout row>
            <v-flex md6 class="pa-2">
                <TradeInfo />
                <TradeViewChart />
                <TradeBuySell />
                <TradeBuySellOrder />
            </v-flex>
            <v-flex md4 class="pa-2">
                <TradeMarketBalance />
                <TradeHistory />
            </v-flex>
            <v-flex md2>
                <v-card class="mx-auto pa-2" max-width="344">
                    <v-card-text>
                        <div>Word of the Day</div>
                        <p class="display-1 text--primary">be•nev•o•lent</p>
                        <p>adjective</p>
                        <div class="text--primary">
                            well meaning and kindly.
                            <br />"a benevolent smile"
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text color="deep-purple accent-4">Learn More</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-layout>
</template>

<script>
import TradeInfo from './TradeInfo';
import TradeHistory from './TradeHistory';
import TradeMarketBalance from './TradeMarketBalance';
import TradeViewChart from './TradeViewChart';
import TradeBuySell from './TradeBuySell';
import TradeBuySellOrder from './TradeBuySellOrder';

export default {
    name: 'TradingGrid',
    data() {
        return {};
    },
    components: {
        TradeInfo,
        TradeHistory,
        TradeMarketBalance,
        TradeViewChart,
        TradeBuySell,
        TradeBuySellOrder
    }
};
</script>
