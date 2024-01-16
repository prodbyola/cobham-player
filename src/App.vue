<template>
  <AppHeader class="hide_mobile" />
  <main class="cs-player-page">
    <Cassette />
    <PlaybackControls class="hide_mobile" />
    <audio :id="controllerID">
      <source src="/audios/demo_audio.mp3" type="audio/mpeg" />
    </audio>
  </main>
  <AppInfoModal v-if="showAppInfo" />
  <OrientWarningModal />
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useAppState } from './stores/app'

import AppHeader from './components/AppHeader.vue'
import Cassette from './components/cassette/CassetteIndex.vue'
import PlaybackControls from './components/controls/PlaybackControls.vue'
import AppInfoModal from './components/modals/AppInfo.vue'
import OrientWarningModal from './components/modals/OrientWarning.vue'

const controllerID = 'audio-controller'
const appState = useAppState()

const showAppInfo = computed(() => appState.appModal === 'info')

onMounted(() => {
  const audioContext = new window.AudioContext()
  const controller = document.getElementById(controllerID)
  if (controller != null) {
    const mediaSource = audioContext.createMediaElementSource(controller as HTMLAudioElement)
    mediaSource.connect(audioContext.destination)

    controller.addEventListener('timeupdate', (e) => {
      const t = e.currentTarget as HTMLAudioElement

      let progress = (t.currentTime / t.duration) * 100
      progress = Math.round(progress)
      appState.playbackProgress = progress
    })

    controller.addEventListener('ended', () => {
      appState.stop()
    })

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

body {
  a,
  .csp_strong {
    font-weight: bold;
  }

  p {
    font-family: SF Pro Display;
    margin-bottom: 8px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: SF Compact Display;
  }
}

#audio-controller {
  display: none;
}

.csp_page_bg {
  background: -webkit-linear-gradient(239deg, #607cde 27.11%, #38bf8e 73.91%);
}

.cs-player-page {
  overflow-x: hidden;
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
  display: block;
  min-width: 100vw;
  max-width: none;
  min-height: 100vh;
  padding: 0;
}

@media only screen and (max-width: 767px) {
  .hide_mobile {
    display: none;
  }
}

</style>
