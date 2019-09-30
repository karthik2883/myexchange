   <template>
    <v-flex md12>
        <v-layout row>
            <v-flex md12 class="pa-2" :elevation="-2">
                <v-tabs fixed-tabs>
                    <v-tab class="body-1">Market</v-tab>
                    <v-tab class="body-1">Balances</v-tab>
                    <v-tab-item>
                        <v-flex md12 class="pa-2">
                            <v-flex md4 class="pa-2">
                                <v-text-field label="Search" single-line></v-text-field>
                            </v-flex>
                            <v-tabs fixed-tabs v-model="selectedTab">
                                <v-tab
                                    :tabindex="0"
                                    :key="0"
                                    class="body-1 text-left"
                                    @click="getMarket"
                                >BTC</v-tab>
                                <v-tab
                                    :tabindex="1"
                                    :key="1"
                                    class="body-1 text-left"
                                    @click="getMarket"
                                >BCH</v-tab>
                                <!-- <v-tab class="body-1">ETH</v-tab>
                                <v-tab class="body-1">USDT</v-tab>-->
                                <v-tab-item>
                                    <v-flex md12>
                                        <v-container fluid>
                                            <v-layout row wrap>
                                                <v-card
                                                    class="pa-2"
                                                    style="width:100%;"
                                                    :elevation="24"
                                                >
                                                    <v-simple-table height="500px">
                                                        <thead>
                                                            <tr>
                                                                <th
                                                                    class="subtitle-1 text-center text-capitalize"
                                                                >Market</th>
                                                                <th
                                                                    class="subtitle-1 text-center text-capitalize"
                                                                >Price</th>
                                                                <th
                                                                    class="subtitle-1 text-center text-capitalize"
                                                                >Volume</th>
                                                                <th
                                                                    class="subtitle-1 text-center text-capitalize"
                                                                >Change</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td
                                                                    class="body-1 text-center text-capitalize"
                                                                >BTCBCH</td>
                                                                <td
                                                                    class="body-1 text-center"
                                                                >{{infoBTCBCH.high}}</td>
                                                                <td
                                                                    class="body-1 text-center"
                                                                >{{infoBTCBCH.volume}}</td>
                                                                <td
                                                                    class="body-1 text-center"
                                                                >+{{infoBTCBCH.open * infoBTCBCH.high /100}}%</td>
                                                            </tr>
                                                            <!-- <tr>
                                                                <td
                                                                    class="body-1 text-center text-capitalize"
                                                                >BTC</td>
                                                                <td
                                                                    class="body-1 text-center"
                                                                >10136.15</td>
                                                                <td
                                                                    class="body-1 text-center"
                                                                >32423243.89</td>
                                                                <td class="body-1 text-center">+15%</td>
                                                            </tr>
                                                            <tr>
                                                                <td
                                                                    class="body-1 text-center text-capitalize"
                                                                >BTC</td>
                                                                <td
                                                                    class="body-1 text-center"
                                                                >10136.15</td>
                                                                <td
                                                                    class="body-1 text-center"
                                                                >32423243.89</td>
                                                                <td class="body-1 text-center">+15%</td>
                                                            </tr>-->
                                                        </tbody>
                                                    </v-simple-table>
                                                </v-card>
                                            </v-layout>
                                        </v-container>
                                    </v-flex>
                                </v-tab-item>
                                <v-tab-item>
                                    <v-flex md12>
                                        <v-container fluid>
                                            <v-layout row wrap>
                                                <v-card
                                                    class="pa-2"
                                                    style="width:100%;"
                                                    :elevation="24"
                                                >
                                                    <v-simple-table height="500px">
                                                        <thead>
                                                            <tr>
                                                                <th
                                                                    class="subtitle-1 text-center text-capitalize"
                                                                >Market</th>
                                                                <th
                                                                    class="subtitle-1 text-center text-capitalize"
                                                                >Price</th>
                                                                <th
                                                                    class="subtitle-1 text-center text-capitalize"
                                                                >Volume</th>
                                                                <th
                                                                    class="subtitle-1 text-center text-capitalize"
                                                                >Change</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td
                                                                    class="body-1 text-center text-capitalize"
                                                                >BCHBTC</td>
                                                                <td
                                                                    class="body-1 text-center"
                                                                >{{infoBTCBCH.high}}</td>
                                                                <td
                                                                    class="body-1 text-center"
                                                                >{{infoBTCBCH.volume}}</td>
                                                                <td
                                                                    class="body-1 text-center"
                                                                >+{{infoBTCBCH.open * infoBTCBCH.high /100}}%</td>
                                                            </tr>
                                                            <!-- <tr>
                                                                <td
                                                                    class="body-1 text-center text-capitalize"
                                                                >BTC</td>
                                                                <td
                                                                    class="body-1 text-center"
                                                                >10136.15</td>
                                                                <td
                                                                    class="body-1 text-center"
                                                                >32423243.89</td>
                                                                <td class="body-1 text-center">+15%</td>
                                                            </tr>
                                                            <tr>
                                                                <td
                                                                    class="body-1 text-center text-capitalize"
                                                                >BTC</td>
                                                                <td
                                                                    class="body-1 text-center"
                                                                >10136.15</td>
                                                                <td
                                                                    class="body-1 text-center"
                                                                >32423243.89</td>
                                                                <td class="body-1 text-center">+15%</td>
                                                            </tr>-->
                                                        </tbody>
                                                    </v-simple-table>
                                                </v-card>
                                            </v-layout>
                                        </v-container>
                                    </v-flex>
                                </v-tab-item>
                                <!-- <v-tab-item>
                                    <v-flex md12>
                                        <v-layout row>
                                            <v-container fluid>
                                                <v-layout row wrap>
                                                    <v-card
                                                        class="pa-2"
                                                        style="width:100%;"
                                                        :elevation="24"
                                                    >
                                                        <v-simple-table height="500px">
                                                            <thead>
                                                                <tr>
                                                                    <th
                                                                        class="subtitle-1 text-center text-capitalize"
                                                                    >Market</th>
                                                                    <th
                                                                        class="subtitle-1 text-center text-capitalize"
                                                                    >Price</th>
                                                                    <th
                                                                        class="subtitle-1 text-center text-capitalize"
                                                                    >Volume</th>
                                                                    <th
                                                                        class="subtitle-1 text-center text-capitalize"
                                                                    >Change</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td
                                                                        class="body-1 text-center text-capitalize"
                                                                    >BTC</td>
                                                                    <td
                                                                        class="body-1 text-center"
                                                                    >10136.15</td>
                                                                    <td
                                                                        class="body-1 text-center"
                                                                    >32423243.89</td>
                                                                    <td
                                                                        class="body-1 text-center"
                                                                    >+15%</td>
                                                                </tr>
                                                                 <tr>
                                                                    <td
                                                                        class="body-1 text-center text-capitalize"
                                                                    >BTC</td>
                                                                    <td
                                                                        class="body-1 text-center"
                                                                    >10136.15</td>
                                                                    <td
                                                                        class="body-1 text-center"
                                                                    >32423243.89</td>
                                                                    <td
                                                                        class="body-1 text-center"
                                                                    >+15%</td>
                                                                </tr>
                                                                <tr>
                                                                    <td
                                                                        class="body-1 text-center text-capitalize"
                                                                    >BTC</td>
                                                                    <td
                                                                        class="body-1 text-center"
                                                                    >10136.15</td>
                                                                    <td
                                                                        class="body-1 text-center"
                                                                    >32423243.89</td>
                                                                    <td
                                                                        class="body-1 text-center"
                                                                    >+15%</td>
                                                                </tr> 
                                                            </tbody>
                                                        </v-simple-table>
                                                    </v-card>
                                                </v-layout>
                                            </v-container>
                                        </v-layout>
                                    </v-flex>
                                </v-tab-item>-->
                                <!-- <v-tab-item>
                                    <v-flex md12>
                                        <v-layout row>
                                            <v-container fluid>
                                                <v-layout row wrap>
                                                    <v-card
                                                        class="pa-2"
                                                        style="width:100%;"
                                                        :elevation="24"
                                                    >
                                                        <v-simple-table height="500px">
                                                            <thead>
                                                                <tr>
                                                                    <th
                                                                        class="subtitle-1 text-center text-capitalize"
                                                                    >Market</th>
                                                                    <th
                                                                        class="subtitle-1 text-center text-capitalize"
                                                                    >Price</th>
                                                                    <th
                                                                        class="subtitle-1 text-center text-capitalize"
                                                                    >Volume</th>
                                                                    <th
                                                                        class="subtitle-1 text-center text-capitalize"
                                                                    >Change</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td
                                                                        class="body-1 text-center text-capitalize"
                                                                    >BTC</td>
                                                                    <td
                                                                        class="body-1 text-center"
                                                                    >10136.15</td>
                                                                    <td
                                                                        class="body-1 text-center"
                                                                    >32423243.89</td>
                                                                    <td
                                                                        class="body-1 text-center"
                                                                    >+15%</td>
                                                                </tr>
                                                                 <tr>
                                                                    <td
                                                                        class="body-1 text-center text-capitalize"
                                                                    >BTC</td>
                                                                    <td
                                                                        class="body-1 text-center"
                                                                    >10136.15</td>
                                                                    <td
                                                                        class="body-1 text-center"
                                                                    >32423243.89</td>
                                                                    <td
                                                                        class="body-1 text-center"
                                                                    >+15%</td>
                                                                </tr>
                                                                <tr>
                                                                    <td
                                                                        class="body-1 text-center text-capitalize"
                                                                    >BTC</td>
                                                                    <td
                                                                        class="body-1 text-center"
                                                                    >10136.15</td>
                                                                    <td
                                                                        class="body-1 text-center"
                                                                    >32423243.89</td>
                                                                    <td
                                                                        class="body-1 text-center"
                                                                    >+15%</td>
                                                                </tr> 
                                                            </tbody>
                                                        </v-simple-table>
                                                    </v-card>
                                                </v-layout>
                                            </v-container>
                                        </v-layout>
                                    </v-flex>
                                </v-tab-item>-->
                            </v-tabs>
                        </v-flex>
                    </v-tab-item>
                    <v-tab-item>
                        <v-card flat>
                            <v-card-text>
                                <a href="#">Register</a> to start trade! Or
                                <a href="#">Login</a> if you have an account.
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                </v-tabs>
            </v-flex>
        </v-layout>
    </v-flex>
</template>
<script>
export default {
    name: 'TradeMarketBalance',
    data() {
        return {
            infoBTCBCH: null,
            infoBCHBTC: null
        };
    },
    created() {
        //  console.log(this.$route.query.currency);
        this.$options.sockets.onmessage = data => this.messageReceived(data);
        if (this.$route.query.currency === 'btc') {
            this.selectedTab = 0;
        } else {
            this.selectedTab = 1;
        }
    },

    methods: {
        messageReceived: function(raw_message) {
            try {
                //console.log('', raw_message.data);
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
                console.log(e);
            }
        },
        getMarket: function(e) {
            console.log(e.srcElement.firstChild);
            console.log(e.srcElement.firstChild);
            // alert(e.srcElement.firstChild);
            if (e.srcElement.firstChild) {
                console.log(this.$router);

                this.$router.push('/trade?currency=btc&dest=bch');
                console.log(e.srcElement.firstChild);
                console.log(e.srcElement.firstChild);
            } else {
                //this.$router.go('/trade?currency=bch&dest=btc');
            }
        }
    }
};
</script>
