<template>
    <div :class="['step-progress-container', variant]">
        <div class="step-progress-step" v-for="step in steps" :key="step.key" :class="{ active: isActive(step) }">
            <div class="step-progress-content" :class="{ hand: clickable }" @click="clickStep(step)">
                <slot name="text" :step="step">
                    <span>{{ step.title }}</span>
                </slot>
            </div>
            <div class="step-progress-divider align-self-center" v-if="showTail(step)">›</div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

const variants : string[] = ['standard', 'light-step', 'blue-ribbon'];

interface IStep {
    key: string | number,
    title: string,
}

function getKey(step: IStep | string) {
    if (typeof step == 'string') return step as string;
    return step.key;
}

export default Vue.extend({
    props: {
        active: [Object, String, Number],
        steps: {
            type: Array as () => IStep[],
            default: [],
        },
        variant: {
            type: String,
            default: 'standard',
            validator: (value: string) => variants.indexOf(value) !== -1,
        },
        clickable: {
            type: Boolean,
            default: false,
        }
    },

    methods: {
        isActive(step: IStep | string): boolean {
            return getKey(step) === getKey(this.getActive());
        },
        showTail(step: IStep | string): boolean {
            const last = this.steps[this.steps.length - 1];
            return getKey(last) !== getKey(step);
        },
        getActive(): IStep | string {
            if (this.active == null) {
                return this.steps[0];
            }

            return this.active;
        },
        clickStep(step: IStep): void {
            if (!this.clickable) return;
            this.$emit('click', step);
        }
    },

    computed: {
        classObject(): any {
            const result: any = {};
            result[this.variant] = true;
            result['hand'] = this.clickable;
            return result;
        }
    }
});
</script>

<style lang="scss" scoped>

@import '../../assets/scss/base/vars.scss';
@import '../../assets/scss/base/colors.scss';

$passive: $color-beige;
$active: $color-orange;

@mixin back-and-border($color) {
    background-color: $color;
    border-color: $color;
}

.step-progress-container {
    display: flex;
    justify-content: center;

    .step-progress-step {
        display: flex;
        
        .step-progress-content {
            flex: 1;
            min-width: 12em;
            background-color: transparent;
            border: $button-border-width solid $color-white;
            padding: 0.7em;
            text-align: center;
            font-weight: 700;
            color: $color-white;

            &.hand {
                cursor: pointer;
            }
        }

        &.active .step-progress-content {
            background-color: $active;
            border-color: $active;
        }

        .step-progress-divider {
            margin: 0 0.5em;
            font-weight: normal;
            font-size: 30px;
        }
    }

    // Variant light-step
    &.light-step {
        .step-progress-divider {
            font-size: 20px;
        }

        .step-progress-step.active .step-progress-content {
            background-color: transparent;
            border-bottom: 2px solid $color-rose;
        }

        .step-progress-content {
            font-size: 0.9em;
            border: none;
            padding: 0.7em;
            min-width: 0;
        }
    }

    // Variant blue-ribbon
    &.blue-ribbon {

        background-color: $color-lightgrey;

        .step-progress-divider {
            font-size: 20px;
            position: relative;
            top: -2px;
        }

        .step-progress-step.active .step-progress-content {
            background-color: transparent;
            color: $color-white;
            border-bottom: 5px solid $color-white;
        }

        .step-progress-content {
            font-size: 0.9em;
            border: none;
            padding: 1.1em 0.7em 0.8em 0.7em;
            min-width: 0;
        }
    }
}

section:not(.full-width) .step-progress-container.blue-ribbon {
    margin-left: -15px;
    margin-right: -15px;
}

section.white .step-progress-step {

    .step-progress-content {
        border-color: $color-darkblue;
        color: $color-darkblue;
    }

    &.active .step-progress-container.standard .step-progress-content {
        @include back-and-border($color-darkblue);
        color: $color-white;
    }
}

section.darkblue .step-progress-container.standard .step-progress-step.active .step-progress-content {
    @include back-and-border($color-lightgrey);
}

section.darkred .step-progress-container.standard .step-progress-step.active .step-progress-content {
    @include back-and-border($color-rose);
}

section.lightgrey .step-progress-container.standard .step-progress-step.active .step-progress-content {
    @include back-and-border($color-darkblue);
}

section.rose .step-progress-container.standard .step-progress-step.active .step-progress-content {
    @include back-and-border($color-darkblue);
}


</style>
