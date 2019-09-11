<template>
    <v-container grid-list-md>
        <v-layout row class="pa-5">
            <v-flex md12 text-left>
                <v-layout row>
                    <v-flex md8 text-left>
                        <p class="headline">Order</p>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex md12 text-left>
                <v-layout row>
                    <v-flex md8 text-left>
                        <p class="headline">Order</p>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    name: 'Order',
    data() {
        return {
            appTitle: 'Order'
        };
    }
};
</script>
