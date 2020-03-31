<template>
    <div>
        <h2>Modal</h2>

        <p>
            A modal component. Controlled by a value prop that can be bound using v-model.
            By default dismissible by clicking the background overlay or pressing escape, but
            this behaviour can be suppressed.
        </p>

        <h3>Basic Usage</h3>

<d-helpers-highlight lang="html">

&lt;n-button variant="primary" @click="show = true"&gt;Show modal&lt;/n-button&gt;

&lt;n-modal 
    id="my-modal"
    v-model="show"
&gt;
  &lt;h2&gt;Header&lt;/h2&gt;
  &lt;p&gt;Lorem ipsum dolor sit...&lt;/p&gt;
&lt;/n-modal&gt;

</d-helpers-highlight>    

        <h3>Example</h3>

        <n-button variant="primary" @click="show = true">Click to show</n-button>

        <p class="mt-3">Current show state: <code>{{ show }}</code></p>

        <n-modal 
            id="my-modal"
            v-model="show"
        >
            <h2>Header</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga consequatur nam quasi cumque, pariatur exercitationem, distinctio, autem error harum tempore porro accusantium illum qui earum ratione magni blanditiis reprehenderit sapiente?</p>
        </n-modal>

        <h3>Properties</h3>

        <d-helpers-property-table :items="[
            {
                name: 'value',
                type: 'Boolean',
                default: 'undefined',
                description: 'Required. Binding to v-model is recommended. Whether the the modal is currently visible.',
            },
            {
                name: '@input',
                type: '(value: Boolean) => void',
                default: '',
                description: 'Required. Binding to v-model is recommended. Handler for a change event for the value.',
            },
            {
                name: 'no-easy-escape',
                type: 'Boolean',
                default: 'false',
                description: 'Disables closing the modal by clicking the backdrop or pressing the Escape key.',
            },
        ]"/>

    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            show: false
        };
    }
});
</script>