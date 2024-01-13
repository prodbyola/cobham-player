<template>
  <main>
    <div class="cs-player-page csp_page_bg">
      <div class="csp-cassette">
        <Cassette />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Cassette from './components/cassette/CassetteIndex.vue';
</script>

<style lang="scss">
@import url('https://fonts.cdnfonts.com/css/sf-pro-display');
@import url('https://fonts.cdnfonts.com/css/sf-compact-display');
@import url('https://fonts.cdnfonts.com/css/arial');
@import 'font/ds/stylesheet.css';

.csp_page_bg {
  background: -webkit-linear-gradient(239deg, #607CDE 27.11%, #38BF8E 73.91%);;
}

.cs-player-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
