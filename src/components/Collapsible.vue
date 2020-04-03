<template>
    <div :class="['collapsible', { expanded: isExpandedState, collapsed: !isExpandedState }]">
        <div class="collapsible-heading hand" @click="clickHandler">{{ title }} 
            <span v-if="isExpandedState">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" class="svg-inline svg-inline--fa fa-chevron-up fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>
            </span>
            <span v-else>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
            </span>
        </div>
        <div class="collapsible-content">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: {
        title: {
            type: String,
            required: true
        },
        expanded: {
            type: Boolean,
            required: false,
            default: undefined
        },
        startExpanded: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    data() {
        return {
            internalExpanded: this.startExpanded
        }
    },
    computed: {
        isExpandedState(): boolean {
            return this.isControlled ? this.expanded : this.internalExpanded;
        },
        isControlled(): Boolean {
            return this.expanded !== undefined;
        },
    },
    methods: {
        clickHandler(): void {

            if (!this.isControlled) {
                this.internalExpanded = !this.internalExpanded;
            }

            this.$emit('click');
        }
    }
});

</script>

<style lang="scss" scoped>

@import '../assets/scss/base/colors.scss';

$padding: 1.2em;

.collapsible {
    border: 2px solid #eee;

    .hand {
        cursor: pointer;
    }

    .collapsible-heading {
        padding: $padding;
        font-weight: bold;
        font-size: 1.1em;
        color: $color-lightgrey;

        .svg-inline {
            transform: scale(0.9);
        }
    }

    .collapsible-content {
        padding: 0 $padding 0 $padding;
    }

    &.expanded {
        .collapsible-content {
            display: block;
        }
    }

    &.collapsed {
        .collapsible-content {
            display: none;
        }
    }
}

</style>