<template>
    <v-layout row class="pa-2">
        <v-flex md6 class="pa-2">
            <v-card class="pa-2" :elevation="24">
                <v-flex md12>
                    <v-layout row>
                        <v-flex md6 class="pa-2 body-1">Buy Order</v-flex>
                        <v-flex md6 class="pa-2">
                            <v-select filled label="Decimals" :items="items"></v-select>
                        </v-flex>
                    </v-layout>
                </v-flex>

                <v-simple-table height="300px">
                    <thead>
                        <tr>
                            <th class="text-left body-1">PRICE</th>
                            <th class="text-left body-1">NEO</th>
                            <th class="text-left body-1">ETH</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="subtitle-1" style="color:green">0.0498</td>
                            <td class="subtitle-1">119.78</td>
                            <td class="subtitle-1">0.0498</td>
                        </tr>
                        <tr>
                            <td class="subtitle-1" style="color:green">0.0498</td>
                            <td class="subtitle-1">119.78</td>
                            <td class="subtitle-1">0.0498</td>
                        </tr>
                        <tr>
                            <td class="subtitle-1" style="color:green">0.0498</td>
                            <td class="subtitle-1">119.78</td>
                            <td class="subtitle-1">0.0498</td>
                        </tr>
                        <tr>
                            <td class="subtitle-1" style="color:green">0.0498</td>
                            <td class="subtitle-1">119.78</td>
                            <td class="subtitle-1">0.0498</td>
                        </tr>
                        <tr>
                            <td class="subtitle-1" style="color:green">0.0498</td>
                            <td class="subtitle-1">119.78</td>
                            <td class="subtitle-1">0.0498</td>
                        </tr>
                        <tr>
                            <td class="subtitle-1" style="color:green">0.0498</td>
                            <td class="subtitle-1">119.78</td>
                            <td class="subtitle-1">0.0498</td>
                        </tr>
                        <tr>
                            <td class="subtitle-1" style="color:green">0.0498</td>
                            <td class="subtitle-1">119.78</td>
                            <td class="subtitle-1">0.0498</td>
                        </tr>
                        <tr>
                            <td class="subtitle-1" style="color:green">0.0498</td>
                            <td class="subtitle-1">119.78</td>
                            <td class="subtitle-1">0.0498</td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card>
        </v-flex>
        <v-flex md6 class="pa-2">
            <v-card class="pa-2" :elevation="24">
                <v-flex md12>
                    <v-layout row>
                        <v-flex md6 class="pa-2 body-1">Sell Order</v-flex>
                        <v-flex md6 class="pa-2">
                            <v-select filled label="Decimals" :items="items"></v-select>
                        </v-flex>
                    </v-layout>
                </v-flex>

                <v-simple-table height="300px">
                    <thead>
                        <tr>
                            <th class="text-left body-1">PRICE</th>
                            <th class="text-left body-1">NEO</th>
                            <th class="text-left body-1">ETH</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="subtitle-1" style="color:green">0.0498</td>
                            <td class="subtitle-1">119.78</td>
                            <td class="subtitle-1">0.0498</td>
                        </tr>
                        <tr>
                            <td class="subtitle-1" style="color:green">0.0498</td>
                            <td class="subtitle-1">119.78</td>
                            <td class="subtitle-1">0.0498</td>
                        </tr>
                        <tr>
                            <td class="subtitle-1" style="color:green">0.0498</td>
                            <td class="subtitle-1">119.78</td>
                            <td class="subtitle-1">0.0498</td>
                        </tr>
                        <tr>
                            <td class="subtitle-1" style="color:green">0.0498</td>
                            <td class="subtitle-1">119.78</td>
                            <td class="subtitle-1">0.0498</td>
                        </tr>
                        <tr>
                            <td class="subtitle-1" style="color:green">0.0498</td>
                            <td class="subtitle-1">119.78</td>
                            <td class="subtitle-1">0.0498</td>
                        </tr>
                        <tr>
                            <td class="subtitle-1" style="color:green">0.0498</td>
                            <td class="subtitle-1">119.78</td>
                            <td class="subtitle-1">0.0498</td>
                        </tr>
                        <tr>
                            <td class="subtitle-1" style="color:green">0.0498</td>
                            <td class="subtitle-1">119.78</td>
                            <td class="subtitle-1">0.0498</td>
                        </tr>
                        <tr>
                            <td class="subtitle-1" style="color:green">0.0498</td>
                            <td class="subtitle-1">119.78</td>
                            <td class="subtitle-1">0.0498</td>
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