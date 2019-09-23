  <template>
    <v-flex md12>
        <v-layout row>
            <v-flex md12 class="pa-2">
                <v-tabs fixed-tabs>
                    <v-tab class="body-1">BTC</v-tab>
                    <v-tab class="body-1">BCH</v-tab>
                    <v-tab class="body-1">ETH</v-tab>
                    <v-tab class="body-1">USDT</v-tab>
                    <v-tab-item>
                        <v-flex md12>
                            <v-layout row>
                                <v-card class="mx-auto pa-2" style=" width:95%;">
                                    <v-simple-table>
                                        <!-- <div id="app">{{ info }}</div> -->
                                        <thead>
                                            <tr>
                                                <th
                                                    class="text-left subtitle-1"
                                                >Trading pair/Option name</th>
                                                <th class="text-left subtitle-1">Price</th>
                                                <th class="text-left subtitle-1">24H Highest</th>
                                                <th class="text-left subtitle-1">24H Lowest</th>
                                                <th class="text-left subtitle-1">24H Volume</th>
                                                <th class="text-left subtitle-1">24H Value</th>

                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr id="app" v-if="info">
                                                <td class="subtitle-1">BCH/BTC</td>
                                                <td class="subtitle-1">{{info.deal}}</td>
                                                <td class="subtitle-1">{{info.high}}</td>
                                                <td class="subtitle-1">{{info.low}}</td>
                                                <td class="subtitle-1">{{info.volume}}</td>
                                                <td class="red--text subtitle-1">{{info.close}}</td>
                                                <td class="green--text subtitle-1">>>Gotrade</td>
                                            </tr>
                                            <tr v-else>
                                                <td class="subtitle-1">BCH/BTC</td>
                                                <td class="subtitle-1">0</td>
                                                <td class="subtitle-1">0</td>
                                                <td class="subtitle-1">0</td>
                                                <td class="subtitle-1">0</td>
                                                <td class="red--text subtitle-1">0</td>
                                                <td class="green--text subtitle-1">>>Gotrade</td>
                                            </tr>
                                            <tr>
                                                <td class="subtitle-1">LTC/BTC</td>
                                                <td class="subtitle-1">10136.15</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="red--text subtitle-1">+15%</td>
                                                <td class="green--text subtitle-1">>>Gotrade</td>
                                            </tr>
                                            <tr>
                                                <td class="subtitle-1">ETH/BTC</td>
                                                <td class="subtitle-1">10136.15</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="red--text subtitle-1">+15%</td>
                                                <td class="green--text subtitle-1">>>Gotrade</td>
                                            </tr>
                                            <tr>
                                                <td class="subtitle-1">ETC/BTC</td>
                                                <td class="subtitle-1">10136.15</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="red--text subtitle-1">+15%</td>
                                                <td class="green--text subtitle-1">>>Gotrade</td>
                                            </tr>
                                            <tr>
                                                <td class="subtitle-1">EOS/BTC</td>
                                                <td class="subtitle-1">10136.15</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="red--text subtitle-1">+15%</td>
                                                <td class="green--text subtitle-1">>>Gotrade</td>
                                            </tr>
                                        </tbody>
                                    </v-simple-table>
                                </v-card>
                            </v-layout>
                        </v-flex>
                    </v-tab-item>
                    <v-tab-item>
                        <v-flex md12>
                            <v-layout row>
                                <v-card class="mx-auto pa-2" style=" width:95%;">
                                    <v-simple-table>
                                        <thead>
                                            <tr>
                                                <th
                                                    class="text-left subtitle-1"
                                                >Trading pair/Option name</th>
                                                <th class="text-left subtitle-1">Price</th>
                                                <th class="text-left subtitle-1">24H Highest</th>
                                                <th class="text-left subtitle-1">24H Lowest</th>
                                                <th class="text-left subtitle-1">24H Volume</th>
                                                <th class="text-left subtitle-1">24H Value</th>

                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="subtitle-1">BTC/BCH</td>
                                                <td class="subtitle-1">10136.15</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="red--text subtitle-1">+15%</td>
                                                <td class="green--text subtitle-1">>>Gotrade</td>
                                            </tr>
                                            <tr>
                                                <td class="subtitle-1">LTC/BCH</td>
                                                <td class="subtitle-1">10136.15</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="red--text subtitle-1">+15%</td>
                                                <td class="green--text subtitle-1">>>Gotrade</td>
                                            </tr>
                                            <tr>
                                                <td class="subtitle-1">ETH/BCH</td>
                                                <td class="subtitle-1">10136.15</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="red--text subtitle-1">+15%</td>
                                                <td class="green--text subtitle-1">>>Gotrade</td>
                                            </tr>
                                            <tr>
                                                <td class="subtitle-1">ETC/BCH</td>
                                                <td class="subtitle-1">10136.15</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="red--text subtitle-1">+15%</td>
                                                <td class="green--text subtitle-1">>>Gotrade</td>
                                            </tr>
                                            <tr>
                                                <td class="subtitle-1">EOS/BCH</td>
                                                <td class="subtitle-1">10136.15</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="red--text subtitle-1">+15%</td>
                                                <td class="green--text subtitle-1">>>Gotrade</td>
                                            </tr>
                                        </tbody>
                                    </v-simple-table>
                                </v-card>
                            </v-layout>
                        </v-flex>
                    </v-tab-item>
                    <v-tab-item>
                        <v-flex md12>
                            <v-layout row>
                                <v-card class="mx-auto pa-2" style=" width:95%;">
                                    <v-simple-table>
                                        <thead>
                                            <tr>
                                                <th
                                                    class="text-left subtitle-1"
                                                >Trading pair/Option name</th>
                                                <th class="text-left subtitle-1">Price</th>
                                                <th class="text-left subtitle-1">24H Highest</th>
                                                <th class="text-left subtitle-1">24H Lowest</th>
                                                <th class="text-left subtitle-1">24H Volume</th>
                                                <th class="text-left subtitle-1">24H Value</th>

                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="subtitle-1">BTC/ETH</td>
                                                <td class="subtitle-1">10136.15</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="red--text subtitle-1">+15%</td>
                                                <td class="green--text subtitle-1">>>Gotrade</td>
                                            </tr>
                                            <tr>
                                                <td class="subtitle-1">LTC/ETH</td>
                                                <td class="subtitle-1">10136.15</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="red--text subtitle-1">+15%</td>
                                                <td class="green--text subtitle-1">>>Gotrade</td>
                                            </tr>
                                            <tr>
                                                <td class="subtitle-1">BCH/ETH</td>
                                                <td class="subtitle-1">10136.15</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="red--text subtitle-1">+15%</td>
                                                <td class="green--text subtitle-1">>>Gotrade</td>
                                            </tr>
                                            <tr>
                                                <td class="subtitle-1">ETC/ETH</td>
                                                <td class="subtitle-1">10136.15</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="red--text subtitle-1">+15%</td>
                                                <td class="green--text subtitle-1">>>Gotrade</td>
                                            </tr>
                                            <tr>
                                                <td class="subtitle-1">EOS/ETH</td>
                                                <td class="subtitle-1">10136.15</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="red--text subtitle-1">+15%</td>
                                                <td class="green--text subtitle-1">>>Gotrade</td>
                                            </tr>
                                        </tbody>
                                    </v-simple-table>
                                </v-card>
                            </v-layout>
                        </v-flex>
                    </v-tab-item>
                    <v-tab-item>
                        <v-flex md12>
                            <v-layout row>
                                <v-card class="mx-auto pa-2" style=" width:95%;">
                                    <v-simple-table id="app">
                                        <thead>
                                            <tr>
                                                <th
                                                    class="text-left subtitle-1"
                                                >Trading pair/Option name</th>
                                                <th class="text-left subtitle-1">Price</th>
                                                <th class="text-left subtitle-1">24H Highest</th>
                                                <th class="text-left subtitle-1">24H Lowest</th>
                                                <th class="text-left subtitle-1">24H Volume</th>
                                                <th class="text-left subtitle-1">24H Value</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="subtitle-1">BTC/USDT</td>
                                                <td class="subtitle-1">10136.15</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="red--text subtitle-1">+15%</td>
                                                <td class="green--text subtitle-1">>>Gotrade</td>
                                            </tr>
                                            <tr>
                                                <td class="subtitle-1">LTC/USDT</td>
                                                <td class="subtitle-1">10136.15</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="red--text subtitle-1">+15%</td>
                                                <td class="green--text subtitle-1">>>Gotrade</td>
                                            </tr>
                                            <tr>
                                                <td class="subtitle-1">ETH/USDT</td>
                                                <td class="subtitle-1">10136.15</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="red--text subtitle-1">+15%</td>
                                                <td class="green--text subtitle-1">>>Gotrade</td>
                                            </tr>
                                            <tr>
                                                <td class="subtitle-1">ETC/USDT</td>
                                                <td class="subtitle-1">10136.15</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="red--text subtitle-1">+15%</td>
                                                <td class="green--text subtitle-1">>>Gotrade</td>
                                            </tr>
                                            <tr>
                                                <td class="subtitle-1">EOS/USDT</td>
                                                <td class="subtitle-1">10136.15</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="subtitle-1">32423243.89</td>
                                                <td class="red--text subtitle-1">+15%</td>
                                                <td class="green--text subtitle-1">>>Gotrade</td>
                                            </tr>
                                        </tbody>
                                    </v-simple-table>
                                </v-card>
                            </v-layout>
                        </v-flex>
                    </v-tab-item>
                </v-tabs>
            </v-flex>

            <v-flex md12 class="pa-2" style="color:red">
                <v-layout md12 row>
                    <v-card row md12 class="mx-auto pa-2" style=" width:95%;">
                        <v-layout md12 row>
                            <v-flex md4>
                                <v-flex md12>
                                    <button class="primary" @click="ping()">ping</button>
                                </v-flex>
                                <v-flex md12>
                                    <button class="primary" @click="servertime()">server.time</button>
                                </v-flex>
                                <v-flex md12>
                                    <button class="primary" @click="auth()">auth</button>
                                </v-flex>
                                <v-flex md12>
                                    <button class="primary" @click="todayquery()">today.query</button>
                                </v-flex>
                                <v-flex md12>
                                    <button
                                        class="primary"
                                        @click="todaysubscribe()"
                                    >today.subscribe</button>
                                </v-flex>
                                <v-flex md12>
                                    <button class="primary" @click="klinequery()">kline.query</button>
                                </v-flex>
                                <v-flex md12>
                                    <button
                                        class="primary"
                                        @click="klinesubscribe()"
                                    >kline.subscribe</button>
                                </v-flex>
                                <v-flex md12>
                                    <button
                                        class="primary"
                                        @click="klineunsubscribe()"
                                    >kline.unsubscribe</button>
                                </v-flex>
                                <v-flex md12>
                                    <button class="primary" @click="pricequery()">price.query</button>
                                </v-flex>

                                <v-flex md12>
                                    <button
                                        class="primary"
                                        @click="pricesubscribe()"
                                    >price.subscribe</button>
                                </v-flex>
                                <v-flex md12>
                                    <button
                                        class="primary"
                                        @click="priceunsubscribe()"
                                    >priceun.subscribe</button>
                                </v-flex>
                                <v-flex md12>
                                    <button class="primary" @click="statequery()">state.query</button>
                                </v-flex>
                            </v-flex>
                            <v-flex md4>
                                <v-flex md12>
                                    <button
                                        class="primary"
                                        @click="statesubscribe()"
                                    >state.subscribe</button>
                                </v-flex>
                                <v-flex md12>
                                    <button class="primary" @click="stateupdate()">state.update</button>
                                </v-flex>
                                <v-flex md12>
                                    <button
                                        class="primary"
                                        @click="stateunsubscribe()"
                                    >state.unsubscribe</button>
                                </v-flex>
                                <v-flex md12>
                                    <button class="primary" @click="dealsquery()">deals.query</button>
                                </v-flex>
                                <v-flex md12>
                                    <button
                                        class="primary"
                                        @click="dealssubscribe()"
                                    >deals.subscribe</button>
                                </v-flex>
                                <v-flex md12>
                                    <button class="primary" @click="dealsupdate()">deals.update</button>
                                </v-flex>
                                <v-flex md12>
                                    <button
                                        class="primary"
                                        @click="dealsunsubscribe()"
                                    >deals.unsubscribe</button>
                                </v-flex>
                                <v-flex md12>
                                    <button class="primary" @click="depthquery()">depth.query</button>
                                </v-flex>
                                <v-flex md12>
                                    <button class="primary" @click="depthupdate()">depth.update</button>
                                </v-flex>
                                <v-flex md12>
                                    <button
                                        class="primary"
                                        @click="depthunsubscribe()"
                                    >depth.unsubscribe</button>
                                </v-flex>
                            </v-flex>
                            <v-flex md4>
                                <v-flex md12>
                                    <button class="primary" @click=" orderquery()">order.query</button>
                                </v-flex>
                                <v-flex md12>
                                    <button class="primary" @click=" orderhistory()">order.history</button>
                                </v-flex>
                                <v-flex md12>
                                    <button
                                        class="primary"
                                        @click="ordersubscribe()"
                                    >order.subscribe</button>
                                </v-flex>
                                <v-flex md12>
                                    <button class="primary" @click="orderupdate()">order.update</button>
                                </v-flex>
                                <v-flex md12>
                                    <button
                                        class="primary"
                                        @click="orderunsubscribe()"
                                    >order.unsubscribe</button>
                                </v-flex>
                                <v-flex md12>
                                    <button class="primary" @click="assetquery()">asset.query</button>
                                </v-flex>
                                <v-flex md12>
                                    <button class="primary" @click="assethistory()">asset.history</button>
                                </v-flex>
                            </v-flex>
                        </v-layout>
                    </v-card>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-flex>
</template>
<script>
export default {
    name: 'CryptoHistory',
    data() {
        return {
            info: null
        };
    },
    created() {
        //            this.statesubscribe();
        this.$options.sockets.onmessage = data => this.messageReceived(data);
    },
    // mounted() {
    //     this.axios
    //         .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    //         .then(response => {
    //             console.log((this.info = response.data));
    //         });
    // },
    methods: {
        messageReceived: function(raw_message) {
            //  this.info = JSON.stringify(raw_message.data);
            try {
                console.log('', raw_message.data);
                var x = JSON.parse(raw_message.data);
                this.info = x.params[1];
                this.$forceUpdate();
            } catch (e) {
                console.log(e);
            }
        },
        ping() {
            this.$socket.sendObj({ method: 'server.ping', params: [], id: 1 });
        },
        servertime() {
            this.$socket.sendObj({ method: 'server.time', params: [], id: 1 });
        },
        auth() {
            this.$socket.sendObj({
                method: 'server.auth',
                params: ['eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9', 'karthik'],
                id: 2
            });
        },
        klinequery() {
            this.$socket.sendObj({
                method: 'kline.query',
                params: ['BTCBCH', 0, 0, 10],
                id: 2
            });
        },
        todayquery() {
            this.$socket.sendObj({
                method: 'today.query',
                params: ['BTCBCH'],
                id: 1
            });
        },
        todaysubscribe() {
            this.$socket.sendObj({
                method: 'today.subscribe',
                params: ['BTCBCH'],
                id: 1
            });
        },
        klinesubscribe() {
            this.$socket.sendObj({
                method: 'kline.subscribe',
                params: ['BTCBCH', 10],
                id: 1
            });
        },
        klineunsubscribe() {
            this.$socket.sendObj({
                method: 'kline.unsubscribe',
                params: [],
                id: 1
            });
        },
        pricequery() {
            this.$socket.sendObj({
                method: 'price.query',
                params: ['BTCBCH'],
                id: 1
            });
        },
        pricesubscribe() {
            this.$socket.sendObj({
                method: 'price.subscribe',
                params: ['BTCBCH'],
                id: 1
            });
        },
        priceunsubscribe() {
            this.$socket.sendObj({
                method: 'price.unsubscribe',
                params: [],
                id: 1
            });
        },
        statequery() {
            this.$socket.sendObj({
                method: 'price.unsubscribe',
                params: ['BTCBCH', 86400],
                id: 1
            });
        },
        statesubscribe() {
            this.$socket.sendObj({
                method: 'state.subscribe',
                params: ['BTCBCH'],
                id: 1
            });
        },
        stateupdate() {
            this.$socket.sendObj({
                method: 'state.subscribe',
                params: ['BTCBCH'],
                id: 1
            });
        },
        stateunsubscribe() {
            this.$socket.sendObj({
                method: 'state.unsubscribe',
                params: [],
                id: 1
            });
        },
        dealsquery() {
            this.$socket.sendObj({
                method: 'state.unsubscribe',
                params: [],
                id: 1
            });
        },
        dealssubscribe() {
            this.$socket.sendObj({
                method: 'deals.subscribe',
                params: ['BTCBCH'],
                id: 1
            });
        },
        dealsupdate() {
            this.$socket.sendObj({
                method: 'deals.update',
                params: ['BTCBCH', 1],
                id: 1
            });
        },
        dealsunsubscribe() {
            this.$socket.sendObj({
                method: 'deals.unsubscribe',
                params: [],
                id: 1
            });
        },
        depthquery() {
            this.$socket.sendObj({
                method: 'depth.query',
                params: ['BTCBCH', 500, 0],
                id: 1
            });
        },
        depthsubscribe() {
            this.$socket.sendObj({
                method: 'depth.subscribe',
                params: ['BTCBCH', 500, 0],
                id: 1
            });
        },
        depthupdate() {
            this.$socket.sendObj({
                method: 'depth.update',
                params: [true, 'BTCBCH'],
                id: 1
            });
        },
        depthunsubscribe() {
            this.$socket.sendObj({
                method: 'depth.unsubscribe',
                params: [],
                id: 1
            });
        },
        orderquery() {
            this.$socket.sendObj({
                method: 'depth.unsubscribe',
                params: ['BTCBCH', 0, 200],
                id: 1
            });
        },
        orderhistory() {
            this.$socket.sendObj({
                method: 'order.history',
                params: ['BTCBCH', 0, 0, 500, 2],
                id: 1
            });
        },
        ordersubscribe() {
            this.$socket.sendObj({
                method: 'order.subscribe',
                params: ['BTCBCH'],
                id: 1
            });
        },
        orderupdate() {
            this.$socket.sendObj({
                method: 'order.update',
                params: ['BTCBCH', 1, 0],
                id: 1
            });
        },
        orderunsubscribe() {
            this.$socket.sendObj({
                method: 'order.unsubscribe',
                params: [],
                id: 1
            });
        },
        assetquery() {
            this.$socket.sendObj({
                method: 'asset.query',
                params: ['BTC'],
                id: 1
            });
        },
        assethistory() {
            this.$socket.sendObj({
                method: 'asset.history',
                params: ['BTC', null, 0, 0, 0, 200],
                id: 1
            });
        }
    }
};
</script>
