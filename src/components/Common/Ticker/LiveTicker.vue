<template>
    <infinite-slide-bar fixed>
        <v-layout row>
            <v-layout row v-for="coin in coins" :key="coin.keys" justify-center>
                <v-container row wrap>
                    <v-flex>
                        <v-layout>
                            <v-flex>
                                <v-img
                                    :src="require('@/assets/everus.png')"
                                    alt="everus"
                                    contain
                                    style="height: 25px; width:25px;"
                                ></v-img>
                            </v-flex>
                            <v-flex class="subheading">{{coin.name}}</v-flex>
                            <v-flex class="subheading">{{coin.price}}</v-flex>
                            <v-flex class="subheading">
                                <div
                                    :class="{ 'cl-success': coin.change > 0, 'cl-danger': coin.change < 0 }"
                                >({{coin.change}}%)</div>
                            </v-flex>
                        </v-layout>
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
                change: '-12',
                keys: 'evr'
            },
            {
                name: 'EOS',
                price: '$1.00',
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