<template>
    <v-container grid-list-md>
        <v-card>
            <v-layout row class="pa-5">
                <v-flex md12 text-left>
                    <v-layout row>
                        <v-toolbar dark color="blue-grey darken-4">
                            <v-toolbar-title class="white--text">Leave a request</v-toolbar-title>
                            <div class="flex-grow-1"></div>
                        </v-toolbar>
                    </v-layout>
                </v-flex>
                <v-row no-gutters>
                    <p class="headline pa-5 text-start">How to Apply</p>
                    <v-flex md12 text-left>
                        <ol>
                            <li>
                                <ul>
                                    <p class="subtitle-1 font-weight-light">
                                        Your project should have a website containing your contact information and a detailed description of the idea. Also official Reddit and Bitcointalk threads for your project are required,
                                        as these are respectable and popular discussions platforms.
                                    </p>
                                </ul>
                            </li>

                            <li>
                                <ul>
                                    <p class="subtitle-1 font-weight-light">
                                        Your request will be reviewed within a week, and you will receive our reply to the email that you indicated in the form.
                                        Please note, this email should have the same domain as the official project website.
                                    </p>
                                </ul>
                            </li>
                        </ol>

                        <ol>
                            <ul>
                                <p class="subtitle-1 font-weight-light">
                                    Contacts:
                                    <br />team@Brexily.io The head of the Sales
                                    <br />@ListingBrexily
                                    <br />business@Brexily.io
                                    <br />listing@Brexily.io
                                    <br />
                                </p>
                            </ul>
                        </ol>
                    </v-flex>
                    <v-flex md6 class="pa-10">
                        <form>
                            <v-flex md12>
                                <v-layout row wrap align-center>
                                    <v-flex md12>
                                        <v-text-field placeholder="Your Name / Project Name"></v-text-field>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                            <v-flex md12>
                                <v-layout row wrap align-center>
                                    <v-flex md12>
                                        <v-text-field placeholder="Telegram"></v-text-field>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                            <v-flex md12>
                                <v-layout row wrap align-center>
                                    <v-flex md12>
                                        <v-text-field placeholder="Your Name / Project Name"></v-text-field>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                            <v-flex md12>
                                <v-layout row wrap align-center>
                                    <v-flex md12>
                                        <v-text-field placeholder="Email"></v-text-field>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                            <v-flex md12>
                                <v-layout row wrap align-center>
                                    <v-flex md12>
                                        <v-text-field placeholder="Your Comments"></v-text-field>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                            <v-flex md12>
                                <v-btn class="mr-4" dark color="blue-grey darken-4">Submit Request</v-btn>
                            </v-flex>
                        </form>
                    </v-flex>
                </v-row>
            </v-layout>
        </v-card>
    </v-container>
</template>
<script>
export default {
    name: 'ApplyToList'
};
</script>
 