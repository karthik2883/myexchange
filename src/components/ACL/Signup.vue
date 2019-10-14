<template>
    <v-layout row class="pa-5">
        <v-container grid-list-md>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="6">
                    <v-card class="elevation-12">
                        <v-toolbar color="blue-grey darken-4">
                            <v-toolbar-title class="white--text">Sign up to access your account</v-toolbar-title>
                            <div class="flex-grow-1"></div>
                        </v-toolbar>
                        <v-card-text>
                            <v-form>
                                <v-text-field label="Username" name="username" type="text"></v-text-field>

                                <v-text-field
                                    id="password"
                                    label="Password"
                                    name="password"
                                    type="password"
                                ></v-text-field>
                                <v-text-field
                                    id="password"
                                    label="Confirm Password"
                                    name="password"
                                    type="password"
                                ></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-text>
                            <v-label>Are you a U.S. citizen/resident?</v-label>
                        </v-card-text>
                        <v-card-text>
                            <v-btn-toggle v-model="toggle_exclusive" mandatory>
                                <v-row>
                                    <v-btn x-large outlined color="secondary">No i am not</v-btn>
                                    <v-btn x-large outlined color="secondary">Yes i am</v-btn>
                                </v-row>
                            </v-btn-toggle>
                        </v-card-text>
                        <v-card-text>
                            <v-checkbox
                                v-model="checkbox"
                                label="I agree to Partida Services OÜ Terms of Service and Privacy Policy"
                            ></v-checkbox>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn x-large outlined color="secondary">Signup</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-layout>
</template>

<script>
export default {
    name: 'Signup',
    props: {
        source: String
    },
    data: () => ({
        drawer: null
    })
};
</script>