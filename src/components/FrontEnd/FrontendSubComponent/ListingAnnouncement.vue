<template>
    <v-container grid-list-md>
        <v-layout row class="pa-5">
            <v-flex md12 text-left>
                <p class="headline">Listing Announcement</p>
            </v-flex>
            <v-flex md12 text-center>
                <v-layout md12 row class="pa-5" color="primary">
                    <v-flex xs1>
                        <v-label class="headline">
                            <u>New Coin</u>
                        </v-label>
                    </v-flex>
                    <v-flex md6>
                        <v-carousel
                            cycle
                            :continuous="true"
                            :show-arrows="false"
                            hide-delimiter-background
                            delimiter-icon="mdi-minus"
                            height="100"
                        >
                            <v-carousel-item :key="i" v-for="i in 6">
                                <v-layout row>
                                    <v-flex md3>
                                        <div>
                                            <img
                                                src="https://p2pb2b.io/storage/front_page_currencies/OLLHoeVEKpDiYQMVORw9Zwfi9fzu1u2yYIR5HYvu.png"
                                                alt
                                                role="presentation"
                                                class="Listing__sliderIcon swiper-lazy"
                                            />
                                            <span data-v-cbd011fc class="Listing__sliderText">ZYN</span>
                                        </div>
                                    </v-flex>
                                    <v-flex md3>
                                        <div>
                                            <img
                                                data-v-cbd011fc
                                                src="https://p2pb2b.io/storage/front_page_currencies/OLLHoeVEKpDiYQMVORw9Zwfi9fzu1u2yYIR5HYvu.png"
                                                alt
                                                role="presentation"
                                                class="Listing__sliderIcon swiper-lazy"
                                            />
                                            <span data-v-cbd011fc class="Listing__sliderText">ZYN</span>
                                        </div>
                                    </v-flex>
                                    <v-flex md3>
                                        <div>
                                            <img
                                                data-v-cbd011fc
                                                src="https://p2pb2b.io/storage/front_page_currencies/OLLHoeVEKpDiYQMVORw9Zwfi9fzu1u2yYIR5HYvu.png"
                                                alt
                                                role="presentation"
                                                class="Listing__sliderIcon swiper-lazy"
                                            />
                                            <span data-v-cbd011fc class="Listing__sliderText">ZYN</span>
                                        </div>
                                    </v-flex>
                                    <v-flex md3>
                                        <div>
                                            <img
                                                data-v-cbd011fc
                                                src="https://p2pb2b.io/storage/front_page_currencies/OLLHoeVEKpDiYQMVORw9Zwfi9fzu1u2yYIR5HYvu.png"
                                                alt
                                                role="presentation"
                                                class="Listing__sliderIcon swiper-lazy"
                                            />
                                            <span data-v-cbd011fc class="Listing__sliderText">ZYN</span>
                                        </div>
                                    </v-flex>
                                </v-layout>
                            </v-carousel-item>
                        </v-carousel>
                    </v-flex>
                    <v-flex md4>
                        <v-btn :elevation="24" large color="primary" to="/applytolist">
                            Add Your Coin
                            <v-icon dark right>mdi-checkbox-marked-circle</v-icon>
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs1 text-center>
                <v-card dark color="primary" :elevation="24">
                    <v-card-text class="px-0">New</v-card-text>
                    <v-icon height="70px">mdi-tilde</v-icon>
                    <v-card-text class="px-0">Exe</v-card-text>
                    <v-card-text class="px-0">
                        <v-btn>Trade Now</v-btn>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs1 text-center>
                <v-card dark color="primary" :elevation="24">
                    <v-card-text class="px-0">New</v-card-text>
                    <v-icon height="70px">mdi-anchor</v-icon>
                    <v-card-text class="px-0">Exe</v-card-text>
                    <v-card-text class="px-0">
                        <v-btn>Trade Now</v-btn>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs1 text-center>
                <v-card dark color="primary" :elevation="24">
                    <v-card-text class="px-0">New</v-card-text>
                    <v-icon height="70px">mdi-tennis</v-icon>

                    <v-card-text class="px-0">Exe</v-card-text>
                    <v-card-text class="px-0">
                        <v-btn>Trade Now</v-btn>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs1 text-center>
                <v-card dark color="primary" :elevation="24">
                    <v-card-text class="px-0">New</v-card-text>
                    <v-icon height="70px">mdi-anchor</v-icon>
                    <v-card-text class="px-0">Exe</v-card-text>
                    <v-card-text class="px-0">
                        <v-btn>Trade Now</v-btn>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs1 text-center>
                <v-card dark color="primary" :elevation="24">
                    <v-card-text class="px-0 subheading">New</v-card-text>
                    <v-icon height="70px">mdi-anchor</v-icon>
                    <v-card-text class="px-0 subheading">Exe</v-card-text>
                    <v-card-text class="px-0">
                        <v-btn>Trade Now</v-btn>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs1 text-center>
                <v-card dark color="primary" :elevation="24">
                    <v-card-text class="px-0">New</v-card-text>
                    <v-icon height="70px">mdi-mouse</v-icon>
                    <v-card-text class="px-0">Exe</v-card-text>
                    <v-card-text class="px-0">
                        <v-btn>Trade Now</v-btn>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs1 text-center>
                <v-card dark color="primary" :elevation="24">
                    <v-card-text class="px-0">New</v-card-text>
                    <v-icon height="70px">mdi-xbox-controller</v-icon>
                    <v-card-text class="px-0">Exe</v-card-text>
                    <v-card-text class="px-0">
                        <v-btn>Trade Now</v-btn>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs1 text-center>
                <v-card dark color="primary" :elevation="24">
                    <v-card-text class="px-0">New</v-card-text>
                    <v-icon height="70px">mdi-watch</v-icon>
                    <v-card-text class="px-0">Exe</v-card-text>
                    <v-card-text class="px-0">
                        <v-btn>Trade Now</v-btn>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    name: 'ListAnnouncement'
};
</script>>