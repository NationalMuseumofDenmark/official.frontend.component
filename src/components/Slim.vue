<template>
    <b-row>
        <b-col cols="12" offset-md="2" md="8" offset-lg="3" lg="6">
            <slot></slot>
        </b-col>
    </b-row>
</template>

<script lang="ts">
import Vue from 'vue';

import { BRow, BCol } from 'bootstrap-vue';

export default Vue.extend({
    components: {
        'b-row': BRow,
        'b-col': BCol,
    }
})
</script>
