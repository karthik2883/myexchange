 <template>
    <div class="splashscreen-wrapper">
        <transition @leave="leaveEl" v-on:after-appear="leaveEl" appear>
            <div class="logo-wrapper"></div>
        </transition>
        <div class="logo-letters-group">
            <span
                class="logo-letter"
                v-for="(item, index) in logoName"
                :key="index"
                v-if="item !== 'img'"
            >{{item}}</span>
            <span class="logo-letter" v-else>
                <v-icon x-large>mdi-nuke</v-icon>
            </span>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
export default {
    name: 'SplashScreen',
    data() {
        return {
            show: true,
            logoName: [
                'W',
                'E',
                'L',
                'C',
                'O',
                'M',
                'E',
                '  ',

                'T',
                'O',
                '  ',

                'img',
                '  ',
                'B',
                'R',
                'E',
                'X',
                'I',
                'L',
                'Y'
            ]
        };
    },
    methods: {
        leaveEl(el) {
            this.$router.push('/home');
        }
    }
};
</script>

<style lang="scss" scoped>
@import './Style/splashscreen.scss';
</style>