<template>
    
    <div :class="['topbar-nav', 'n-style', this.variant]">
        <b-container>
            <b-row>
                <b-col>
                    <div class="d-flex">
                        <n-logo @click="$emit('logoClick')" :white="logoWhiteByVariant" :width="80" style="margin-right: 2em;" />
                        <b-nav class="d-flex">
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

const variants : string[] = ['darkblue', 'white'];

export default Vue.extend({
    components: {
        'b-container': BContainer,
        'b-row': BRow,
        'b-col': BCol,
        'b-nav': BNav,
        'n-logo': nLogo,
    },
    props: {
        variant: {
            type: String,
            default: 'white',
            validator: val => variants.indexOf(val) !== -1
        }
    },
    computed: {
        logoWhiteByVariant(): boolean {
            return this.variant == "darkblue" ? true : false;
        }
    }
});
</script>

<style lang="scss">
@import '../../assets/scss/base/colors.scss';

.topbar-nav.n-style {

    &.darkblue {
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

        @media (min-width: 768px) {
            ul.nav {
                margin-bottom: 20px;

                li.nav-item {
                    margin-right: 1em;
                }
            }
        }
    }

    &.white {
        color: $color-black;
        margin: 1em 0 1em 0;

        ul.nav {
            width: 100%;
            margin-top: auto;
            margin-bottom: 30px;

            li.nav-item {
                padding: 2px 1rem 0 1rem;
                height: 1.5em;
                border-left: 2px solid $color-black;

                a.nav-link {
                    color: $color-black;
                    font-weight: bold;
                    padding: 0 0 0.5rem 0;

                    &.active, &.router-link-active {
                        border-bottom: 4px solid $color-lightgrey;
                    }
                }

                &.button {
                    a.nav-link {
                        border: 2px solid $color-lightgrey;
                        color: $color-lightgrey;
                        padding: 0.5rem 1rem;
                        margin-top: -10px;
                        //margin-left: 10px;

                        &.active, &.router-link-active {
                            background-color: $color-lightgrey;
                            color: $color-white;
                        }

                    }
                }

                &.right {
                    margin-left: auto;
                    border-left: none;
                }

                &:last-of-type {
                    padding-right: 0;
                }

                &.bright {
                    a.nav-link {
                        color: $color-lightgrey;
                    }
                }
            }
        }
    }
}



</style>

