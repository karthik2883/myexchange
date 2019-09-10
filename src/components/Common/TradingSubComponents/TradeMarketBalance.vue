   <template>
    <v-flex md12>
        <v-layout row>
            <v-flex md12 class="pa-2">
                <v-tabs fixed-tabs>
                    <v-tab>Market</v-tab>
                    <v-tab>Balances</v-tab>
                    <v-tab-item>
                        <v-flex md12 class="pa-2">
                            <v-flex md4 class="pa-2">
                                <v-text-field label="Search" single-line></v-text-field>
                            </v-flex>
                            <v-tabs fixed-tabs>
                                <v-tab class="text-left">BTC</v-tab>
                                <v-tab>ETH</v-tab>
                                <v-tab>USDT</v-tab>
                                <v-tab-item>
                                    <v-flex md12>
                                        <v-layout row>
                                            <v-card class="mx-auto pa-2" style=" width:95%;">
                                                <v-flex md12>
                                                    <v-row no-gutters>
                                                        <v-flex md3 class="text-start">Market</v-flex>
                                                        <v-flex class="text-start" md3>Price</v-flex>
                                                        <v-flex class="text-start" md3>Volume</v-flex>
                                                        <v-flex class="text-start" md3>Change</v-flex>
                                                    </v-row>
                                                </v-flex>
                                                <v-simple-table height="500px">
                                                    <thead>
                                                        <tr>
                                                            <th class="text-left"></th>
                                                            <th class="text-left"></th>
                                                            <th class="text-left"></th>
                                                            <th class="text-left"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>BTC</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td style="color:green">+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>USD</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td style="color:green">+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>ETH</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td style="color:green">+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>ECH</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td style="color:green">+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>LTC</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td style="color:green">+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>USDT</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td style="color:green">+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>EOS</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td style="color:green">+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>EST</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td style="color:green">+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>BCH</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td style="color:green">+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>LTC</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td style="color:green">+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>NEO</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td style="color:green">+15%</td>
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
                                                <v-flex md12>
                                                    <v-row no-gutters>
                                                        <v-flex md3 class="text-start">Market</v-flex>
                                                        <v-flex class="text-start" md3>Price</v-flex>
                                                        <v-flex class="text-start" md3>Volume</v-flex>
                                                        <v-flex class="text-start" md3>Change</v-flex>
                                                    </v-row>
                                                </v-flex>
                                                <v-simple-table height="500px">
                                                    <thead>
                                                        <tr>
                                                            <th class="text-left"></th>
                                                            <th class="text-left"></th>
                                                            <th class="text-left"></th>
                                                            <th class="text-left"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>BTC</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td>+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>USD</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td>+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>ETH</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td>+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>ECH</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td>+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>LTC</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td>+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>USDT</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td>+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>EOS</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td>+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>EST</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td>+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>BCH</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td>+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>LTC</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td>+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>NEO</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td>+15%</td>
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
                                                <v-flex md12>
                                                    <v-row no-gutters>
                                                        <v-flex md3 class="text-start">Market</v-flex>
                                                        <v-flex class="text-start" md3>Price</v-flex>
                                                        <v-flex class="text-start" md3>Volume</v-flex>
                                                        <v-flex class="text-start" md3>Change</v-flex>
                                                    </v-row>
                                                </v-flex>
                                                <v-simple-table height="500px">
                                                    <thead>
                                                        <tr>
                                                            <th class="text-left"></th>
                                                            <th class="text-left"></th>
                                                            <th class="text-left"></th>
                                                            <th class="text-left"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>BTC</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td>+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>USD</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td>+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>ETH</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td>+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>ECH</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td>+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>LTC</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td>+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>USDT</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td>+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>EOS</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td>+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>EST</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td>+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>BCH</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td>+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>LTC</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td>+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>NEO</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td>+15%</td>
                                                        </tr>
                                                    </tbody>
                                                </v-simple-table>
                                            </v-card>
                                        </v-layout>
                                    </v-flex>
                               
                                    <v-flex md12>
                                        <v-layout row>
                                            <v-card class="mx-auto pa-2" style=" width:95%;">
                                                <v-flex md12>
                                                    <v-row no-gutters>
                                                        <v-flex md3 class="text-start">Market</v-flex>
                                                        <v-flex class="text-start" md3>Price</v-flex>
                                                        <v-flex class="text-start" md3>Volume</v-flex>
                                                        <v-flex class="text-start" md3>Change</v-flex>
                                                    </v-row>
                                                </v-flex>
                                                <v-simple-table height="500px">
                                                    <thead>
                                                        <tr>
                                                            <th class="text-left"></th>
                                                            <th class="text-left"></th>
                                                            <th class="text-left"></th>
                                                            <th class="text-left"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>BTC</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td>+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>USD</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td>+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>ETH</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td>+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>ECH</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td>+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>LTC</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td>+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>USDT</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td>+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>EOS</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td>+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>EST</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td>+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>BCH</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td>+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>LTC</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td>+15%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>NEO</td>
                                                            <td>10136.15</td>
                                                            <td>32423243.89</td>
                                                            <td>+15%</td>
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
