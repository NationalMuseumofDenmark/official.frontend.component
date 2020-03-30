<template>
    <b-button class="n-style" :variant="variant" :disabled="disabled" :style="styleObject" @click="$emit('click')">
        <span v-if="isIconSet" style="margin-right: 0.4em;">
            <font-awesome-icon :icon="icon" />
        </span>
        <slot></slot>
    </b-button>
</template>

<script lang="ts">
import Vue from 'vue';
import { BButton } from 'bootstrap-vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const variants : string[] = ['primary', 'secondary', 'darkred', 'lightgrey', 'rose'];

export default Vue.extend({
    components: {
        'b-button': BButton,
        'font-awesome-icon': FontAwesomeIcon,
    },
    props: {
        icon: String,
        disabled: Boolean,
        variant: {
            type: String,
            default: 'secondary',
            validator: (value: string) => variants.indexOf(value) !== -1,
        },
        width: {
            type: String,
            default: null,
        }
    },
    computed: {
        isIconSet(): boolean {
            return this.icon != null && this.icon !== '';
        },
        styleObject(): any {
            const result: any = {};
            
            if (this.width) {
                result.width = this.width;
            }

            return result;
        }
    }
});
</script>
