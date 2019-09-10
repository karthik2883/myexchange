<template>
    <infinite-slide-bar>
        <v-layout row>
            <v-layout row v-for="coin in coins" :key="coin.keys" justify-center>
                <v-container row wrap>
                    <v-flex md3>
                        <v-layout align-end justify-center>
                            <v-img
                                :src="require('@/assets/everus.png')"
                                alt="everus"
                                contain
                                style="height: 50px; width:50px;"
                            ></v-img>
                        </v-layout>
                    </v-flex>
                    <v-flex md3>
                        <v-flex md4 class="subheading">{{coin.name}}</v-flex>
                        <v-flex md8 class="subheading">
                            {{coin.price}}
                            <div
                                :class="{ 'cl-success': coin.change > 0, 'cl-danger': coin.change < 0 }"
                            >({{coin.change}}%)</div>
                        </v-flex>
                    </v-flex>
                    <v-flex md3></v-flex>
                    <v-flex md3></v-flex>
                </v-container>
            </v-layout>
        </v-layout>
    </infinite-slide-bar>
</template>
<script>
import InfiniteSlideBar from 'vue-infinite-slide-bar';
export default {
    name: 'ListAnnouncement',
    components: {
        InfiniteSlideBar
    },
    data() {
        var coins = [
            {
                name: 'EVR',
                price: '$45.25',
                change: '-1',
                keys: 'everus'
            },
            {
                name: 'EOS',
                price: '$1',
                change: '15.54',
                keys: 'eos'
            },
            {
                name: 'ETH',
                price: '$50.6',
                change: '15.54',
                key: 'eth'
            },
            {
                name: 'BTC',
                price: '$1500.25',
                change: '15.54',
                keys: 'btc'
            },
            {
                name: 'LTC',
                price: '$1500.25',
                change: '15.54',
                keys: 'ltc'
            }
        ];
        return { coins };
    }
};
</script>
<style scoped>
.cl-success {
    color: green;
}
.cl-danger {
    color: red;
}
</style>