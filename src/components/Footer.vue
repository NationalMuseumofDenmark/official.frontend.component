<template>
    <footer class="standard">
        <b-container>
            <slot></slot>
        </b-container>
    </footer>
</template>

<script lang="ts">
import Vue from 'vue';
import { BContainer } from 'bootstrap-vue';

export default Vue.extend({
    components: {
        'b-container': BContainer,
    }
})
</script>


<style lang="scss" scoped>
@import '../assets/scss/base/colors.scss';


.standard {
    font-family: 'Nationale';

    background-color: $color-darkblue;
    color: $color-white;

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
