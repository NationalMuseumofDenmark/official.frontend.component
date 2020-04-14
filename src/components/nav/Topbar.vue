<template>
    
    <div :class="['topbar-nav', 'n-style', this.variant]">
        <b-container>
            <b-row>
                <b-col>
                    <div class="logo-and-nav">
                        <n-logo 
                            class="display-tablet-up"
                            @click="$emit('logoClick')" 
                            :white="logoWhiteByVariant" 
                            :width="80" 
                            style="margin-right: 2em;" 
                        />
                        <div class="hamburger" @click="mobileExpanded = !mobileExpanded"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg></div>
                        <n-logo 
                            class="display-mobile-only"
                            @click="$emit('logoClick')" 
                            :white="logoWhiteByVariant" 
                            :width="40" 
                        />
                        <b-nav 
                            :class="['d-flex', { 'mobile-expanded': mobileExpanded, 'mobile-collapsed': !mobileExpanded }]"
                            @click="mobileExpanded = false"
                        >
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
    data() {
        return {
            mobileExpanded: false
        };
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

@mixin mobile-only {
    @media (max-width: 767px) {
        @content;
    }
}

@mixin tablet-up {
    @media (min-width: 768px) {
        @content;
    }
}

.display-tablet-up {
    @include mobile-only() {
        display: none;
    }
}

.display-mobile-only {
    @include tablet-up() {
        display: none;
    }
}

.topbar-nav.n-style {

    .hamburger {
        @include tablet-up() {
            display: none;
        }

        svg {
            width: 25px;
            float: right;
            margin-top: 1em;
        }
    }

    &.darkblue {

        background-color: $color-darkblue;
        color: $color-white;
        padding: 20px 0;

        .logo-and-nav {
    
            ul.nav {
                margin-top: auto;
    
                li.nav-item {
    
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

    }

    &.white {

        @include mobile-only() {
            .mobile-expanded {
                transition-property: all;
                transition-duration: .3s;
                transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
            }

            .mobile-collapsed {
                max-height: 0;
                overflow-y: hidden;
                opacity: 0;
                transform: scale(0.0);
            }

            .mobile-expanded {
                max-height: 10000px;
                opacity: 1;
                transform: scale(1);
            }
        }

        color: $color-black;

        .logo-and-nav {
            
            @include tablet-up {
                display: flex;
                margin: 1em 0 1em 0;
            }
    
            @include mobile-only {

                .logo {
                    width: 70px;
                    margin: 0.5em 0 0.5em 0;
                }
            }
    
            ul.nav {
    
                @include mobile-only() {
                    margin-top: 1em;
                    flex: 100%;
                }
    
                width: 100%;
                margin-top: auto;
                margin-bottom: 30px;
    
                li.nav-item {
    
                    @include mobile-only {
                        flex: 100%;
                    }
    
                    @include tablet-up() {
                        padding: 2px 1rem 0 1rem;
                        height: 1.5em;
                        border-left: 2px solid $color-black;
                    }
    
                    a.nav-link {
                        color: $color-black;
                        font-weight: bold;

                        @include tablet-up() {
                            padding: 0 0 0.4rem 0;
                        }

                        @include mobile-only() {
                            //padding: 0em 0;
                        }
    
                        &.active, &.router-link-active {
                            @include tablet-up() {
                                border-bottom: 4px solid $color-lightgrey;
                            }

                            @include mobile-only() {
                                background-color: $color-lightgrey;
                                color: $color-white;
                            }
                        }
                    }
    
                    @include tablet-up() {
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
        
                                    .button-inner {
                                        padding-bottom: 9px;
                                        border-bottom: 4px solid white;
                                    }
                                }
        
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
}

</style>

