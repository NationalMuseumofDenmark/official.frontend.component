<template>
  <div id="app">
    <n-nav-topbar @logoClick="logoClick" variant="white">
      <b-nav-item to="/structure">Structure</b-nav-item>
      <b-nav-item to="/components">Components</b-nav-item>
      <b-nav-item to="/forms">Forms</b-nav-item>
      <b-nav-item to="/bootstrap-styling">Styling</b-nav-item>
      <b-nav-item-dropdown id="example-dropdown" text="Examples">
        <b-dropdown-item to="/examples/step-page">Auto-sliding introduction</b-dropdown-item>
        <b-dropdown-item to="/examples/rich-text">Rich text example</b-dropdown-item>
        <b-dropdown-item to="/examples/file-uploads">File attachment example</b-dropdown-item>
        <b-dropdown-item to="/examples/text-page">Full text page</b-dropdown-item>
        <b-dropdown-item to="/examples/full">Sections and elements</b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item to="/features" class="button">Features</b-nav-item>
      
    </n-nav-topbar>

    <router-view />

    <n-footer variant="darkblue">
      <b-row>
        <b-col><img src="../assets/images/BL.svg" style="width: 120px" /></b-col>
        <b-col><n-logo white :width="100" /></b-col>
        <b-col>
          <h3>Generelt</h3>
          <ul>
            <li>Om os</li>
            <li>Projektet</li>
            <li>Vejledning</li>
          </ul>
        </b-col>
        <b-col>
          <h3>Følg os</h3>
          <ul>
            <li>Facebook</li>
            <li>LinkedIn</li>
            <li>Website</li>
          </ul>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col>
          I samarbejde med BL - Danmarks Almene Boliger
        </b-col>
      </b-row>
    </n-footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  methods: {
    logoClick() {
      this.$router.push('/');
    }
  }
});
</script>


<style lang="scss">
.grey {
  background-color: #ccc;
}
</style>
