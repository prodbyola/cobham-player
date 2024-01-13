<template>
    <div class="csp-cassette">
        <TapeReels />
        <Sticker />
        <TapeCenter />
      </div>
</template>
<script setup lang="ts">
import TapeReels from './TapeReels.vue';
import Sticker from './TapeSticker.vue';
import TapeCenter from './TapeCenter.vue';
</script>

<style lang="scss" scoped>
 .csp-cassette {
    position: relative;
    width: 542px;
    height: 334px;
    border: solid 1px #030303;
    padding: 42px 32px;
  }
</style>
