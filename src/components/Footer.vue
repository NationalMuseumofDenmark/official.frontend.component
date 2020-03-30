<template>
    <footer :class="['n-footer', variant]">
        <b-container>
            <slot></slot>
        </b-container>
    </footer>
</template>

<script lang="ts">
import Vue from 'vue';
import { BContainer } from 'bootstrap-vue';

const variants : string[] = ['darkblue', 'lightgrey'];

export default Vue.extend({
    components: {
        'b-container': BContainer,
    },
    props: {
        variant: {
            type: String,
            default: 'darkblue',
            validator: (value: string) => variants.indexOf(value) !== -1,
        }
    }
})
</script>

<style lang="scss" scoped>
@import '../assets/scss/base/colors.scss';

.n-footer {
    font-family: 'Nationale';

    &.darkblue {
        background-color: $color-darkblue;
        color: $color-white;
    }

    &.lightgrey {
        background-color: $color-lightgrey;
        color: $color-white;
    }

    padding: 4em 0;

    h3 {
        position: relative;
        margin-bottom: 1em;

        &::after {
            content: "------";
            color: transparent;
            border-top: 2px solid $color-white;
            position: absolute;
            top: 1.5em;
            left: 0;
        }
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
}

</style>
