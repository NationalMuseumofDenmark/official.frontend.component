<template>
  <div>

    <n-section>
      <d-examples-form-field />
    </n-section>

    <n-section>
      <h2>Button Select</h2>

      <p>
        The Button Select is a group of toggleable buttons that can act as an alternative to a 
        checkbox group, a radio group and a select box. It will work as a radio / select when
        the <code>multi</code> prop is omitted / false, and as an alternative to checkboxes when
        <code>multi</code> is set / true.
      </p>

      <h3>Basic usage</h3>

<d-helpers-highlight lang="html">
&lt;n-form-button-select
  :options="[
    { key: '1-5', value: '1-5 år' },
    { key: '6-10', value: '6-10 år' },
    { key: '11-15', value: '11-15 år' },
  ]"
  v-model="years"
  class="justify-content-center"
/&gt;
</d-helpers-highlight>

      <p>The <code>justify-content-center</code> will place the button in the center. Omit to left-align.</p>

      <h3>Example</h3>

      <n-slim class="text-center">
        <h4>How many years have you lived there (single)?</h4>

        <n-form-button-select
            :options="[
                { key: '1-5', value: '1-5 år' },
                { key: '6-10', value: '6-10 år' },
                { key: '11-15', value: '11-15 år' },
            ]"
            v-model="years"
            class="justify-content-between"
        />

        <p><strong>Value:</strong> {{ years }}</p>

        <h4>What colors do you like (multi-select)?</h4>

        <n-form-button-select
            :options="[
                { key: 'red', value: 'Red' },
                { key: 'blue', value: 'Blue' },
                { key: 'green', value: 'Green' },
            ]"
            v-model="colors"
            multi
            class="justify-content-between"
        />

        <p><strong>Value:</strong> {{ colors }}</p>

        <h4>Yes or no?</h4>

        <div class="mx-auto w-75">
          <n-form-button-select
            :options="[
              { key: true, value: 'Yes' },
              { key: false, value: 'No' },
            ]"
            v-model="yesno"
            class="justify-content-between"
          />
        </div>
      </n-slim>

      <h3>Properties</h3>

      <d-helpers-property-table :items="[
        {
          name: 'options',
          type: 'IOption[]',
          default: 'null',
          description: 'The array of options to choose from.',
        },
        {
          name: 'value',
          type: 'string | string[]',
          default: 'null',
          description: 'The currently selected key or an array of keys (for multiselect).',
        },
        {
          name: 'multi',
          type: 'bool',
          default: 'false',
          description: 'Whether selection of multiple items is enabled.'
        }
      ]" />

      <h4><code>IOption</code></h4>

      <pre>
{
  key: string,
  value: string
}</pre>

    </n-section>

    <n-section>
      <d-examples-dropdown />
    </n-section>

    <n-section>
      <h2>Rich Text</h2>
      
      <p>
        Display a rich text editor. This a wrapped 
        <a href="https://quilljs.com/">Quill.js</a> editor
        with a set of defaults applied. All those defaults
        can be overridden.
      </p>

      <h3>Basic usage</h3>

<d-helpers-highlight lang="html">
&lt;n-form-rich-text v-model="story" /&gt;
</d-helpers-highlight>

      <h3>Example</h3>

      <n-form-rich-text v-model="story" />

      <h3>Value</h3>

      {{ story | emptyDisplay }}

      <h3>Properties</h3>

      <d-helpers-property-table
        :items="[
          {
            name: 'options',
            type: 'Configuration',
            default: '{ ... }',
            description: 'A Quill.js configuration object.'
          }
        ]"
      />

      <p>
        When you supply your own configuration, it will be
        merged into the default configuration given. 
        See 
        <a href="https://quilljs.com/docs/configuration/">
          Quill.js docs about the configuration object
        </a>
        .
        Please note that the editor will not be reactive to
        any changes in the configuration object, as it is
        only used during mount.
      </p>

    </n-section>

    <n-section>
      <d-examples-file-list />
    </n-section>

    <n-section v-for="theme in ['lightgrey', 'white', 'darkblue', 'rose', 'darkred']" :key="theme" :theme="theme" >
      <n-slim>
        <n-form-title title="Complete example" :subtitle="`A ${theme} form with all input types`"/>

        <b-form>

          <section class="form-section">

            <n-form-field :id="`navn-${theme}`" label="Navn" type="text" v-model="name"/>
            
            <n-form-field :id="`password-${theme}`" label="Hemmeligt" type="password" v-model="password"/>

            <n-form-field :id="`some-errors-${theme}`" label="Felt med fejl" type="text" v-model="alwayserror">
              <div>En fejl her.</div>
            </n-form-field>

            <n-form-dropdown :id="`gender-${theme}`" v-model="gender" label="Køn" :options="[
              { key: 'm', value: 'Mand' },
              { key: 'f', value: 'Kvinde' },
              { key: 'a', value: 'Andet' },
              { key: 'i', value: 'Ikke oplyst' }
            ]" />

            <n-form-field 
              :id="`vej-${theme}`" 
              label="Vej og vejnummer" 
              type="text" 
              placeholder="Vej, vejnummer, etage og dør" 
              description="Vej, vejnummer, etage og dør" 
            />

            <b-row>
              <b-col md="4">
                <n-form-field :id="`postnummer-${theme}`" label="Postnummer" type="number"/>
              </b-col>
              <b-col md="8">
                <n-form-field :id="`by-${theme}`" label="By" type="text"/>
              </b-col>
            </b-row>

          </section>
         
          <section class="form-section">

            <label>Antal år i foreningen</label>

            <n-form-button-select 
              :options="[
                { key: 'a', value: '1 year' },
                { key: 'b', value: '2 years' },
                { key: 'c', value: '3 years' },
              ]"
              v-model="years"
              class="justify-content-between"
            />

          </section>

          <section class="form-section">
            <n-form-field :id="`longtext-${theme}`" label="Historie" type="textarea" :rows="8" v-model="long" :description="noCharacters" />
  
            <n-form-checkbox
              v-model="checked"
            >
              Jeg accepterer brugen af min data.
            </n-form-checkbox>

            <n-form-checkbox
              v-model="checked"
              class="mt-3"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque est excepturi reprehenderit eius eum, facere culpa! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, voluptate. Itaque praesentium dolores error sunt, earum harum dignissimos quis vitae hic, aspernatur non iure atque sapiente? Rerum accusamus ea vel!
            </n-form-checkbox>

            <div class="d-flex justify-content-end mt-3">
              <n-button variant="primary">Submit</n-button>
            </div>
          </section>
          

        </b-form>
      </n-slim>
    </n-section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { required, minLength } from 'vuelidate/lib/validators';

export default Vue.extend({
  data: () => ({
    name: '',
    witherror: '',
    long: '',
    years: null,
    colors: null,
    story: '',
    password: '',
    checked: true,
    yesno: null,
    alwayserror: '',
    gender: '',
  }),
  computed: {
    noCharacters(): string {
      return this.long.length + ' tegn.';
    }
  },
  filters: {
    emptyDisplay(value: string | null): string {
      if (value == null || value === '') return "[empty]";
      return value;
    }
  },
  validations: {
    witherror: {
      required,
      minLength: minLength(3)
    }
  },
});
</script>
