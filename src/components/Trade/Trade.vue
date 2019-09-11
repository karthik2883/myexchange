<template>
    <div id="myApplication">
        <TradingGrid />
    </div>
</template>

<script>
import TradingGrid from '../Trade/TradingSubComponents/TradingGrid';

export default {
    name: 'Trading',
    components: {
        TradingGrid
    },
    data() {
        return {
            appTitle: 'Trading'
        };
    }
};
</script>
