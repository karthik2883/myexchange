 <template>
    <v-footer padless>
        <v-card class="flex" flat tile>
            <v-card-actions class="blue-grey darken-4">
                <v-layout row class="pa-md-4">
                    <v-flex class="text-left">
                        <span class="white--text">
                            2019 —
                            @EvrEx
                        </span>
                    </v-flex>
                    <v-flex class="text-right">
                        <v-icon class="white--text" size="24px">mdi-signal-variant</v-icon>
                        <span class="white--text">Connected</span>
                    </v-flex>
                </v-layout>
            </v-card-actions>
        </v-card>
    </v-footer>
</template>
<script>
export default {
    name: 'AppFooter',
    data: () => ({
        icons: [
            'fab fa-facebook',
            'fab fa-twitter',
            'fab fa-google-plus',
            'fab fa-linkedin',
            'fab fa-instagram'
        ]
    })
};
</script>