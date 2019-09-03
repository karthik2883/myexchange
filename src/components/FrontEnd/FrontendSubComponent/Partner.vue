<template>
    <v-container grid-list-md>
        <v-layout row class="pa-5">
            <v-flex md12 text-left>
                <p class="headline">Partners</p>
            </v-flex>

            <v-carousel
                cycle
                :continuous="true"
                :show-arrows="false"
                hide-delimiter-background
                delimiter-icon="mdi-minus"
                height="70"
            >
                <v-carousel-item :key="i" v-for="i in 10">
                    <v-layout row>
                        <v-flex md3>
                            <img
                                src="https://p2pb2b.io/storage/partners/QETUauv75zIW6QInNtRm8ZZhadFv3HIJM1vVjBdA.png"
                                alt="partner.title"
                            />
                        </v-flex>
                        <v-flex md3>
                            <img
                                src="https://p2pb2b.io/storage/partners/wWNw1pp0Pc2UjtqYzI3cuiknyU7STwFFn3LT4zRU.png"
                                alt="partner.title"
                                class="Partners__partnerImg img-fluid"
                            />
                        </v-flex>
                        <v-flex md3>
                            <img
                                src="https://p2pb2b.io/storage/partners/TFLdghpJxODGhhVFHH3yjtxPvsdGGRORH2ATxtnc.png"
                                alt="partner.title"
                                class="Partners__partnerImg img-fluid"
                            />
                        </v-flex>
                        <v-flex md3>
                            <img
                                src="https://p2pb2b.io/storage/partners/TdSATPj11E8SWbV0PbcDOoj5cP34Eqhb1YjbxHcs.png"
                                alt="partner.title"
                                class="Partners__partnerImg img-fluid"
                            />
                        </v-flex>
                    </v-layout>
                </v-carousel-item>
            </v-carousel>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    name: 'Partner'
};
</script>