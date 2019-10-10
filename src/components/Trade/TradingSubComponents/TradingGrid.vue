<template>
    <v-layout>
        <v-layout row>
            <v-flex md12>
                <v-layout row>
                    <v-flex md12>
                        <TradeInfo />
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex md12>
                <v-layout row>
                    <v-flex md4 class="pa-2">
                        <TradeMarketBalance />
                        <TradeHistory />
                    </v-flex>
                    <v-flex md6 class="pa-2">
                        <TradeViewChart />
                        <TradeBuySell />
                        <TradeBuySellOrder />
                    </v-flex>
                    <v-flex md2>
                        <!-- <v-container fluid>
                            <v-layout row class="mt-1">
                                <v-flex md12>
                                    <v-card
                                        class="mx-auto"
                                        light
                                        color="light-blue lighten-5"
                                        max-width="400"
                                    >
                                        <v-card-title>
                                            <v-icon large left>mdi-twitter</v-icon>
                                            <span class="title font-weight-light">Brexily</span>
                                        </v-card-title>

                                        <v-card-text
                                            class="headline font-weight-bold"
                                        >"float like a butterfly sting like a bee --Ali."</v-card-text>

                                        <v-card-actions>
                                            <v-list-item class="grow">
                                                <v-list-item-avatar color="grey darken-3">
                                                    <v-img
                                                        class="elevation-6"
                                                        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                                                    ></v-img>
                                                </v-list-item-avatar>

                                                <v-list-item-content>
                                                    <v-list-item-title>Evan You</v-list-item-title>
                                                </v-list-item-content>

                                                <v-row align="center" justify="end">
                                                    <v-icon class="mr-1">mdi-heart</v-icon>
                                                    <span class="subheading mr-2">256</span>
                                                    <span class="mr-1">·</span>
                                                    <v-icon class="mr-1">mdi-share-variant</v-icon>
                                                    <span class="subheading">45</span>
                                                </v-row>
                                            </v-list-item>
                                        </v-card-actions>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                            <v-layout row class="mt-1">
                                <v-flex md12>
                                    <v-card
                                        class="mx-auto"
                                        dark
                                        color="secondary darken-1 "
                                        max-width="400"
                                    >
                                        <v-card-title>
                                            <v-icon large left>mdi-twitter</v-icon>
                                            <span class="title font-weight-light">Brexily</span>
                                        </v-card-title>

                                        <v-card-text
                                            class="headline font-weight-bold"
                                        >"float like a butterfly sting like a bee --Ali."</v-card-text>

                                        <v-card-actions>
                                            <v-list-item class="grow">
                                                <v-list-item-avatar color="grey darken-3">
                                                    <v-img
                                                        class="elevation-6"
                                                        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                                                    ></v-img>
                                                </v-list-item-avatar>

                                                <v-list-item-content>
                                                    <v-list-item-title>Evan You</v-list-item-title>
                                                </v-list-item-content>

                                                <v-row align="center" justify="end">
                                                    <v-icon class="mr-1">mdi-heart</v-icon>
                                                    <span class="subheading mr-2">256</span>
                                                    <span class="mr-1">·</span>
                                                    <v-icon class="mr-1">mdi-share-variant</v-icon>
                                                    <span class="subheading">45</span>
                                                </v-row>
                                            </v-list-item>
                                        </v-card-actions>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                            <v-layout row class="mt-1">
                                <v-flex md12>
                                    <v-card class="mx-auto" dark color="teal " max-width="400">
                                        <v-card-title>
                                            <v-icon large left>mdi-twitter</v-icon>
                                            <span class="title font-weight-light">Brexily</span>
                                        </v-card-title>

                                        <v-card-text
                                            class="headline font-weight-bold"
                                        >"Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."</v-card-text>

                                        <v-card-actions>
                                            <v-list-item class="grow">
                                                <v-list-item-avatar color="grey darken-3">
                                                    <v-img
                                                        class="elevation-6"
                                                        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                                                    ></v-img>
                                                </v-list-item-avatar>

                                                <v-list-item-content>
                                                    <v-list-item-title>Evan You</v-list-item-title>
                                                </v-list-item-content>

                                                <v-row align="center" justify="end">
                                                    <v-icon class="mr-1">mdi-heart</v-icon>
                                                    <span class="subheading mr-2">256</span>
                                                    <span class="mr-1">·</span>
                                                    <v-icon class="mr-1">mdi-share-variant</v-icon>
                                                    <span class="subheading">45</span>
                                                </v-row>
                                            </v-list-item>
                                        </v-card-actions>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-container>-->
                        <TwitterTrending />
                    </v-flex>
                </v-layout>
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
import TwitterTrending from './TwitterTrending';
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
        TradeBuySellOrder,
        TwitterTrending
    }
};
</script>
<style scoped>
.v-card {
    border-radius: 0px !important;
}
</style>