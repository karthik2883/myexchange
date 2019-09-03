<template>
    <v-app class="grey--text text--darken-2">
        <v-container>
            <v-layout row>
                <v-flex md12>
                    <v-flex md12>
                        <Slider />
                    </v-flex>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex md12>
                    <ListAnnouncement />
                </v-flex>
            </v-layout>
            <v-layout>
                <v-flex md12>
                    <CryptoHistory />
                </v-flex>
            </v-layout>
            <v-layout>
                <v-flex md12>
                    <GetStarted />
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex md12>
                    <Partner />
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
import Slider from './FrontendSubComponent/Slider';
import ListAnnouncement from './FrontendSubComponent/ListingAnnouncement';
import CryptoHistory from './FrontendSubComponent/CryptoHistory';
import GetStarted from './FrontendSubComponent/GetStarted';
import Partner from './FrontendSubComponent/Partner';

export default {
    name: 'Front',
    components: {
        Slider,
        ListAnnouncement,
        CryptoHistory,
        GetStarted,
        Partner
    },
    data() {
        return {
            coins: []
        };
    }
};
</script>
