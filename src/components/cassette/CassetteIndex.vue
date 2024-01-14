<template>
    <div class="csp-cassette">
      <TapeReels />
      <TapeCover />
      <Sticker />
        <!-- <TapeCenter /> -->
      </div>
</template>
<script setup lang="ts">
import TapeReels from './TapeReels.vue';
import TapeCover from './TapeCover.vue';
import Sticker from './TapeSticker.vue';
// import TapeCenter from './TapeCenter.vue';
</script>

<style lang="scss" scoped>
 .csp-cassette {
    position: relative;
    min-width: 542px;
    min-height: 334px;
    border: solid 1px #030303;
    padding: 42px 32px;
    border-radius: 20px;
  }
</style>
