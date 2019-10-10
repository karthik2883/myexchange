  <template>
    <v-flex md12>
        <v-layout row>
            <v-card class="mx-auto" style=" width:95%;" :elevation="24">
                <v-flex md12>
                    <v-layout row>
                        <v-flex md6 class="pa-5 headline font-weight-thin">Trade History</v-flex>
                    </v-layout>
                </v-flex>
                <v-simple-table height="635px">
                    <thead>
                        <tr>
                            <th class="text-left"></th>
                            <th class="text-left body-1">Time</th>
                            <th class="text-left body-1">Price (USDT)</th>
                            <th class="text-left body-1">Amount (USDT)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="tH in tradeHistory">
                            <td
                                class="subtitle-1"
                                v-if="tH.type =='buy'"
                                style="color:green"
                            >{{ tH.type }}</td>
                            <td class="subtitle-1" v-else style="color:red">{{ tH.type }}</td>

                            <td class="subtitle-1">{{formatTime(tH.time)}}</td>
                            <td class="subtitle-1">{{tH.price}}</td>
                            <td class="subtitle-1">{{tH.amount}}</td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card>
        </v-layout>
    </v-flex>
</template>
<script>
import Http from '../../Common/Schema/HttpSchema';
export default {
    name: 'TradeHistory',
    data() {
        return {
            tradeHistory: null
        };
    },
    created() {
        this.messageReceived();
    },
    methods: {
        messageReceived: function() {
            var currency = this.$route.query.currency;
            var destiny = this.$route.query.dest;
            var Pair = currency.toUpperCase() + destiny.toUpperCase();
            var call_id = 1;
            var method = 'market.deals';
            var params = [Pair, 50, 0];
            var postdata = JSON.stringify({
                id: call_id,
                method: method,
                params: params
            });
            this.axios
                .post(
                    'http://192.168.1.123:9000',
                    {
                        id: call_id,
                        method: method,
                        params: params
                    },
                    {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    }
                )
                .then(
                    resp =>
                        //this.tradeHistory = JSON.parse(resp).result
                        (this.tradeHistory = JSON.parse(
                            JSON.stringify(resp)
                        ).data.result)
                );
        },
        formatDate: function(date) {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;

            return [year, month, day].join('-');
        },
        formatTime: function(time) {
            // Create a new JavaScript Date object based on the timestamp
            // multiplied by 1000 so that the argument is in milliseconds, not seconds.
            var date = new Date(time * 1000);
            // Hours part from the timestamp
            var hours = date.getHours();
            // Minutes part from the timestamp
            var minutes = '0' + date.getMinutes();
            // Seconds part from the timestamp
            var seconds = '0' + date.getSeconds();

            // Will display time in 10:30:23 format
            var formattedTime =
                hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
            return formattedTime;
        }
    }
};
</script>
<style scoped>
.v-card {
    border-radius: 0px !important;
}
</style>