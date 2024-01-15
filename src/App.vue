<template>
  <main class="cs-player-page">
    <AppHeader />
    <Cassette />
    <PlaybackControls />
    <audio :id="controllerID">
      <source src="/audios/demo_audio.mp3" type="audio/mpeg">
    </audio>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import AppHeader from './components/AppHeader.vue'
import Cassette from './components/cassette/CassetteIndex.vue'
import PlaybackControls from './components/controls/PlaybackControls.vue'
import { useAppState } from './stores/app'

const controllerID = 'audio-controller'
const appState = useAppState()

onMounted(() => {
  const audioContext = new window.AudioContext()
  const controller = document.getElementById(controllerID)
  if (controller != null) {
    const mediaSource = audioContext.createMediaElementSource(controller as HTMLAudioElement)
    mediaSource.connect(audioContext.destination)

    appState.audioContext = audioContext
    appState.mediaController = controller as HTMLAudioElement
  } else {
    throw new Error('No element with id: ' + controllerID)
  }
})
</script>

<style lang="scss">
@import url('https://fonts.cdnfonts.com/css/sf-pro-display');
@import url('https://fonts.cdnfonts.com/css/sf-compact-display');
@import url('https://fonts.cdnfonts.com/css/arial');
@import 'font/ds/stylesheet.css';

#audio-controller {
  display: none;
}

.csp_page_bg {
  background: -webkit-linear-gradient(239deg, #607cde 27.11%, #38bf8e 73.91%);
}

.cs-player-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
}

#app {
  @extend .csp_page_bg;
  min-width: 100vw;
  max-width: none;
  min-height: 100vh;
  padding: 0;
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.csp_rolling {
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}
</style>
