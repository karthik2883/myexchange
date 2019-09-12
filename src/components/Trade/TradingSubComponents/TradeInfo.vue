<template>
    <v-container>
        <v-card :elevation="24">
            <v-container fluid>
                <v-layout row md12>
                    <v-flex md2 sm3 class="pa-1">
                        <div class="overline">ETH/BCH</div>
                        <div class="body-1">0.5942277</div>
                        <div class="body-1">176.51 USD</div>
                    </v-flex>
                    <v-divider style="background-color:green;" class="mx-1" vertical></v-divider>
                    <v-flex md2 sm3>
                        <div class="overline">24H Change</div>
                        <div class="body-1">+0%</div>
                    </v-flex>
                    <v-divider style="background-color:green;" class="mx-1" vertical></v-divider>
                    <v-flex md2 sm3>
                        <div class="overline">24H Highest</div>
                        <div class="body-1">0.59554914 BCH</div>
                    </v-flex>
                    <v-divider style="background-color:green;" class="mx-1" vertical></v-divider>
                    <v-flex md2 sm3>
                        <div class="overline">24H Lowest</div>
                        <div class="body-1">0.59554914 BCH</div>
                    </v-flex>
                    <v-divider style="background-color:green;" class="mx-1" vertical></v-divider>
                    <v-flex md2 sm3>
                        <div class="overline">24H Volume/Value</div>
                        <div class="body-1">96,581.829473</div>
                    </v-flex>
                    <v-divider style="background-color:green;" class="mx-1" vertical></v-divider>
                    <v-flex>
                        <div class="overline">ETH /BCH</div>
                        <div class="body-1">57,232.605</div>
                    </v-flex>
                    <v-btn class="mx-4" fab dark small color="secondary" elevation="-10">
                        <v-icon>mdi-lightbulb-on-outline</v-icon>
                    </v-btn>
                </v-layout>
            </v-container>
        </v-card>
    </v-container>
</template>
<script>
export default {
    name: 'Tradinginfo',
    data() {
        return {};
    }
};
</script>