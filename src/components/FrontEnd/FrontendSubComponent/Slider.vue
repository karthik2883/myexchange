<template>
    <v-carousel cycle>
        <v-carousel-item v-for="Information in Informations" :key="Information.keys">
            <v-sheet :color="Information.colors" height="100%" tile>
                <v-row class="fill-height" align="center" justify="center">
                    <div class="display-3">{{Information.info}}</div>
                </v-row>
            </v-sheet>
        </v-carousel-item>
    </v-carousel>
</template>
<script>
export default {
    name: 'Slider',
    data() {
        var Informations = [
            {
                colors: 'secondary',
                info: 'Now IEO on the Brexily!'
            },
            {
                colors: 'secondary',
                info: 'Official license of the European Union'
            },
            {
                colors: 'secondary',
                info: 'Instant 24/7 user support'
            },
            {
                colors: 'secondary',
                info: 'Exchange protection by OWASP TOP10 standard'
            },
            {
                colors: 'secondary',
                info: 'Brexily mobile app is now available!'
            }
        ];
        return { Informations };
    }
};
</script>