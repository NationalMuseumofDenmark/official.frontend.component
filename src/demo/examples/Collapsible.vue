<template>
    <div>
        <h2>Collapsible</h2>

        <p>The collapsible is toggleable text in a box.</p>

        <p>
            It can be <strong>controlled</strong> or <strong>uncontrolled</strong>.
        </p>

        <p>
            When controlled, the expanded/collapsed state is managed by the user
            of the component through a property, and click events are notified.
        </p>

        <p>
            When uncontrolled, the <code>startExpanded</code> prop can optionally
            be used to set the initial state, but the state is then managed and 
            changed by the component, internally.
        </p>

        <h3>Basic usage</h3>

<d-helpers-highlight lang="html">
&lt;n-collapsible title="My title" :startExpanded="false"&gt;
    &lt;p&gt;The &lt;strong&gt;content&lt;/strong&gt; inside this box is &lt;em&gt;just&lt;/em&gt; HTML.&lt;/p&gt;
    &lt;p&gt;You can include anything &lt;strong&gt;you&lt;/strong&gt; like.&lt;/p&gt;
&lt;/n-collapsible&gt;
</d-helpers-highlight>

        <h3>Example</h3>

        <n-collapsible title="My title" :startExpanded="false">
            <p>The <strong>content</strong> inside this box is <em>just</em> HTML.</p>
            <p>You can include anything <strong>you</strong> like.</p>
        </n-collapsible>

        <h3>Properties</h3>

        <d-helpers-property-table
            :items="[
                {
                    name: '@click',
                    type: '() => void',
                    default: 'null',
                    description: 'A click handler triggered when the title is clicked. Mostly usable in conjunction with &quot;expanded&quot; property.',
                },
                {
                    name: 'title',
                    type: 'string',
                    default: 'null',
                    description: 'Required. The title that is always displayed and functions as the toggle.'
                },
                {
                    name: 'expanded',
                    type: 'boolean',
                    default: 'undefined',
                    description: 'When set, the expanded state is controlled by this property.'
                },
                {
                    name: 'startExpanded',
                    type: 'boolean',
                    default: 'undefined',
                    description: 'When expanded is NOT set, the state is internally managed. This property will then determine the initial state. When expanded IS set, this property does nothing.'
                }
            ]"
        />

        <h3>Slots</h3>

        <d-helpers-slot-table
            :items="[
                {
                    name: '(default)',
                    scope: '(none)',
                    description: 'The expandable / collapsible content.',
                }
            ]"
        />
    </div>
</template>