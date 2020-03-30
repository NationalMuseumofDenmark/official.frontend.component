<template>
  <div>
		<n-section>
			<d-examples-logo />
		</n-section>

    <n-section>
      <h2>Buttons</h2>

			<p>Standard buttons.</p>

			<h3>Basic usage</h3>

			<p>
				There are two basic button variants: <code>primary</code> and <code>secondary</code>. The primary
				button color depends on the background section it is placed on.
			</p>

<d-helpers-highlight lang="html">
&lt;n-button variant="primary"&gt;OK&lt;/n-button&gt;
&lt;n-button variant="primary" disabled&gt;OK&lt;/n-button&gt;
&lt;n-button variant="secondary"&gt;Cancel&lt;/n-button&gt;
&lt;n-button variant="secondary" disabled&gt;Cancel&lt;/n-button&gt;
</d-helpers-highlight>

			<h3>Examples</h3>

      <span v-for="button in buttons" :key="button.key" style="margin-right: 1em;">
        <n-button
          :variant="button.variant"
          :disabled="button.disabled"
          @click="buttonPress(button.variant)"
        >{{ button.text }}</n-button>
      </span>

			<h3>Specific colors</h3>

			<p>
				There are also a variant for each of the colors in the theme: 
				<code>darkblue</code>, <code>darkred</code>, <code>rose</code> and <code>lightgrey</code>.
				These can be used when you need more variation. In most cases, however, we recommend
				having one primary button and let all others be secondary.
			</p>

			<h3>Button with icon</h3>

			<p>
				This is a convenient shortcut for creating a button with an icon.
				It is equivalent to nest a <code>font-awesome-icon</code> element inside
				the button, except it wraps it in a span and puts some reasonable padding
				on it.
			</p>

			<pre>
&lt;n-button variant="primary" icon="thumbs-up"&gt;Approve!&lt;/n-button&gt;
</pre>

			<div style="margin-top: 1.5em">
				<n-button variant="primary" icon="thumbs-up">Approve!</n-button>
			</div>

			<h3>Overridden width</h3>

			<p>There is a `width` property to conveniently set the button width manually.</p>

<pre>
&lt;n-button variant="primary" width="300px"&gt;Approve!&lt;/n-button&gt;
</pre>

			<div style="margin-top: 1.5em">
				<n-button variant="primary" width="300px">Approve!</n-button>
			</div>

      <h3>Properties</h3>

			<d-helpers-property-table :items="[
				{
					name: '@click',
					type: '() => void',
					default: 'undefined',
					description: 'Bind the click event of the button.',
				},
				{
					name: 'disabled',
					type: 'bool',
					default: 'false',
					description: 'Display as disabled, which is separate from passive style',
				},
				{
					name: 'icon',
					type: 'string',
					default: 'null',
					description: 'Name of Font Awesome icon to prefix with.'
				},
				{
					name: 'variant',
					type: 'string',
					default: '&quot;secondary&quot;',
					description: 'The button variant - one of &quot;primary&quot;, &quot;secondary&quot;, &quot;passive&quot; or &quot;danger&quot;.',
				},
			]"/>

    </n-section>

		<n-section>
			<d-examples-alert />
		</n-section>

		<n-section>
			<d-examples-wait />
		</n-section>		

		<d-examples-progress />

		<n-section>
			<d-examples-dot-progress />
		</n-section>

  </div>
</template>

<script lang="ts">
import Vue from "vue";


export default Vue.extend({
  data: function() {
    return {
      buttons: [
        { key: 'primary-active', variant: 'primary', text: 'OK' },
				{ key: 'primary-disabled', variant: 'primary', text: 'OK', disabled: true },
        { key: 'secondary-active', variant: 'secondary', text: 'Cancel' },
        { key: 'secondary-disabled', variant: 'secondary', text: 'Cancel', disabled: true },
			],
    };
  },
  methods: {
    buttonPress(type: string) {
      window.alert(`Clicked button: ${type}`);
		},
  }
});
</script>
