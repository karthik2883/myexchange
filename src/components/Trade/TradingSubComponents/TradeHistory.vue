  <template>
    <v-flex md12>
        <v-layout row>
            <v-card class="mx-auto" style=" width:95%;" :elevation="24">
                <v-flex md12>
                    <v-layout row>
                        <v-flex md6 class="pa-5 body-1">Trade History</v-flex>
                    </v-layout>
                </v-flex>
                <v-simple-table height="635px">
                    <thead>
                        <tr>
                            <th class="text-left"></th>
                            <th class="text-left body-1">Time</th>
                            <th class="text-left body-1">Price (USDT)</th>
                            <th class="text-left body-1">Amount (USDT)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="subtitle-1" style="color:red">SELL</td>
                            <td class="subtitle-1">11:51:58</td>
                            <td class="subtitle-1">119.78</td>
                            <td class="subtitle-1">0.0498</td>
                        </tr>
                        <tr>
                            <td class="subtitle-1" style="color:red">SELL</td>
                            <td class="subtitle-1">11:51:58</td>
                            <td class="subtitle-1">119.78</td>
                            <td class="subtitle-1">0.0498</td>
                        </tr>
                        <tr>
                            <td class="subtitle-1" style="color:red">SELL</td>
                            <td class="subtitle-1">11:51:58</td>
                            <td class="subtitle-1">119.78</td>
                            <td class="subtitle-1">0.0498</td>
                        </tr>
                        <tr>
                            <td class="subtitle-1" style="color:red">SELL</td>
                            <td class="subtitle-1">11:51:58</td>
                            <td class="subtitle-1">119.78</td>
                            <td class="subtitle-1">0.0498</td>
                        </tr>
                        <tr>
                            <td class="subtitle-1" style="color:red">SELL</td>
                            <td class="subtitle-1">11:51:58</td>
                            <td class="subtitle-1">119.78</td>
                            <td class="subtitle-1">0.0498</td>
                        </tr>
                        <tr>
                            <td class="subtitle-1" style="color:red">SELL</td>
                            <td class="subtitle-1">11:51:58</td>
                            <td class="subtitle-1">119.78</td>
                            <td class="subtitle-1">0.0498</td>
                        </tr>
                        <tr>
                            <td class="subtitle-1" style="color:red">SELL</td>
                            <td class="subtitle-1">11:51:58</td>
                            <td class="subtitle-1">119.78</td>
                            <td class="subtitle-1">0.0498</td>
                        </tr>
                        <tr>
                            <td class="subtitle-1" style="color:red">SELL</td>
                            <td class="subtitle-1">11:51:58</td>
                            <td class="subtitle-1">119.78</td>
                            <td class="subtitle-1">0.0498</td>
                        </tr>
                        <tr>
                            <td class="subtitle-1" style="color:red">SELL</td>
                            <td class="subtitle-1">11:51:58</td>
                            <td class="subtitle-1">119.78</td>
                            <td class="subtitle-1">0.0498</td>
                        </tr>
                        <tr>
                            <td class="subtitle-1" style="color:red">SELL</td>
                            <td class="subtitle-1">11:51:58</td>
                            <td class="subtitle-1">119.78</td>
                            <td class="subtitle-1">0.0498</td>
                        </tr>
                        <tr>
                            <td class="subtitle-1" style="color:green">BUY</td>
                            <td class="subtitle-1">11:51:58</td>
                            <td class="subtitle-1">119.78</td>
                            <td class="subtitle-1">0.0498</td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card>
        </v-layout>
    </v-flex>
</template>
<script>
export default {
    name: 'TradeHistory',
    data() {
        return {};
    }
};
</script>
