 <template>
    <v-layout row class="pa-2">
        <v-flex md6 class="pa-2">
            <v-card class="pa-2">
                <v-flex>Buy NEO</v-flex>
                <form>
                    <v-flex md12>
                        <v-layout row wrap align-center>
                            <v-flex md4 class="pa-2">
                                <v-spacer></v-spacer>
                                <v-label>Price</v-label>
                            </v-flex>
                            <v-flex md8>
                                <v-text-field value="0.15"></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex md12>
                        <v-layout row wrap align-center>
                            <v-flex md4 class="pa-2">
                                <v-spacer></v-spacer>
                                <v-label>Amount</v-label>
                            </v-flex>
                            <v-flex md8>
                                <v-text-field value="0.15"></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex md12>
                        <v-layout row wrap align-center>
                            <v-flex md4 class="pa-2">
                                <v-spacer></v-spacer>
                                <v-label>Total</v-label>
                            </v-flex>
                            <v-flex md8>
                                <v-text-field value="0.15"></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex md12>
                        <v-layout row wrap align-center>
                            <v-flex md4 class="pa-2">
                                <v-spacer></v-spacer>
                                <v-label>Total + fee 0.2%</v-label>
                            </v-flex>
                            <v-flex md8>
                                <v-text-field value="0.15"></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex md12>
                        <v-btn class="mr-4" color="primary">
                            Buy
                            <v-icon>mdi-trending-up</v-icon>
                        </v-btn>
                    </v-flex>
                </form>
            </v-card>
        </v-flex>
        <v-flex md6 class="pa-2">
            <v-card class="pa-2">
                <v-flex>Sell NEO</v-flex>
                <form>
                    <v-flex md12>
                        <v-layout row wrap align-center>
                            <v-flex md4 class="pa-2">
                                <v-spacer></v-spacer>
                                <v-label>Price</v-label>
                            </v-flex>
                            <v-flex md8>
                                <v-text-field value="0.15"></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex md12>
                        <v-layout row wrap align-center>
                            <v-flex md4 class="pa-2">
                                <v-spacer></v-spacer>
                                <v-label>Amount</v-label>
                            </v-flex>
                            <v-flex md8>
                                <v-text-field value="0.15"></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex md12>
                        <v-layout row wrap align-center>
                            <v-flex md4 class="pa-2">
                                <v-spacer></v-spacer>
                                <v-label>Total</v-label>
                            </v-flex>
                            <v-flex md8>
                                <v-text-field value="0.15"></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex md12>
                        <v-layout row wrap align-center>
                            <v-flex md4 class="pa-2">
                                <v-spacer></v-spacer>
                                <v-label>Total + fee 0.2%</v-label>
                            </v-flex>
                            <v-flex md8>
                                <v-text-field value="0.15"></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex md12>
                        <v-btn class="mr-4" color="error">
                            Sell
                            <v-icon>mdi-trending-down</v-icon>
                        </v-btn>
                    </v-flex>
                </form>
            </v-card>
        </v-flex>
    </v-layout>
</template>
<script>
export default {
    name: 'TradingBuySell',
    data() {
        return {};
    }
};
</script>