   <template>
    <v-flex md12>
        <v-layout row>
            <v-flex md12 class="pa-2">
                <v-tabs fixed-tabs>
                    <v-tab class="body-2">Market</v-tab>
                    <v-tab class="body-2">Balances</v-tab>
                    <v-tab-item>
                        <v-flex md12 class="pa-2">
                            <v-flex md4 class="pa-2">
                                <v-text-field label="Search" single-line></v-text-field>
                            </v-flex>
                            <v-tabs fixed-tabs>
                                <v-tab class="body-2 text-left">BTC</v-tab>
                                <v-tab class="body-2">ETH</v-tab>
                                <v-tab class="body-2">USDT</v-tab>
                                <v-tab-item>
                                    <v-flex md12>
                                        <v-container fluid>
                                            <v-layout row wrap>
                                                <v-card class="pa-2" style="width:100%;">
                                                    <!-- <v-flex md12>
                                                        <v-layout row>
                                                            <v-flex
                                                                md3
                                                                class="body-2 text-center"
                                                            >Market</v-flex>
                                                            <v-divider
                                                                style="background-color:green;"
                                                                class="mx-1"
                                                                vertical
                                                            ></v-divider>
                                                            <v-flex
                                                                class="body-2 text-center"
                                                                md3
                                                            >Price</v-flex>
                                                            <v-divider class="mx-1" vertical></v-divider>
                                                            <v-flex
                                                                class="body-2 text-center"
                                                                md3
                                                            >Volume</v-flex>
                                                            <v-divider
                                                                style="background-color:green;"
                                                                class="mx-1"
                                                                vertical
                                                            ></v-divider>
                                                            <v-flex
                                                                class="body-2 text-center"
                                                                md2
                                                            >Change</v-flex>
                                                        </v-layout>
                                                    </v-flex>-->
                                                    <v-simple-table class="body-2" height="500px">
                                                        <thead>
                                                            <tr>
                                                                <th
                                                                    class="body-2 text-center text-capitalize"
                                                                >Market</th>
                                                                <th
                                                                    class="body-2 text-center text-capitalize"
                                                                >Price</th>
                                                                <th
                                                                    class="body-2 text-center text-capitalize"
                                                                >Volume</th>
                                                                <th
                                                                    class="body-2 text-center text-capitalize"
                                                                >Change</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td
                                                                    style="width:10%"
                                                                    class="body-2 text-center text-capitalize"
                                                                >BTC</td>
                                                                <td
                                                                    style="width:25%"
                                                                    class="body-2 text-center caption"
                                                                >10136.15</td>
                                                                <td
                                                                    style="width:25%"
                                                                    class="body-2 text-center caption"
                                                                >32423243.89</td>
                                                                <td
                                                                    style="width:25%"
                                                                    class="body-2 text-center caption"
                                                                >+15%</td>
                                                            </tr>
                                                            <tr>
                                                                <td
                                                                    style="width:25%"
                                                                    class="body-2 text-center text-capitalize"
                                                                >LTC</td>
                                                                <td
                                                                    style="width:25%"
                                                                    class="body-2 text-center caption"
                                                                >10136.15</td>
                                                                <td
                                                                    style="width:25%"
                                                                    class="body-2 text-center caption"
                                                                >32423243.89</td>
                                                                <td
                                                                    style="width:25%"
                                                                    class="body-2 text-center caption"
                                                                >+15%</td>
                                                            </tr>
                                                            <tr>
                                                                <td
                                                                    style="width:25%"
                                                                    class="body-2 text-center text-capitalize"
                                                                >ETH</td>
                                                                <td
                                                                    style="width:25%"
                                                                    class="body-2 text-center caption"
                                                                >10136.15</td>
                                                                <td
                                                                    style="width:25%"
                                                                    class="body-2 text-center caption"
                                                                >32423243.89</td>
                                                                <td
                                                                    style="width:25%"
                                                                    class="body-2 text-center caption"
                                                                >+15%</td>
                                                            </tr>
                                                        </tbody>
                                                    </v-simple-table>
                                                </v-card>
                                            </v-layout>
                                        </v-container>
                                    </v-flex>
                                </v-tab-item>
                                <v-tab-item>
                                    <v-flex md12>
                                        <v-layout row>
                                            <v-card class="mx-auto pa-2" style=" width:95%;">
                                                <!-- <v-flex md12>
                                                    <v-row no-gutters>
                                                        <v-flex md3 class="text-start">Market</v-flex>
                                                        <v-flex class="text-start" md3>Price</v-flex>
                                                        <v-flex class="text-start" md3>Volume</v-flex>
                                                        <v-flex class="text-start" md3>Change</v-flex>
                                                    </v-row>
                                                </v-flex>-->
                                                <v-simple-table class="body-2" height="500px">
                                                    <thead>
                                                        <tr>
                                                            <th
                                                                class="body-2 text-center text-capitalize"
                                                            >Market</th>
                                                            <th
                                                                class="body-2 text-center text-capitalize"
                                                            >Price</th>
                                                            <th
                                                                class="body-2 text-center text-capitalize"
                                                            >Volume</th>
                                                            <th
                                                                class="body-2 text-center text-capitalize"
                                                            >Change</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                style="width:10%"
                                                                class="body-2 text-center text-capitalize"
                                                            >BTC</td>
                                                            <td
                                                                style="width:25%"
                                                                class="body-2 text-center caption"
                                                            >10136.15</td>
                                                            <td
                                                                style="width:25%"
                                                                class="body-2 text-center caption"
                                                            >32423243.89</td>
                                                            <td
                                                                style="width:25%"
                                                                class="body-2 text-center caption"
                                                            >+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td
                                                                style="width:25%"
                                                                class="body-2 text-center text-capitalize"
                                                            >LTC</td>
                                                            <td
                                                                style="width:25%"
                                                                class="body-2 text-center caption"
                                                            >10136.15</td>
                                                            <td
                                                                style="width:25%"
                                                                class="body-2 text-center caption"
                                                            >32423243.89</td>
                                                            <td
                                                                style="width:25%"
                                                                class="body-2 text-center caption"
                                                            >+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td
                                                                style="width:25%"
                                                                class="body-2 text-center text-capitalize"
                                                            >ETH</td>
                                                            <td
                                                                style="width:25%"
                                                                class="body-2 text-center caption"
                                                            >10136.15</td>
                                                            <td
                                                                style="width:25%"
                                                                class="body-2 text-center caption"
                                                            >32423243.89</td>
                                                            <td
                                                                style="width:25%"
                                                                class="body-2 text-center caption"
                                                            >+15%</td>
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
                                                <!-- <v-flex md12>
                                                    <v-row no-gutters>
                                                        <v-flex md3 class="text-start">Market</v-flex>
                                                        <v-flex class="text-start" md3>Price</v-flex>
                                                        <v-flex class="text-start" md3>Volume</v-flex>
                                                        <v-flex class="text-start" md3>Change</v-flex>
                                                    </v-row>
                                                </v-flex>-->
                                                <v-simple-table class="body-2" height="500px">
                                                    <thead>
                                                        <tr>
                                                            <th
                                                                class="body-2 text-center text-capitalize"
                                                            >Market</th>
                                                            <th
                                                                class="body-2 text-center text-capitalize"
                                                            >Price</th>
                                                            <th
                                                                class="body-2 text-center text-capitalize"
                                                            >Volume</th>
                                                            <th
                                                                class="body-2 text-center text-capitalize"
                                                            >Change</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                style="width:10%"
                                                                class="body-2 text-center text-capitalize"
                                                            >BTC</td>
                                                            <td
                                                                style="width:25%"
                                                                class="body-2 text-center caption"
                                                            >10136.15</td>
                                                            <td
                                                                style="width:25%"
                                                                class="body-2 text-center caption"
                                                            >32423243.89</td>
                                                            <td
                                                                style="width:25%"
                                                                class="body-2 text-center caption"
                                                            >+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td
                                                                style="width:25%"
                                                                class="body-2 text-center text-capitalize"
                                                            >LTC</td>
                                                            <td
                                                                style="width:25%"
                                                                class="body-2 text-center caption"
                                                            >10136.15</td>
                                                            <td
                                                                style="width:25%"
                                                                class="body-2 text-center caption"
                                                            >32423243.89</td>
                                                            <td
                                                                style="width:25%"
                                                                class="body-2 text-center caption"
                                                            >+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td
                                                                style="width:25%"
                                                                class="body-2 text-center text-capitalize"
                                                            >ETH</td>
                                                            <td
                                                                style="width:25%"
                                                                class="body-2 text-center caption"
                                                            >10136.15</td>
                                                            <td
                                                                style="width:25%"
                                                                class="body-2 text-center caption"
                                                            >32423243.89</td>
                                                            <td
                                                                style="width:25%"
                                                                class="body-2 text-center caption"
                                                            >+15%</td>
                                                        </tr>
                                                    </tbody>
                                                </v-simple-table>
                                            </v-card>
                                        </v-layout>
                                    </v-flex>
                                </v-tab-item>
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
        return {};
    }
};
</script>
