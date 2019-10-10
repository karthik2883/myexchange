<template>
    <v-container class="pa-0">
        <v-card :elevation="24" flat>
            <v-container fluid>
                <v-layout row md12 v-if="infoBTCBCH">
                    <v-flex md2 sm3 class="pa-1">
                        <div class="overline">{{mainTitle}}</div>
                        <div class="body-1 font-weight-light">{{infoBTCBCH.high}}</div>
                        <div class="body-1 font-weight-light">{{infoBTCBCH.high}} USD</div>
                    </v-flex>
                    <v-divider style="background-color:green;" class="mx-1" vertical></v-divider>
                    <v-flex md2 sm3>
                        <div class="overline">24H Change</div>
                        <div
                            class="body-1 font-weight-light"
                            v-if="infoBTCBCH.open !== null && infoBTCBCH"
                        >+{{infoBTCBCH.open * infoBTCBCH.high /100}}%</div>
                    </v-flex>
                    <v-divider style="background-color:green;" class="mx-1" vertical></v-divider>
                    <v-flex md2 sm3>
                        <div class="overline">24H Highest</div>
                        <div
                            class="body-1 font-weight-light"
                            v-if="infoBTCBCH"
                        >{{infoBTCBCH.high}} BTC</div>
                    </v-flex>
                    <v-divider style="background-color:green;" class="mx-1" vertical></v-divider>
                    <v-flex md2 sm3>
                        <div class="overline">24H Lowest</div>
                        <div
                            class="body-1 font-weight-light"
                            v-if="infoBTCBCH"
                        >{{infoBTCBCH.low}} BTC</div>
                    </v-flex>
                    <v-divider style="background-color:green;" class="mx-1" vertical></v-divider>
                    <v-flex md2 sm3>
                        <div class="overline">24H Volume/Value</div>
                        <div
                            class="body-1 font-weight-light"
                            v-if="infoBTCBCH"
                        >{{infoBTCBCH.volume}}</div>
                    </v-flex>
                    <v-divider style="background-color:green;" class="mx-1" vertical></v-divider>
                    <v-flex v-if="infoBCHBTC">
                        <div class="overline">{{cornerTitle}}</div>
                        <div class="body-1 font-weight-light">{{infoBCHBTC.volume}}</div>
                    </v-flex>
                    <v-btn class="mx-4" fab dark small color="secondary" elevation="-10">
                        <v-icon>mdi-lightbulb-on-outline</v-icon>
                    </v-btn>
                </v-layout>
                <v-layout row md12 v-else>
                    <v-flex md2 sm3 class="pa-1">
                        <div class="overline">BTCBCH</div>
                        <div class="body-1 font-weight-light">0</div>
                        <div class="body-1 font-weight-light">0 USD</div>
                    </v-flex>
                    <v-divider style="background-color:green;" class="mx-1" vertical></v-divider>
                    <v-flex md2 sm3>
                        <div class="overline">24H Change</div>
                        <div class="body-1 font-weight-light">+0%</div>
                    </v-flex>
                    <v-divider style="background-color:green;" class="mx-1" vertical></v-divider>
                    <v-flex md2 sm3>
                        <div class="overline">24H Highest</div>
                        <div class="body-1 font-weight-light">0 BTC</div>
                    </v-flex>
                    <v-divider style="background-color:green;" class="mx-1" vertical></v-divider>
                    <v-flex md2 sm3>
                        <div class="overline">24H Lowest</div>
                        <div class="body-1 font-weight-light">0 BTC</div>
                    </v-flex>
                    <v-divider style="background-color:green;" class="mx-1" vertical></v-divider>
                    <v-flex md2 sm3>
                        <div class="overline">24H Volume/Value</div>
                        <div class="body-1">0</div>
                    </v-flex>
                    <v-divider style="background-color:green;" class="mx-1" vertical></v-divider>
                    <v-flex>
                        <div class="overline">BCHBTC</div>
                        <div class="body-1 font-weight-light">0</div>
                    </v-flex>
                    <v-btn class="mx-4" fab dark small color="secondary" elevation="-10">
                        <v-icon>mdi-lightbulb-on-outline</v-icon>
                    </v-btn>
                </v-layout>
            </v-container>
        </v-card>
    </v-container>
</template>
<script>
export default {
    name: 'Tradinginfo',
    data() {
        return {
            infoBTCBCH: null,
            infoBCHBTC: null,
            mainTitle: null,
            cornerTitle: null
        };
    },
    created() {
        //  console.log(this.$route.query.currency);
        this.$options.sockets.onmessage = data => this.messageReceived(data);
    },
    methods: {
        messageReceived: function(raw_message) {
            try {
                // console.log('', raw_message.data);
                var x = JSON.parse(raw_message.data);
                if (this.$route.query.currency === 'btc') {
                    this.mainTitle = 'BTC/BCH';
                    this.cornerTitle = 'BCH/BTC';
                    if (x.params[0] === 'BTCBCH') {
                        this.infoBTCBCH = x.params[1];
                    } else {
                        this.infoBCHBTC = x.params[1];
                    }
                } else {
                    this.mainTitle = 'BCH/BTC';
                    this.cornerTitle = 'BTC/BCH';
                    if (x.params[0] === 'BCHBTC') {
                        this.infoBTCBCH = x.params[1];
                    } else {
                        this.infoBCHBTC = x.params[1];
                    }
                }
                this.$forceUpdate();
            } catch (e) {
                //  console.log(e);
            }
        }
    }
};
</script>
<style scoped>
.v-card {
    border-radius: 0px !important;
}
</style>