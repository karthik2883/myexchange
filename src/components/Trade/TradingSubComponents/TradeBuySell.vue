 <template>
    <v-layout row class="pa-2">
        <v-flex md6 class="pa-2">
            <v-card class="pa-2" :elevation="24">
                <v-flex class="body-1">Buy NEO</v-flex>
                <form>
                    <v-flex md12>
                        <v-layout row wrap align-center>
                            <v-flex md4 class="pa-4">
                                <v-spacer></v-spacer>
                                <v-label class="body-1">Price</v-label>
                            </v-flex>
                            <v-flex md8>
                                <v-text-field value="0.15"></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex md12>
                        <v-layout row wrap align-center>
                            <v-flex md4 class="pa-4">
                                <v-spacer></v-spacer>
                                <v-label class="body-1">Amount</v-label>
                            </v-flex>
                            <v-flex md8>
                                <v-text-field value="0.15"></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex md12>
                        <v-layout row wrap align-center>
                            <v-flex md4 class="pa-4">
                                <v-spacer></v-spacer>
                                <v-label class="body-1">Total</v-label>
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
                <v-flex class="body-1">Sell NEO</v-flex>
                <form>
                    <v-flex md12>
                        <v-layout row wrap align-center>
                            <v-flex md4 class="pa-4">
                                <v-spacer></v-spacer>
                                <v-label class="body-1">Price</v-label>
                            </v-flex>
                            <v-flex md8>
                                <v-text-field value="0.15"></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex md12>
                        <v-layout row wrap align-center>
                            <v-flex md4 class="pa-4">
                                <v-spacer></v-spacer>
                                <v-label class="body-1">Amount</v-label>
                            </v-flex>
                            <v-flex md8>
                                <v-text-field value="0.15"></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex md12>
                        <v-layout row wrap align-center>
                            <v-flex md4 class="pa-4">
                                <v-spacer></v-spacer>
                                <v-label class="body-1">Total</v-label>
                            </v-flex>
                            <v-flex md8>
                                <v-text-field value="0.15"></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex md12>
                        <v-layout row wrap align-center>
                            <v-flex md4 class="pa-4">
                                <v-spacer></v-spacer>
                                <v-label class="body-1">Total + fee 0.2%</v-label>
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