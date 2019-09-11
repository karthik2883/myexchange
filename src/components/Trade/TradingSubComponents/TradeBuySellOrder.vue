<template>
    <v-layout row class="pa-2">
        <v-flex md6 class="pa-2">
            <v-card class="pa-2">
                <v-flex md12>
                    <v-layout row>
                        <v-flex md6 class="pa-2">Buy Order</v-flex>
                        <v-flex md6 class="pa-2">
                            <v-select filled label="Decimals" :items="items"></v-select>
                        </v-flex>
                    </v-layout>
                </v-flex>

                <v-flex md12>
                    <v-row no-gutters>
                        <v-flex class="text-xs-right p-4">&nbsp;&nbsp;Price</v-flex>
                        <v-flex class="text-xs-right p-4">&nbsp;&nbsp;NEO</v-flex>
                        <v-flex class="text-xs-right p-4">&nbsp;&nbsp;ETH</v-flex>
                    </v-row>
                </v-flex>

                <v-simple-table height="300px">
                    <thead>
                        <tr>
                            <th class="text-left"></th>
                            <th class="text-left"></th>
                            <th class="text-left"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="color:green">0.0498</td>
                            <td>119.78</td>
                            <td>0.0498</td>
                        </tr>
                        <tr>
                            <td style="color:green">0.0498</td>
                            <td>119.78</td>
                            <td>0.0498</td>
                        </tr>
                        <tr>
                            <td style="color:green">0.0498</td>
                            <td>119.78</td>
                            <td>0.0498</td>
                        </tr>
                        <tr>
                            <td style="color:green">0.0498</td>
                            <td>119.78</td>
                            <td>0.0498</td>
                        </tr>
                        <tr>
                            <td style="color:green">0.0498</td>
                            <td>119.78</td>
                            <td>0.0498</td>
                        </tr>
                        <tr>
                            <td style="color:green">0.0498</td>
                            <td>119.78</td>
                            <td>0.0498</td>
                        </tr>
                        <tr>
                            <td style="color:green">0.0498</td>
                            <td>119.78</td>
                            <td>0.0498</td>
                        </tr>
                        <tr>
                            <td style="color:green">0.0498</td>
                            <td>119.78</td>
                            <td>0.0498</td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card>
        </v-flex>
        <v-flex md6 class="pa-2">
            <v-card class="pa-2">
                <v-flex md12>
                    <v-layout row>
                        <v-flex md6 class="pa-2">Sell Order</v-flex>
                        <v-flex md6 class="pa-2">
                            <v-select filled label="Decimals" :items="items"></v-select>
                        </v-flex>
                    </v-layout>
                </v-flex>
                <v-flex md12>
                    <v-row no-gutters>
                        <v-flex class="text-xs-right p-4">&nbsp;&nbsp;Price</v-flex>
                        <v-flex class="text-xs-right p-4">&nbsp;&nbsp;NEO</v-flex>
                        <v-flex class="text-xs-right p-4">&nbsp;&nbsp;ETH</v-flex>
                    </v-row>
                </v-flex>

                <v-simple-table height="300px">
                    <thead>
                        <tr>
                            <th class="text-left"></th>
                            <th class="text-left"></th>
                            <th class="text-left"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="color:red">0.0498</td>
                            <td>119.78</td>
                            <td>0.0498</td>
                        </tr>
                        <tr>
                            <td style="color:red">0.0498</td>
                            <td>119.78</td>
                            <td>0.0498</td>
                        </tr>
                        <tr>
                            <td style="color:red">0.0498</td>
                            <td>119.78</td>
                            <td>0.0498</td>
                        </tr>
                        <tr>
                            <td style="color:red">0.0498</td>
                            <td>119.78</td>
                            <td>0.0498</td>
                        </tr>
                        <tr>
                            <td style="color:red">0.0498</td>
                            <td>119.78</td>
                            <td>0.0498</td>
                        </tr>
                        <tr>
                            <td style="color:red">0.0498</td>
                            <td>119.78</td>
                            <td>0.0498</td>
                        </tr>
                        <tr>
                            <td style="color:red">0.0498</td>
                            <td>119.78</td>
                            <td>0.0498</td>
                        </tr>
                        <tr>
                            <td style="color:red">0.0498</td>
                            <td>119.78</td>
                            <td>0.0498</td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card>
        </v-flex>
    </v-layout>
</template>
<script>
export default {
    name: 'TradingBuySellOrder',
    data: () => ({
        items: ['8', '7', '6', '5']
    })
};
</script>