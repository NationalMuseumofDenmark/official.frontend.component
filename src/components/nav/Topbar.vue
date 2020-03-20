<template>
    
    <div class="topbar-nav n-style">
        <b-container>
            <b-row>
                <b-col>
                    <div class="d-flex">
                        <n-logo @click="$emit('logoClick')" white :width="80" style="margin-right: 2em;" />
                        <b-nav class="d-flex flex-column flex-md-row">
                            <slot></slot>
                        </b-nav>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>

</template>

<script lang="ts">
import Vue from 'vue';
import { BContainer, BRow, BCol, BNav } from 'bootstrap-vue';
import nLogo from '../Logo.vue';

export default Vue.extend({
    components: {
        'b-container': BContainer,
        'b-row': BRow,
        'b-col': BCol,
        'b-nav': BNav,
        'n-logo': nLogo,
    },
    props: {
    },
});
</script>

<style lang="scss">
@import '../../assets/scss/base/colors.scss';

.topbar-nav.n-style {
    background-color: $color-darkblue;
    color: $color-white;
    padding: 20px 0;

    ul.nav {
        margin-top: auto;
        // margin-bottom: 20px;

        li.nav-item {

            // margin-left: 1.5em;

            font-weight: 400;
            font-size: 1.4em;

            a.nav-link {
                color: $color-white;
                padding: 0;

                &.active {
                    color: $color-lightgrey;
                    font-weight: bold;
                }
            }
        }

        .dropdown-menu {
            border-radius: 0;
            border: 2px solid $color-darkblue;
            font-size: 0.8em;

            .dropdown-item {

                &:hover, &:focus {
                    background-color: $color-white;
                    color: $color-black;
                }

                &.active {
                    background-color: $color-lightgrey;
                    color: $color-white;
                }
            }
        }
    }
}

@media (min-width: 768px) {
    .topbar-nav.n-style {
        ul.nav {
            margin-bottom: 20px;

            li.nav-item {
                margin-right: 1em;
            }
        }
    }
}

</style>

