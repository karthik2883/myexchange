  <template>
    <v-flex md12>
        <v-layout row>
            <v-card class="mx-auto pa-2" style=" width:95%;">
                <v-flex md12>
                    <v-layout row>
                        <v-flex md6 class="pa-2">Trade History</v-flex>
                    </v-layout>
                </v-flex>
                <v-flex md12>
                    <v-row no-gutters>
                        <v-flex md4 class="text-end">Time &nbsp; &nbsp;</v-flex>
                        <v-flex class="text-end" md4>Price (USDT) &nbsp; &nbsp;</v-flex>
                        <v-flex class="text-sm-right" md4>Amount (QTUM) &nbsp; &nbsp;&nbsp; &nbsp;</v-flex>
                    </v-row>
                </v-flex>
                <v-simple-table height="635px">
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
                            <td style="color:red">SELL</td>
                            <td>11:51:58</td>
                            <td>119.78</td>
                            <td>0.0498</td>
                        </tr>
                        <tr>
                            <td style="color:red">SELL</td>
                            <td>11:51:58</td>
                            <td>119.78</td>
                            <td>0.0498</td>
                        </tr>
                        <tr>
                            <td style="color:red">SELL</td>
                            <td>11:51:58</td>

                            <td>119.78</td>
                            <td>0.0498</td>
                        </tr>
                        <tr>
                            <td style="color:red">SELL</td>
                            <td>11:51:58</td>
                            <td>119.78</td>
                            <td>0.0498</td>
                        </tr>
                        <tr>
                            <td style="color:red">SELL</td>
                            <td>11:51:58</td>
                            <td>119.78</td>
                            <td>0.0498</td>
                        </tr>
                        <tr>
                            <td style="color:red">SELL</td>
                            <td>11:51:58</td>
                            <td>119.78</td>
                            <td>0.0498</td>
                        </tr>
                        <tr>
                            <td style="color:red">SELL</td>
                            <td>11:51:58</td>
                            <td>119.78</td>
                            <td>0.0498</td>
                        </tr>
                        <tr>
                            <td style="color:red">SELL</td>
                            <td>11:51:58</td>
                            <td>119.78</td>
                            <td>0.0498</td>
                        </tr>
                        <tr>
                            <td style="color:red">SELL</td>
                            <td>11:51:58</td>

                            <td>119.78</td>
                            <td>0.0498</td>
                        </tr>
                        <tr>
                            <td style="color:green">BUY</td>
                            <td>11:51:58</td>

                            <td>119.78</td>
                            <td>0.0498</td>
                        </tr>
                        <tr>
                            <td style="color:green">BUY</td>
                            <td>11:51:58</td>

                            <td>119.78</td>
                            <td>0.0498</td>
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
