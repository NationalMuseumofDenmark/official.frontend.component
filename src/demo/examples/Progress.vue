<template>
    <div>
    
        <n-section>
            <h2>StepProgress</h2>

            <p>
                A component of a wizard or step flow, this is a visual aid showing all steps and
                the current step being emphasized.
            </p>

            <h3>Basic usage</h3>

<d-helpers-highlight lang="html">
&lt;n-step-progress
  :active="two"
  :steps="[{
    key: 'one',
    title: 'First step',
    icon: 'info-circle',
  },
  {
    key: 'two',
    title: 'Second step',
    icon: 'comment',
  },
  {
    key: 'three',
    title: 'Third step',
    icon: 'hand-point-right',
  }]"
  clickable
  @click="clickHandler"
/&gt;
</d-helpers-highlight>

            <h3>Example</h3>

            <n-step-progress 
                :steps="steps" 
                :active="activeStep" 
                clickable 
                @click="stepClick" 
            />

            <n-step-progress 
                :steps="steps" 
                :active="activeStep" 
                variant="light-step"
                class="mt-5"
                clickable
                @click="stepClick"
            >

                <span slot="text" slot-scope="{ step }">
                    <span>Tests {{ step.key }}</span>
                </span>

            </n-step-progress>

        </n-section>

        <n-section fluid>

            <n-step-progress
                :steps="steps"
                :active="activeStep"
                variant="blue-ribbon"
                clickable
                @click="stepClick"
            />

        </n-section>

        <n-section suppress-divider>

            <h3>Properties</h3>

            <d-helpers-property-table :items="[
                {
                    name: '@click',
                    type: '(step: IStep) => void',
                    default: 'null',
                    description: 'Event handler for the click event on the progress.',
                },
                {
                    name: 'active',
                    type: 'IStep | string',
                    default: 'null',
                    description: 'The active step, as a reference to the actual object or the key as a string.',
                },
                {
                    name: 'clickable',
                    type: 'boolean',
                    default: 'false',
                    description: 'Activated as clickable, which will activate the event handler and apply a hand cursor.',
                },
                {
                    name: 'variant',
                    type: 'string',
                    default: 'standard',
                    description: '&quot;standard&quot;, &quot;light-step&quot; or &quot;blue-ribbon&quot; showed in examples above. Note that &quot;blue-ribbon&quot; should be placed in a fluid section to display full width.'
                },
                {
                    name: 'steps',
                    type: 'IStep[]',
                    default: '[]',
                    description: 'An array describing the step keys and titles.'
                },
            ]"/>

            <h3><code>IStep</code> interface</h3>

            <p>The key of <code>IStep</code> should be unique.</p>

<d-helpers-highlight lang="typescript">
{
  key: string,
  title: string,
}
</d-helpers-highlight>

            <h3>Slots</h3>

            <d-helpers-slot-table
                :items="[
                    {
                        name: 'text',
                        scope: 'step: IStep',
                        description: 'Provide a template for the inner rendering of the item text. Default is the title in a <span>.',
                    }
                ]"
            />
        </n-section>
    </div>
</template>

<script lang="ts">
import Vue from "vue";


export default Vue.extend({
  data: function() {
    return {
        activeStep: 'one',
        steps: [
            {
                key: 'one',
                title: 'First step',
                icon: 'info-circle',
            },
            {
                key: 'two',
                title: 'Second step',
                icon: 'comment',
            },
            {
                key: 'three',
                title: 'Third step',
                icon: 'hand-point-right',
            },
        ],
    };
  },
  methods: {
    buttonPress(type: string) {
      window.alert(`Clicked button: ${type}`);
    },
    stepClick(step: any): void {
        window.alert(`Clicked step ${step.key}.`);
    }
  }
});
</script>