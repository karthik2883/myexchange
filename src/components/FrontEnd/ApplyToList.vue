<template>
    <v-container grid-list-md>
        <v-layout row class="pa-5">
            <v-flex md12 text-left>
                <v-layout row>
                    <v-flex md8 text-left>
                        <p class="headline">Leave a request</p>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex md12 text-left>
                <ol>
                    <li>
                        <ul>
                            <p class="subtitle-1">
                                Your project should have a website containing your contact information and a detailed description of the idea. Also official Reddit and Bitcointalk threads for your project are required,
                                as these are respectable and popular discussions platforms.
                            </p>
                        </ul>
                    </li>

                    <li>
                        <ul>
                            <p class="subtitle-1">
                                Your request will be reviewed within a week, and you will receive our reply to the email that you indicated in the form.
                                Please note, this email should have the same domain as the official project website.
                            </p>
                        </ul>
                    </li>
                </ol>

                <ol>
                    <ul>
                        <p class="subtitle-1">
                            Contacts:
                            <br />team@evrex.io The head of the Sales
                            <br />@Listingevrex
                            <br />business@evrex.io
                            <br />listing@evrex.io
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
                        <v-btn class="mr-4" color="primary">Submit Request</v-btn>
                    </v-flex>
                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    name: 'ApplyToList'
};
</script>
 