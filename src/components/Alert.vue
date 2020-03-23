<template>
    <b-alert class="n-style" v-bind="$attrs">
        <span class="alert-icon" v-if="isSuccess"><font-awesome-icon icon="check" /></span>
        <span class="alert-icon" v-if="isDanger"><font-awesome-icon icon="exclamation" /></span>
        <slot></slot>
    </b-alert>
</template>

<script lang="ts">
import Vue from 'vue'
import { BAlert } from 'bootstrap-vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default Vue.extend({
    components: {
        'b-alert': BAlert,
        'font-awesome-icon': FontAwesomeIcon,
    },
    computed: {
        isSuccess(): boolean {
            return this.$attrs.variant === "success";
        },
        isDanger(): boolean {
            return this.$attrs.variant === "danger";
        },
    }
})
</script>

<style lang="scss">

@import '../assets/scss/base/vars.scss';
@import '../assets/scss/base/colors.scss';

.n-style.alert {
    border-radius: 2px;
    border: none;
    text-align: center;
    font-weight: 700;
    font-size: 1.2em;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);

    button.close {
        text-shadow: none;
    }

    &.alert-success {
        background-color: $color-lightgrey;
        color: $color-white;

        .close:hover {
            color: darken($color-lightgrey, 15%);
        }
    }

    &.alert-danger {
        background-color: $color-darkred;
        color: $color-white;

        .close:hover {
            color: darken($color-darkred, 15%);
        }
    }

    &.alert-info {
        background-color: transparent;
        border: $button-border-width solid black;
        color: $color-black;

        .close {
            color: $color-darkblue;
            opacity: 1;
            text-shadow: none;

            &:hover {
                color: lighten($color-darkblue, 35%);
            }
        }
    }

    .alert-icon {
        margin-right: 0.5em;
    }
}

</style>
