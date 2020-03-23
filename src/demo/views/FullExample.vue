<template>
    <div>
        <n-section>
            <div class="spaced-items">
                <n-button variant="secondary" class="mr-3">Videre</n-button>
                <n-button variant="primary" class="mr-3">Videre</n-button>
                <n-button variant="darkred" class="mr-3">Videre</n-button>
                <n-button variant="lightgrey" class="mr-3">Videre</n-button>
                <n-button variant="rose">Videre</n-button>
            </div>
        </n-section>

        <n-section theme="darkblue">
            <b-row>
                <b-col :cols="7">
                    <img src="../assets/images/apartment_livingroom.jpg" style="width: 100%; border: 10px solid white" />
                </b-col>
                <b-col :cols="3" :offset="1" class="align-self-center">
                    <h2>Bidrag til historien</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae eveniet architecto, illum dolor animi aperiam, eaque ducimus unde id quisquam, labore aliquid iure?
                </b-col>
            </b-row>

            <div class="d-flex justify-content-end pad-top">
                <n-button variant="primary" class="mr-3">Videre</n-button>
                <n-button variant="darkred" class="mr-3">Videre</n-button>
                <n-button variant="lightgrey" class="mr-3">Videre</n-button>
                <n-button variant="rose">Videre</n-button>
            </div>
        </n-section>

        <n-section theme="rose">
            <n-slim>
                <n-form-title title="Titel" subtitle="Beskrivelse"/>

                <b-form>
                    <n-form-field id="road" label="Vej og vejnummer" />

                    <b-row>
                        <b-col :cols="4">
                            <n-form-field id="zipcode" label="Postnummer" />
                        </b-col>
                        <b-col :cols="8">
                            <n-form-field id="city" label="By" />
                        </b-col>
                    </b-row>

                    <div class="text-center">
                        <h4>Hvor mange år har du boet i andelsforeningen?</h4>

                        <n-form-button-select
                            :options="[
                                { key: 'one', value: '1-5 år' },
                                { key: 'two', value: '6-10 år' },
                                { key: 'three', value: '11-15 år' },
                            ]"
                            v-model="yearsValue"
                            multi
                        />
                    </div>

                </b-form>
            </n-slim>
        </n-section>

        <n-section>
            <n-form-title title="Titel" subtitle="Kan du beskrive jeres naboskab i andelsforeningen?" />

            <b-row>
                <b-col :cols="8" :offset="2">
                    <n-form-rich-text v-model="story" />
                </b-col>
            </b-row>

        </n-section>

        <n-section v-for="theme in ['darkblue', 'darkred', 'lightgrey', 'rose']" :key="theme" :theme="theme">
            <n-step-progress :steps="steps" :active="active" />
        </n-section>

        <n-section theme="darkred">

            <b-row>
                <b-col v-for="(v, index) in ['light', 'dark', 'light']" :key="index">
                    <n-infobox :variant="v">
                        <h2>Titel på infoboks</h2>
                        <p>
                            Forklaringstekst til infoboksen og indhold.
                            Her kan der stå flere ting.
                            F.eks. citater.
                        </p>
                        <blockquote>
                            Om vinteren legede vi i opgangene.
                            Fru Madsen blev stiktosset.
                        </blockquote>
                    </n-infobox>
                </b-col>
            </b-row>

            
        </n-section>

    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    created: function() {
        setInterval(() => {
            const i = this.index;
            const n = i + 1;
            const length = this.steps.length;
            
            this.index = n >= length ? 0 : n;

        }, 3000);
    },
    data: function() {
        return {
            variant: [
                { key: 'a', var: 'light' },
                { key: 'b', var: 'dark' },
                { key: 'c', var: 'light' },
            ],
            steps: [
                { key: 'one', title: 'Kort info' },
                { key: 'two', title: 'Fortællinger' },
                { key: 'three', title: 'Uploads' },
                { key: 'four', title: 'Insend', icon: 'paper-plane' },
            ],
            index: 0,
            yearsValue: null,
            story: '',
        }
    },
    computed: {
        active: function() {
            const tany = this as any;
            return tany.steps[tany.index].key;
        }
    },
})
</script>



<style lang="scss" scoped>



</style>
