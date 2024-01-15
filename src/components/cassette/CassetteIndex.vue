<template>
    <div class="csp-cassette">
      <TapeReels />
      <TapeCover />
      <Sticker />
      <TapeInfo />
      <TapeSubHoles />
    </div>
</template>
<script setup lang="ts">
import TapeReels from './TapeReels.vue';
import TapeCover from './TapeCover.vue';
import Sticker from './TapeSticker.vue';
import TapeInfo from './TapeInfo.vue';
import TapeSubHoles from './TapeSubHoles.vue';
</script>

<style lang="scss" scoped>
 .csp-cassette {
    position: relative;
    min-width: 542px;
    min-height: 334px;
    border: solid 1px #030303;
    padding: 42px 32px 0px 32px;
    border-radius: 20px;
    filter: drop-shadow(-5px 5px 6px rgba(29, 80, 65, 0.50));
  }
</style>
