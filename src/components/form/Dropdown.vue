<template>
    <b-form-group class="n-style" :id="groupId">
        <slot name="label">
            <label :id="groupId + '-label'" :for="id" class="col-form-label n-style">{{ label }}</label>
        </slot>
        <b-form-select 
            :value="value" 
            @input="$emit('input', $event)"
            :options="optionsBootstrap" size="md"
        />
    </b-form-group>
</template>

<script lang="ts">
import Vue from "vue";
import { BFormGroup } from 'bootstrap-vue';

type IKey = string | number;

interface IOption {
    key: IKey,
    value: string
}

interface IOptionWithSelected extends IOption {
    selected: boolean
}

interface IValueText {
    value: IKey,
    text: string
}

export default Vue.extend({
    components: {
        'b-form-group': BFormGroup,
    },
    props: {
        id: {
            type: String,
            required: true,
        },
        label: String,
        required: Boolean,
        value: {
            type: [String, Number],
            default: null
        },
        options: {
            type: Array as () => IOption[],
            default: () => [],
        }
    },
    computed: {
        optionsBootstrap(): IValueText[] {
            return this.options.map(option => ({ value: option.key, text: option.value  }));
        },
        groupId(): string {
            return `group-${this.id}`;
        },
    },
    methods: {
        updateValue(key: any): void {
            console.log(key);
        }
    }
})

</script>

<style lang="scss" scoped>


</style>