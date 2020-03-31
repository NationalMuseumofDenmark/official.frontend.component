<template>
    <b-modal 
        :id="id" 
        v-model="computedShow"
        hide-header
        hide-footer
        :no-close-on-backdrop="noEasyEscape"
        :no-close-on-esc="noEasyEscape"
        :size="this.$attrs.size || 'lg'"
    >
        <slot></slot>
    </b-modal>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    inheritAttrs: true,
    props: {
        id: {
            type: String,
            required: true,
        },
        value: {
            type: Boolean,
            required: true,
        },
        noEasyEscape: {
            type: Boolean,
            default: false,
        }
    },
    computed: {
        computedShow: {
            get() {
                return (this as any).value;
            },
            set(nValue) {
                (this as any).$emit('input', nValue);
            }
        }
    }
});
</script>

<style lang="scss">

@import '../assets/scss/base/colors.scss';

.modal-dialog {
    .modal-content {
        border-radius: 0;
        border: none;

        .modal-body {
            padding: 2.5em 3.5em;
        }
    }
}

</style>