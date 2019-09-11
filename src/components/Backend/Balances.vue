<template>
    <v-container grid-list-md>
        <v-layout row class="pa-5">
            <v-flex md12 text-left>
                <v-layout row>
                    <v-flex md8 text-left>
                        <p class="headline">Balances</p>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex md6 text-left>
                <v-text-field label="Search" single-line></v-text-field>
            </v-flex>

            <v-flex md12 text-left>
                <div>
                    <v-data-table
                        :headers="headers"
                        :items="desserts"
                        :sort-by.sync="sortBy"
                        :sort-desc.sync="descending"
                        class="elevation-1"
                    ></v-data-table>
                    <!-- <div class="text-center pt-2">
                        <v-btn color="primary" class="mr-2" @click="toggleOrder">Toggle sort order</v-btn>
                        <v-btn color="primary" @click="nextSort">Sort next column</v-btn>
                    </div>-->
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    name: 'Balances',
    data() {
        return {
            sortBy: 'fat',
            descending: false,
            headers: [
                {
                    text: 'Coins',
                    align: 'left',
                    value: 'name'
                },
                { text: 'Action', value: 'action' },
                { text: 'Explorer', value: 'explorer' },
                { text: 'Main Account', value: 'mainaccount' },
                { text: 'Trading Account', value: 'tradingaccount' },
                { text: 'In Order', value: 'inorder' }
            ],
            desserts: [
                {
                    name: 'BTC',
                    action: 'deposite/withdraw',
                    explorer: 'link to explorer',
                    mainaccount: 24,
                    tradingaccount: 4.0,
                    inorder: 1
                },
                {
                    name: 'USD',
                    action: 'deposite/withdraw',
                    explorer: 'link to explorer',
                    mainaccount: 24,
                    tradingaccount: 4.0,
                    inorder: 1
                },
                {
                    name: 'ETH',
                    action: 'deposite/withdraw',
                    explorer: 'link to explorer',
                    mainaccount: 24,
                    tradingaccount: 4.0,
                    inorder: 1
                },
                {
                    name: 'ECH',
                    action: 'deposite/withdraw',
                    explorer: 'link to explorer',
                    mainaccount: 24,
                    tradingaccount: 4.0,
                    inorder: 1
                },
                {
                    name: 'LTC',
                    action: 'deposite/withdraw',
                    explorer: 'link to explorer',
                    mainaccount: 24,
                    tradingaccount: 4.0,
                    inorder: 1
                },
                {
                    name: 'USDT',
                    action: 'deposite/withdraw',
                    explorer: 'link to explorer',
                    mainaccount: 24,
                    tradingaccount: 4.0,
                    inorder: 1
                },
                {
                    name: 'EOS',
                    action: 'deposite/withdraw',
                    explorer: 'link to explorer',
                    mainaccount: 24,
                    tradingaccount: 4.0,
                    inorder: 1
                },
                {
                    name: 'EST',
                    action: 'deposite/withdraw',
                    explorer: 'link to explorer',
                    mainaccount: 24,
                    tradingaccount: 4.0,
                    inorder: 1
                },
                {
                    name: 'LTC',
                    action: 'deposite/withdraw',
                    explorer: 'link to explorer',
                    mainaccount: 24,
                    tradingaccount: 4.0,
                    inorder: 1
                },
                {
                    name: 'BCH',
                    action: 'deposite/withdraw',
                    explorer: 'link to explorer',
                    mainaccount: 24,
                    tradingaccount: 4.0,
                    inorder: 1
                }
            ]
        };
    }
    // methods: {
    //     toggleOrder() {
    //         this.descending = !this.descending;
    //     },
    //     nextSort() {
    //         let index = this.headers.findIndex(h => h.value === this.sortBy);
    //         index = (index + 1) % this.headers.length;
    //         this.sortBy = this.headers[index].value;
    //     }
    // }
};
</script>
