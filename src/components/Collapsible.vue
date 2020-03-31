<template>
    <div :class="['collapsible', { expanded: isExpandedState, collapsed: !isExpandedState }]">
        <div class="collapsible-heading hand" @click="clickHandler">{{ title }} <font-awesome-icon :icon="icon" class="icon" /></div>
        <div class="collapsible-content">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default Vue.extend({
    components: {
        'font-awesome-icon': FontAwesomeIcon,
    },
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
        icon(): string {
            return this.isExpandedState ? 'chevron-up' : 'chevron-down';
        }
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

        .icon {
            position: relative;
            left: 7px;
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