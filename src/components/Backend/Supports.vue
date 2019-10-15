<template>
    <v-container grid-list-md>
        <v-card>
            <v-layout row class="pa-5">
                <v-flex md12 text-left>
                    <v-layout row>
                        <v-toolbar color="blue-grey darken-4">
                            <v-toolbar-title class="white--text">Supports</v-toolbar-title>
                            <div class="flex-grow-1"></div>
                        </v-toolbar>
                    </v-layout>
                </v-flex>
                <v-flex md12 text-left>
                    <v-flex md12 text-right>
                        <v-btn to="#" flat outlined text color="teal accent-4">NEW TICKET</v-btn>
                    </v-flex>
                    <v-flex md12 text-left>
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-left">Date</th>
                                        <th class="text-left">Category</th>
                                        <th class="text-left">Topic</th>
                                        <th class="text-left">Status</th>
                                        <th class="text-left"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            5538
                                            Jul 23, 11:05
                                        </td>
                                        <td>deposit</td>
                                        <td>Balance is not visible</td>

                                        <td>fixed</td>
                                        <td>
                                            <v-btn outlined text color="teal accent-4">Show</v-btn>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            3415
                                            May 22, 19:58
                                        </td>
                                        <td>withdraw</td>
                                        <td>withdraw button is disable</td>

                                        <td>fixed</td>
                                        <td>
                                            <v-btn outlined text color="teal accent-4">Show</v-btn>
                                        </td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-flex>
                </v-flex>
            </v-layout>
        </v-card>
    </v-container>
</template>
<script>
export default {
    name: 'Supports',
    data() {
        return {
            appTitle: 'Supports'
        };
    }
};
</script>
