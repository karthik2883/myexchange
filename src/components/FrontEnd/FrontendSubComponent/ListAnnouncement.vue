<template>
    <infinite-slide-bar>
        <v-layout row>
            <v-card
                style="padding: 10px;
                 margin: 10px;"
                max-width="100"
                v-for="coin in coins"
                :key="coin.keys"
                :elevation="24"
            >
                <v-flex>
                    <img
                        :src="require('@/assets/everus.png')"
                        alt="everus"
                        width="50px"
                        height="50px"
                    />
                    <div class="f-left">
                        <div class="f-w-bold">{{coin.name}}</div>
                        <div>
                            {{coin.price}}
                            <span
                                :class="{ 'cl-success': coin.change > 0, 'cl-danger': coin.change < 0 }"
                            >({{coin.change}}%)</span>
                        </div>
                    </div>
                </v-flex>
            </v-card>
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
                name: 'everus',
                price: '45545487.25',
                change: '15.54',
                keys: 'everus'
            },
            {
                name: 'eos',
                price: '45545487.25',
                change: '15.54',
                keys: 'eos'
            },
            {
                name: 'eth',
                price: '45545487.25',
                change: '15.54',
                key: 'eth'
            },
            {
                name: 'btc',
                price: '45545487.25',
                change: '15.54',
                keys: 'btc'
            },
            {
                name: 'ltc',
                price: '45545487.25',
                change: '15.54',
                keys: 'ltc'
            }
        ];
        return { coins };
    }
};
</script>