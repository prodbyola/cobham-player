<template>
  <main>
    <div class="cs-player-page">
      <div class="cs-player">
        <Sticker />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Sticker from './components/TapeSticker.vue';
</script>

<style lang="scss">
@import url('https://fonts.cdnfonts.com/css/sf-pro-display');
@import url('https://fonts.cdnfonts.com/css/sf-compact-display');
@import url('https://fonts.cdnfonts.com/css/arial');
@import 'font/ds/stylesheet.css';

.cs-player-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(239deg, #607CDE 27.11%, #38BF8E 73.91%);

  .cs-player {
    width: 542px;
    height: 334px;
    background-color: #030303;
    padding: 42px 32px;
  }
}
</style>
