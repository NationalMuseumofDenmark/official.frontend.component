<template>
    <div>
        <h2>Traditional select</h2>

        <p>
            For that old-fashioned, no BS select experience, we introduce 
            <em>Traditional Select ™</em> to be included on your pages.
            Easy, comfortable and familiar. It does not support multiselect,
            but its API is similar to the button select in all other aspects.
        </p>

        <h3>Basic Usage</h3>

<d-helpers-highlight lang="html">
&lt;n-form-dropdown 
  :options="[
    { key: 'first', value: 'First selection' },
    { key: 'second', value: 'Second selection' },
    { key: 'third', value: 'Third selection' }
  ]"
  v-model="selected"
/&gt;
</d-helpers-highlight>

        <h3>Example</h3>

        <n-form-dropdown 
            id="my-dropdown-example"
            label="Select this"
            v-model="selected"
            :options="[
                { key: 'first', value: 'First selection' },
                { key: 'second', value: 'Second selection' },
                { key: 'third', value: 'Third selection' }
            ]"
        />

        <p>Selected value: {{ selected }} </p>

        <h3>Properties</h3>

        <d-helpers-property-table :items="[
            {
                name: '@input',
                type: '(value: any) => void',
                default: 'null',
                description: 'The handler called with the new value on update. Alternatively, use v-model.',
            },
            {
                name: 'value',
                type: 'string | number',
                default: 'null',
                description: 'The current value of the select. Alternatively, use v-model.',
            },
            {
                name: 'options',
                type: 'IOption[]',
                default: '[]',
                description: 'The array of available options.'
            },
            {
                name: 'label',
                type: 'string',
                default: 'null',
                description: 'The label to display above the select.'
            }
        ]" />

        <h3><code>IOption</code></h3>

<d-helpers-highlight lang="typescript">
{
    key: string | number;
    value: string
}
</d-helpers-highlight>        

    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            selected: 'second'
        };
    }
});

</script>