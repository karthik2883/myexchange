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
                            <v-tabs fixed-tabs>
                                <v-tab class="body-1 text-left">BTC</v-tab>
                                <v-tab class="body-1">ETH</v-tab>
                                <v-tab class="body-1">USDT</v-tab>
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
                                </v-tab-item>
                                <v-tab-item>
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
