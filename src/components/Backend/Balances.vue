<template>
    <v-container grid-list-md>
        <v-card>
            <v-layout row class="pa-5">
                <v-flex md12 text-left>
                    <v-layout row>
                        <v-toolbar color="blue-grey darken-4">
                            <v-toolbar-title class="white--text">Balances</v-toolbar-title>
                            <div class="flex-grow-1"></div>
                        </v-toolbar>
                    </v-layout>
                </v-flex>
                <v-flex md4 text-left>
                    <v-text-field label="Search" single-line hide-details></v-text-field>
                </v-flex>

                <v-flex md12 text-left>
                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class="text-left">Coin</th>
                                    <th class="text-left">Action</th>
                                    <th class="text-left">Explorer</th>
                                    <th class="text-left">Main Account</th>
                                    <th></th>
                                    <th class="text-left">Trading Account</th>
                                    <th class="text-left">In Order</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        BTC
                                        (Bitcoin)
                                    </td>
                                    <td>
                                        <v-btn outlined text color="teal accent-4">Deposit</v-btn>
                                        <v-btn outlined text color="teal accent-4">Withdraw</v-btn>
                                    </td>
                                    <td>
                                        <v-btn outlined>
                                            <v-icon>mdi-spotlight</v-icon>
                                        </v-btn>
                                    </td>

                                    <td>
                                        0
                                        <v-btn outlined>
                                            <v-icon>mdi-code-greater-than</v-icon>
                                        </v-btn>
                                    </td>
                                    <td>
                                        <v-icon>mdi-format-horizontal-align-center</v-icon>
                                    </td>
                                    <td>
                                        0
                                        <v-btn outlined>
                                            <v-icon>mdi-code-less-than</v-icon>
                                        </v-btn>
                                    </td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>
                                        BTC
                                        (Bitcoin)
                                    </td>
                                    <td>
                                        <v-btn outlined text color="teal accent-4">Deposit</v-btn>
                                        <v-btn outlined text color="teal accent-4">Withdraw</v-btn>
                                    </td>
                                    <td>
                                        <v-btn outlined>
                                            <v-icon>mdi-spotlight</v-icon>
                                        </v-btn>
                                    </td>

                                    <td>
                                        0
                                        <v-btn outlined>
                                            <v-icon>mdi-code-greater-than</v-icon>
                                        </v-btn>
                                    </td>
                                    <td>
                                        <v-icon>mdi-format-horizontal-align-center</v-icon>
                                    </td>
                                    <td>
                                        0
                                        <v-btn outlined>
                                            <v-icon>mdi-code-less-than</v-icon>
                                        </v-btn>
                                    </td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>
                                        ETH
                                        (Ethereum)
                                    </td>
                                    <td>
                                        <v-btn outlined text color="teal accent-4">Deposit</v-btn>
                                        <v-btn outlined text color="teal accent-4">Withdraw</v-btn>
                                    </td>
                                    <td>
                                        <v-btn outlined>
                                            <v-icon>mdi-spotlight</v-icon>
                                        </v-btn>
                                    </td>

                                    <td>
                                        0
                                        <v-btn outlined>
                                            <v-icon>mdi-code-greater-than</v-icon>
                                        </v-btn>
                                    </td>
                                    <td>
                                        <v-icon>mdi-format-horizontal-align-center</v-icon>
                                    </td>
                                    <td>
                                        0
                                        <v-btn outlined>
                                            <v-icon>mdi-code-less-than</v-icon>
                                        </v-btn>
                                    </td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>
                                        USDT
                                        (Tether US)
                                    </td>
                                    <td>
                                        <v-btn outlined text color="teal accent-4">Deposit</v-btn>
                                        <v-btn outlined text color="teal accent-4">Withdraw</v-btn>
                                    </td>
                                    <td>
                                        <v-btn outlined>
                                            <v-icon>mdi-spotlight</v-icon>
                                        </v-btn>
                                    </td>

                                    <td>
                                        0
                                        <v-btn outlined>
                                            <v-icon>mdi-code-greater-than</v-icon>
                                        </v-btn>
                                    </td>
                                    <td>
                                        <v-icon>mdi-format-horizontal-align-center</v-icon>
                                    </td>
                                    <td>
                                        0
                                        <v-btn outlined>
                                            <v-icon>mdi-code-less-than</v-icon>
                                        </v-btn>
                                    </td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>
                                        TUSD
                                        (TrueUSD)
                                    </td>
                                    <td>
                                        <v-btn outlined text color="teal accent-4">Deposit</v-btn>
                                        <v-btn outlined text color="teal accent-4">Withdraw</v-btn>
                                    </td>
                                    <td>
                                        <v-btn outlined>
                                            <v-icon>mdi-spotlight</v-icon>
                                        </v-btn>
                                    </td>

                                    <td>
                                        0
                                        <v-btn outlined>
                                            <v-icon>mdi-code-greater-than</v-icon>
                                        </v-btn>
                                    </td>
                                    <td>
                                        <v-icon>mdi-format-horizontal-align-center</v-icon>
                                    </td>
                                    <td>
                                        0
                                        <v-btn outlined>
                                            <v-icon>mdi-code-less-than</v-icon>
                                        </v-btn>
                                    </td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>
                                        PAX
                                        (Paxos Standard Token)
                                    </td>
                                    <td>
                                        <v-btn outlined text color="teal accent-4">Deposit</v-btn>
                                        <v-btn outlined text color="teal accent-4">Withdraw</v-btn>
                                    </td>
                                    <td>
                                        <v-btn outlined>
                                            <v-icon>mdi-spotlight</v-icon>
                                        </v-btn>
                                    </td>

                                    <td>
                                        0
                                        <v-btn outlined>
                                            <v-icon>mdi-code-greater-than</v-icon>
                                        </v-btn>
                                    </td>
                                    <td>
                                        <v-icon>mdi-format-horizontal-align-center</v-icon>
                                    </td>
                                    <td>
                                        0
                                        <v-btn outlined>
                                            <v-icon>mdi-code-less-than</v-icon>
                                        </v-btn>
                                    </td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>
                                        LTC
                                        (Litecoin)
                                    </td>
                                    <td>
                                        <v-btn outlined text color="teal accent-4">Deposit</v-btn>
                                        <v-btn outlined text color="teal accent-4">Withdraw</v-btn>
                                    </td>
                                    <td>
                                        <v-btn outlined>
                                            <v-icon>mdi-spotlight</v-icon>
                                        </v-btn>
                                    </td>

                                    <td>
                                        0
                                        <v-btn outlined>
                                            <v-icon>mdi-code-greater-than</v-icon>
                                        </v-btn>
                                    </td>
                                    <td>
                                        <v-icon>mdi-format-horizontal-align-center</v-icon>
                                    </td>
                                    <td>
                                        0
                                        <v-btn outlined>
                                            <v-icon>mdi-code-less-than</v-icon>
                                        </v-btn>
                                    </td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>
                                        ETC
                                        (Ethereum Classic)
                                    </td>
                                    <td>
                                        <v-btn outlined text color="teal accent-4">Deposit</v-btn>
                                        <v-btn outlined text color="teal accent-4">Withdraw</v-btn>
                                    </td>
                                    <td>
                                        <v-btn outlined>
                                            <v-icon>mdi-spotlight</v-icon>
                                        </v-btn>
                                    </td>

                                    <td>
                                        0
                                        <v-btn outlined>
                                            <v-icon>mdi-code-greater-than</v-icon>
                                        </v-btn>
                                    </td>
                                    <td>
                                        <v-icon>mdi-format-horizontal-align-center</v-icon>
                                    </td>
                                    <td>
                                        0
                                        <v-btn outlined>
                                            <v-icon>mdi-code-less-than</v-icon>
                                        </v-btn>
                                    </td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>
                                        WAVES
                                        (Waves)
                                    </td>
                                    <td>
                                        <v-btn outlined text color="teal accent-4">Deposit</v-btn>
                                        <v-btn outlined text color="teal accent-4">Withdraw</v-btn>
                                    </td>
                                    <td>
                                        <v-btn outlined>
                                            <v-icon>mdi-spotlight</v-icon>
                                        </v-btn>
                                    </td>

                                    <td>
                                        0
                                        <v-btn outlined>
                                            <v-icon>mdi-code-greater-than</v-icon>
                                        </v-btn>
                                    </td>
                                    <td>
                                        <v-icon>mdi-format-horizontal-align-center</v-icon>
                                    </td>
                                    <td>
                                        0
                                        <v-btn outlined>
                                            <v-icon>mdi-code-less-than</v-icon>
                                        </v-btn>
                                    </td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>
                                        BTG
                                        (Bitcoin Gold)
                                    </td>
                                    <td>
                                        <v-btn outlined text color="teal accent-4">Deposit</v-btn>
                                        <v-btn outlined text color="teal accent-4">Withdraw</v-btn>
                                    </td>
                                    <td>
                                        <v-btn outlined>
                                            <v-icon>mdi-spotlight</v-icon>
                                        </v-btn>
                                    </td>

                                    <td>
                                        0
                                        <v-btn outlined>
                                            <v-icon>mdi-code-greater-than</v-icon>
                                        </v-btn>
                                    </td>
                                    <td>
                                        <v-icon>mdi-format-horizontal-align-center</v-icon>
                                    </td>
                                    <td>
                                        0
                                        <v-btn outlined>
                                            <v-icon>mdi-code-less-than</v-icon>
                                        </v-btn>
                                    </td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>
                                        XLM
                                        (Stellar)
                                    </td>
                                    <td>
                                        <v-btn outlined text color="teal accent-4">Deposit</v-btn>
                                        <v-btn outlined text color="teal accent-4">Withdraw</v-btn>
                                    </td>
                                    <td>
                                        <v-btn outlined>
                                            <v-icon>mdi-spotlight</v-icon>
                                        </v-btn>
                                    </td>

                                    <td>
                                        0
                                        <v-btn outlined>
                                            <v-icon>mdi-code-greater-than</v-icon>
                                        </v-btn>
                                    </td>
                                    <td>
                                        <v-icon>mdi-format-horizontal-align-center</v-icon>
                                    </td>
                                    <td>
                                        0
                                        <v-btn outlined>
                                            <v-icon>mdi-code-less-than</v-icon>
                                        </v-btn>
                                    </td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>
                                        BCH
                                        (Bitcoin Cash (ABC))
                                    </td>
                                    <td>
                                        <v-btn outlined text color="teal accent-4">Deposit</v-btn>
                                        <v-btn outlined text color="teal accent-4">Withdraw</v-btn>
                                    </td>
                                    <td>
                                        <v-btn outlined>
                                            <v-icon>mdi-spotlight</v-icon>
                                        </v-btn>
                                    </td>

                                    <td>
                                        0
                                        <v-btn outlined>
                                            <v-icon>mdi-code-greater-than</v-icon>
                                        </v-btn>
                                    </td>
                                    <td>
                                        <v-icon>mdi-format-horizontal-align-center</v-icon>
                                    </td>
                                    <td>
                                        0
                                        <v-btn outlined>
                                            <v-icon>mdi-code-less-than</v-icon>
                                        </v-btn>
                                    </td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>
                                        DOGE
                                        (Dogecoin)
                                    </td>
                                    <td>
                                        <v-btn outlined text color="teal accent-4">Deposit</v-btn>
                                        <v-btn outlined text color="teal accent-4">Withdraw</v-btn>
                                    </td>
                                    <td>
                                        <v-btn outlined>
                                            <v-icon>mdi-spotlight</v-icon>
                                        </v-btn>
                                    </td>

                                    <td>
                                        0
                                        <v-btn outlined>
                                            <v-icon>mdi-code-greater-than</v-icon>
                                        </v-btn>
                                    </td>
                                    <td>
                                        <v-icon>mdi-format-horizontal-align-center</v-icon>
                                    </td>
                                    <td>
                                        0
                                        <v-btn outlined>
                                            <v-icon>mdi-code-less-than</v-icon>
                                        </v-btn>
                                    </td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>
                                        UAH
                                        (UAH Hryvnia)
                                    </td>
                                    <td>
                                        <v-btn outlined text color="teal accent-4">Deposit</v-btn>
                                        <v-btn outlined text color="teal accent-4">Withdraw</v-btn>
                                    </td>
                                    <td>
                                        <v-btn outlined>
                                            <v-icon>mdi-spotlight</v-icon>
                                        </v-btn>
                                    </td>

                                    <td>
                                        0
                                        <v-btn outlined>
                                            <v-icon>mdi-code-greater-than</v-icon>
                                        </v-btn>
                                    </td>
                                    <td>
                                        <v-icon>mdi-format-horizontal-align-center</v-icon>
                                    </td>
                                    <td>
                                        0
                                        <v-btn outlined>
                                            <v-icon>mdi-code-less-than</v-icon>
                                        </v-btn>
                                    </td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>
                                        ZDR
                                        (Zloadr)
                                    </td>
                                    <td>
                                        <v-btn outlined text color="teal accent-4">Deposit</v-btn>
                                        <v-btn outlined text color="teal accent-4">Withdraw</v-btn>
                                    </td>
                                    <td>
                                        <v-btn outlined>
                                            <v-icon>mdi-spotlight</v-icon>
                                        </v-btn>
                                    </td>

                                    <td>
                                        0
                                        <v-btn outlined>
                                            <v-icon>mdi-code-greater-than</v-icon>
                                        </v-btn>
                                    </td>
                                    <td>
                                        <v-icon>mdi-format-horizontal-align-center</v-icon>
                                    </td>
                                    <td>
                                        0
                                        <v-btn outlined>
                                            <v-icon>mdi-code-less-than</v-icon>
                                        </v-btn>
                                    </td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>
                                        ZB
                                        (ZBToken)
                                    </td>
                                    <td>
                                        <v-btn outlined text color="teal accent-4">Deposit</v-btn>
                                        <v-btn outlined text color="teal accent-4">Withdraw</v-btn>
                                    </td>
                                    <td>
                                        <v-btn outlined>
                                            <v-icon>mdi-spotlight</v-icon>
                                        </v-btn>
                                    </td>

                                    <td>
                                        0
                                        <v-btn outlined>
                                            <v-icon>mdi-code-greater-than</v-icon>
                                        </v-btn>
                                    </td>
                                    <td>
                                        <v-icon>mdi-format-horizontal-align-center</v-icon>
                                    </td>
                                    <td>
                                        0
                                        <v-btn outlined>
                                            <v-icon>mdi-code-less-than</v-icon>
                                        </v-btn>
                                    </td>
                                    <td>0</td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-flex>
            </v-layout>
        </v-card>
    </v-container>
</template>
<script>
export default {
    name: 'Balances'
};
</script>
