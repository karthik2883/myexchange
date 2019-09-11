<template>
    <v-layout row class="pa-5">
        <v-container grid-list-md>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="4">
                    <v-card class="elevation-12">
                        <v-toolbar color="blue-grey darken-4">
                            <v-toolbar-title class="white--text">Signup form</v-toolbar-title>
                            <div class="flex-grow-1"></div>
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <v-btn :href="source" icon large target="_blank" v-on="on">
                                        <v-icon class="white--text">mdi-code-tags</v-icon>
                                    </v-btn>
                                </template>
                                <span>Source</span>
                            </v-tooltip>
                            <v-tooltip right>
                                <template v-slot:activator="{ on }">
                                    <v-btn
                                        icon
                                        large
                                        href="https://codepen.io/johnjleider/pen/pMvGQO"
                                        target="_blank"
                                        v-on="on"
                                    >
                                        <v-icon>mdi-codepen</v-icon>
                                    </v-btn>
                                </template>
                                <span>Codepen</span>
                            </v-tooltip>
                        </v-toolbar>
                        <v-card-text>
                            <v-form>
                                <v-text-field label="Signup" name="signup" type="text"></v-text-field>

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
                        <v-card-actions>
                            <div class="flex-grow-1"></div>
                            <v-btn color="primary">Signup</v-btn>
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