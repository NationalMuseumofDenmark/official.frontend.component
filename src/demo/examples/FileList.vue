<template>
    <div>
        <h2>FileList</h2>

        <p>
            Displays a list of files, sorted by extension. Exposes handlers for open and/or delete.
        </p>

        <h3>Usage</h3>

<d-helpers-highlight lang="html">
&lt;n-file-list 
    :files="[
        { file: { guid: 'id1', fileName: 'thesis.docx' }, key: 'id1', filename: 'thesis.docx' },
        { file: { guid: 'id2', fileName: 'video.mp4' }, key: 'id2', filename: 'video.mp4' },
        { file: { guid: 'id3', fileName: 'music.mp3' }, key: 'id3', filename: 'music.mp3' },
        { file: { guid: 'id4', fileName: 'recording.mp4'}, key: 'id4', filename: 'recording.mp4' },
    ]"
    @open="openHandler"
    @delete="deleteHandler"
/&gt;
</d-helpers-highlight>

        <h3>Example</h3>

        <n-file-list 
            auto-collapse
            :files="[
                { file: { guid: 'id1', fileName: 'thesis.docx' }, key: 'id1', filename: 'thesis.docx' },
                { file: { guid: 'id2', fileName: 'video.mp4' }, key: 'id2', filename: 'video.mp4' },
                { file: { guid: 'id3', fileName: 'music.mp3' }, key: 'id3', filename: 'music.mp3' },
                { file: { guid: 'id4', fileName: 'recording.mp4'}, key: 'id4', filename: 'recording.mp4' },
                { file: { guid: 'id5', fileName: 'id5.docx' }, key: 'id5', filename: 'thesis.docx' },
                { file: { guid: 'id6', fileName: 'id6.mp4' }, key: 'id6', filename: 'video.mp4' },
                { file: { guid: 'id7', fileName: 'id7.mp3' }, key: 'id7', filename: 'music.mp3' },
                { file: { guid: 'id8', fileName: 'id8.mp4'}, key: 'id8', filename: 'recording.mp4' },
                { file: { guid: 'id9', fileName: 'id9.docx' }, key: 'id9', filename: 'thesis.docx' },
                { file: { guid: 'id10', fileName: 'id10.mp4' }, key: 'id10', filename: 'video.mp4' },
                { file: { guid: 'id11', fileName: 'id11.mp3' }, key: 'id11', filename: 'music.mp3' },
                { file: { guid: 'id12', fileName: 'id12.mp4'}, key: 'id12', filename: 'recording.mp4' },
                { file: { guid: 'id13', fileName: 'id13.docx' }, key: 'id13', filename: 'thesis.docx' },
                { file: { guid: 'id14', fileName: 'id14.mp4' }, key: 'id14', filename: 'video.mp4' },
                { file: { guid: 'id15', fileName: 'id15.mp3' }, key: 'id15', filename: 'music.mp3' },
                { file: { guid: 'id16', fileName: 'id16.mp4'}, key: 'id16', filename: 'recording.mp4' },
                { file: { guid: 'id17', fileName: 'id17.docx' }, key: 'id17', filename: 'thesis.docx' },
                { file: { guid: 'id18', fileName: 'id18.mp4' }, key: 'id18', filename: 'video.mp4' },
                { file: { guid: 'id19', fileName: 'id19.mp3' }, key: 'id19', filename: 'music.mp3' },
                { file: { guid: 'id20', fileName: 'id20.mp4'}, key: 'id20', filename: 'recording.mp4' },
                { file: { guid: 'id21', fileName: 'id21.docx' }, key: 'id21', filename: 'thesis.docx' },
                { file: { guid: 'id22', fileName: 'id22.mp4' }, key: 'id22', filename: 'video.mp4' },
                { file: { guid: 'id23', fileName: 'id23.mp3' }, key: 'id23', filename: 'music.mp3' },
                { file: { guid: 'id24', fileName: 'id24.mp4'}, key: 'id24', filename: 'recording.mp4' },
            ]"
            @open="log('open: ' + $event.fileName)"
            @delete="log('delete: ' + $event.fileName)"
        />

        <h3>Properties</h3>

        <d-helpers-property-table
            :items="[
                { 
                    name: '@delete',
                    type: '(file: any) => void',
                    default: 'null',
                    description: 'Delete request handler. Delete link is shown on hover when this is bound.',
                },
                { 
                    name: '@open',
                    type: '(file: any) => void',
                    default: 'null',
                    description: 'Open request handler. Emphasis on hover when this is bound.',
                },
                { 
                    name: 'files',
                    type: 'IFileDescription[]',
                    default: '[]',
                    description: 'List of files with file object, filename and key.',
                },
                {
                    name: 'auto-collapse',
                    type: 'boolean',
                    default: 'false',
                    description: 'Make the list collapse when the number of files exceed 6.',
                },
                {
                    name: 'expand-link-text',
                    type: 'string',
                    default: '&quot;Se alle&quot;',
                    description: 'The text for the expansion link when the list is collapsed.',
                },
                {
                    name: 'collapse-link-text',
                    type: 'string',
                    default: '&quot;Se færre&quot;',
                    description: 'The text for the collapse link when the list is expanded.',
                }
            ]"
        />

        <h3>Slots</h3>

        <d-helpers-slot-table
            :items="[
                {
                    name: 'filetext',
                    scope: 'file: IFileDescription & IExtension',
                    description: 'Presentation of the actual filename.',
                },
                {
                    name: 'deletetext',
                    scope: 'file: IFileDescription & IExtension',
                    description: 'Presentation of the remove link.',
                }
            ]"
        />

        <h3><code>IFileDescription</code></h3>

<d-helpers-highlight lang="typescript">
{
    file: any;
    filename: string;
    key: string;
}
</d-helpers-highlight>

        <p>
            The <code>file</code> object can be of any type. It is not used by the
            component, but will be sent to the event handlers.
        </p>

        <h3><code>IExtension</code></h3>

<d-helpers-highlight lang="typescript">
{
    extension: string;
}
</d-helpers-highlight>

    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    methods: {
        log(e: string): void {
            window.alert(e);
        }
    }
});
</script>

