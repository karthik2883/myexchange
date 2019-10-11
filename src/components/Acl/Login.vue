<template>
    <v-layout row class="pa-5">
        <v-container fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="4">
                    <v-card class="elevation-12">
                        <v-toolbar color="secondary darken-1">
                            <v-toolbar-title class="white--text">Login</v-toolbar-title>
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
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <!-- <GeeCaptcha /> -->
                        </v-card-actions>
                        <v-card-text>
                            <p>
                                Forgot the password?
                                <a href="/#" target="_blank">Click here</a>
                            </p>
                        </v-card-text>
                        <v-card-text>
                            <v-img
                                :src="require('@/assets/verification.png')"
                                width="357px"
                                height="48px"
                            ></v-img>
                        </v-card-text>
                        <v-card-text>
                            <v-btn x-large outlined color="secondary">Login</v-btn>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-layout>
</template>

<script>
//import GeeCaptcha from '../Common/Captcha/GeeCaptcha';
export default {
    name: 'Login',
    components: {
        //  GeeCaptcha
    },
    props: {
        source: String
    },
    data: () => ({
        drawer: null
    })
};
</script>