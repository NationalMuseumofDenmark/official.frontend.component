<template>
    <div>
        <n-section>
            
            <div class="mb-5">
                <n-step-progress
                    :active="'3'"
                    :steps="[
                        { key: '1', title: 'Oplysninger' },
                        { key: '2', title: 'Beretninger' },
                        { key: '3', title: 'Vedhæft' },
                        { key: '4', title: 'Insend', icon: 'paper-plane' },
                    ]"
                />
            </div>

            <n-form-title title="Trin 3: Vedhæftninger" subtitle="Vedhæft eventuelle billeder, videoer og tekster" />
            
            <b-row>
                <b-col :cols="8" :offset="2">

                    <div style="padding: 3em 3em 2em 3em; text-align: center; border: 2px solid black;" class="mb-5">
                        <n-button variant="primary">Vælg filer</n-button>
                        <p class="text-muted mt-3">Eller træk dem ind fra din computer.</p>
                    </div>
                    
                    <n-file-list 
                        :files="augmentedFiles"
                        @open="log('brugeren åbner ' + $event)"
                        @delete="log('brugeren vil slette ' + $event)"
                    />

                    <div class="text-center mt-5">
                        <n-button variant="primary">Næste</n-button>
                    </div>
                </b-col>
            </b-row>
            
        </n-section>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            files: [
                'tekster.docx',
                'recording.mp4',
                'videoer.mp4',
                'musik.mp3',
                'billede_fra_bolig_1.jpg',
                'billede_fra_bolig_2.jpg',
            ],
        };
    },
    computed: {
        augmentedFiles() {
            return this.files.map(file => ({ file, key: file, filename: file  }));
        },
    },
    methods: {
        log(message: string): void {
            window.alert(message);
        }
    }
});
</script>
