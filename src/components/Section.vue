<template>
    <section class="base n-style" v-bind:class="[theme, { vfill: verticalFill, padded: !noPad }]">
        <template v-if="noGrid">
            <slot></slot>
        </template>
        <template v-else>
            <b-container :fluid="fluid">
                <b-row>
                    <b-col>
                        <slot></slot>
                    </b-col>
                </b-row>
            </b-container>
        </template>
        
    </section>
</template>

<script lang="ts">
import Vue from 'vue';

import { BContainer, BRow, BCol } from 'bootstrap-vue';

export default Vue.extend({
    components: {
        'b-container': BContainer,
        'b-row': BRow,
        'b-col': BCol,
    },
    props: {
        theme: {
            type: String,
            default: 'white',
        },
        verticalFill: Boolean,
        noGrid: Boolean,
        slim: Boolean,
        fluid: Boolean,
        noPad: Boolean,
    },
});
</script>

<style lang="scss" scoped>

@import '../assets/scss/base/colors.scss';

.base {
    padding: 0;

    pre {
        background-color: rgba($color-white, 0.1);
        //padding: 0.5em 0.5em;
        margin: 0;
        color: $color-orange;
    }
}

.white + .white .container::before {
    content: "--------------";
    color: transparent;
    border-top: 4px solid $color-lightgrey;
    position: relative;
    top: -20px;
}

.darkblue { 
    background-color: $color-darkblue; 
    color: $color-white; 

    pre {
        color: $color-white;
    }
}

.rose { 
    background-color: $color-rose; 
    color: $color-white; 

    pre {
        color: $color-white;
    }
}

.darkred { 
    background-color: $color-darkred; 
    color: $color-white;

    pre {
        color: $color-white;
    }
}

.lightgrey {
    background-color: $color-lightgrey;
    color: $color-white;
    
    pre {
        color: $color-white;
    };
}

.vfill { 
    min-height: 100vh; 
}

.padded {
    padding: 5em 0;
}

</style>
