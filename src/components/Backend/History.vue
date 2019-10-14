<template>
    <v-container grid-list-md>
        <v-card>
            <v-layout row class="pa-5">
                <v-flex md12 text-left>
                    <v-layout row>
                        <v-toolbar color="blue-grey darken-4">
                            <v-toolbar-title class="white--text">History</v-toolbar-title>
                            <div class="flex-grow-1"></div>
                        </v-toolbar>
                    </v-layout>
                </v-flex>
                <v-flex md12 text-left>
                    <v-flex md12 text-left>
                        <v-btn to="/balances" outlined text color="teal accent-4">Deposit</v-btn>
                        <v-btn
                            to="/trade?currency=btc&dest=bch"
                            outlined
                            text
                            color="teal accent-4"
                        >Trade</v-btn>
                    </v-flex>

                    <v-flex md12 text-left>
                        <v-tabs fixed-tabs>
                            <v-tab fixed-tabs>Orders</v-tab>
                            <v-tab fixed-tabs>Trade</v-tab>
                            <v-tab fixed-tabs>Deposit</v-tab>
                            <v-tab fixed-tabs>Withdrawal</v-tab>
                            <v-tab-item>
                                <v-simple-table>
                                    <template v-slot:default>
                                        <thead>
                                            <tr>
                                                <th class="text-left">Time</th>
                                                <th class="text-left">Pair</th>
                                                <th class="text-left">Type</th>
                                                <th class="text-left">Price</th>
                                                <th class="text-left">Amount</th>
                                                <th class="text-left">Completed</th>
                                                <th class="text-left">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>14-05-19 14:14:26</td>
                                                <td>BTC/BCH</td>
                                                <td>SELL</td>

                                                <td>0.00000201</td>
                                                <td>1000</td>
                                                <td>1000</td>
                                                <td>0.00201</td>
                                            </tr>
                                            <tr>
                                                <td>14-05-19 14:14:26</td>
                                                <td>BTC/BCH</td>
                                                <td>BUY</td>
                                                <td>0.00000201</td>
                                                <td>1000</td>
                                                <td>1000</td>
                                                <td>0.00201</td>
                                            </tr>
                                        </tbody>
                                    </template>
                                </v-simple-table>
                            </v-tab-item>
                            <v-tab-item>
                                <v-simple-table>
                                    <template v-slot:default>
                                        <thead>
                                            <tr>
                                                <th class="text-left">Time</th>
                                                <th class="text-left">Pair</th>
                                                <th class="text-left">Type</th>
                                                <th class="text-left">Price</th>
                                                <th class="text-left">Amount</th>
                                                <th class="text-left">Completed</th>
                                                <th class="text-left">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>14-05-19 14:14:26</td>
                                                <td>BTC/BCH</td>
                                                <td>SELL</td>

                                                <td>0.00000201</td>
                                                <td>1000</td>
                                                <td>1000</td>
                                                <td>0.00201</td>
                                            </tr>
                                            <tr>
                                                <td>14-05-19 14:14:26</td>
                                                <td>BTC/BCH</td>
                                                <td>BUY</td>
                                                <td>0.00000201</td>
                                                <td>1000</td>
                                                <td>1000</td>
                                                <td>0.00201</td>
                                            </tr>
                                        </tbody>
                                    </template>
                                </v-simple-table>
                            </v-tab-item>
                            <v-tab-item>
                                <v-simple-table>
                                    <template v-slot:default>
                                        <thead>
                                            <tr>
                                                <th class="text-left">Time</th>
                                                <th class="text-left">Pair</th>
                                                <th class="text-left">Type</th>
                                                <th class="text-left">Price</th>
                                                <th class="text-left">Amount</th>
                                                <th class="text-left">Completed</th>
                                                <th class="text-left">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>14-05-19 14:14:26</td>
                                                <td>BTC/BCH</td>
                                                <td>SELL</td>

                                                <td>0.00000201</td>
                                                <td>1000</td>
                                                <td>1000</td>
                                                <td>0.00201</td>
                                            </tr>
                                            <tr>
                                                <td>14-05-19 14:14:26</td>
                                                <td>BTC/BCH</td>
                                                <td>BUY</td>
                                                <td>0.00000201</td>
                                                <td>1000</td>
                                                <td>1000</td>
                                                <td>0.00201</td>
                                            </tr>
                                        </tbody>
                                    </template>
                                </v-simple-table>
                            </v-tab-item>
                            <v-tab-item>
                                <v-simple-table>
                                    <template v-slot:default>
                                        <thead>
                                            <tr>
                                                <th class="text-left">Time</th>
                                                <th class="text-left">Pair</th>
                                                <th class="text-left">Type</th>
                                                <th class="text-left">Price</th>
                                                <th class="text-left">Amount</th>
                                                <th class="text-left">Completed</th>
                                                <th class="text-left">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>14-05-19 14:14:26</td>
                                                <td>BTC/BCH</td>
                                                <td>SELL</td>

                                                <td>0.00000201</td>
                                                <td>1000</td>
                                                <td>1000</td>
                                                <td>0.00201</td>
                                            </tr>
                                            <tr>
                                                <td>14-05-19 14:14:26</td>
                                                <td>BTC/BCH</td>
                                                <td>BUY</td>
                                                <td>0.00000201</td>
                                                <td>1000</td>
                                                <td>1000</td>
                                                <td>0.00201</td>
                                            </tr>
                                        </tbody>
                                    </template>
                                </v-simple-table>
                            </v-tab-item>
                        </v-tabs>
                    </v-flex>
                </v-flex>
            </v-layout>
        </v-card>
    </v-container>
</template>
<script>
export default {
    name: 'History',
    data() {
        return {
            appTitle: 'History'
        };
    }
};
</script>
