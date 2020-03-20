<template>
  <b-form-group class="n-style" :id="groupId" :description="description">
    <slot name="label">
        <label :id="groupId + '-label'" :for="id" class="col-form-label n-style">{{ label }}</label>
    </slot>
    <b-form-textarea 
        v-if="type === 'textarea'"
        :id="id"
        :placeholder="placeholder"
        :value="value"
        :rows="rows"
        :state="$slots.default ? false : null"
        class="n-style"
        @input="$emit('input', $event)"
    />
    <b-form-input 
        v-else
        :id="id"
        :type="type"
        :required="required"
        :placeholder="placeholder"
        :state="$slots.default ? false : null"
        :value="value"
        class="n-style"
        @input="$emit('input', $event)"
    ></b-form-input>

    <b-form-invalid-feedback :id="errorId">
      <slot></slot>
    </b-form-invalid-feedback>

  </b-form-group>
</template>

<script lang="ts">
import Vue from 'vue';
import { BFormGroup, BFormTextarea, BFormInput, BFormInvalidFeedback } from 'bootstrap-vue';

const allowedTypes = [
    'text',
    'email',
    'number',
    'textarea',
    'password',
    'url'
];

export interface IError {
    active: boolean,
    message: string,
}

export default Vue.extend({
    components: {
        'b-form-group': BFormGroup,
        'b-form-textarea': BFormTextarea,
        'b-form-input': BFormInput,
        'b-form-invalid-feedback': BFormInvalidFeedback,
    },
    props: {
        id: {
            type: String,
            required: true,
        },
        label: String,
        description: String,
        required: Boolean,
        placeholder: String,
        rows: Number,
        type: {
            type: String,
            validator: (value: string) => allowedTypes.indexOf(value) !== -1,
            default: 'text'
        },
        value: [String, Number],
    },
    computed: {
        groupId(): string {
            return `group-${this.id}`;
        },
        errorId(): string {
            return `error-${this.id}`;
        },
    },
});
</script>

