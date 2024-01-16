import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppState = defineStore('appState', () => {
  const appModal = ref<'info' | 'orientation_warning' | null>(null)
  const audioContext = ref<AudioContext | null>(null)
  const mediaController = ref<HTMLAudioElement | null>(null)

  const speedyType = ref<'forward' | 'rewind' | null>(null)
  const speedyMode = computed(() => speedyType.value !== null)
  const speedInterval = ref<undefined | number>(undefined)

  const playbackState = ref<'playing' | 'paused' | 'stopped'>('stopped')
  const isPlaying = computed(() => playbackState.value === 'playing')

  const playbackProgress = ref(0)
  const reelProgress = computed(() => {
    const rp = (playbackProgress.value / 100) * 60
    return Math.round(rp)
  })

  function playPause() {
    if (audioContext.value?.state === 'suspended') {
      audioContext.value.resume()
    }

    const c = mediaController.value
    if (isPlaying.value) {
      c?.pause()
      playbackState.value = 'paused'
    } else {
      c?.play()
      playbackState.value = 'playing'
    }
  }

  function stop() {
    const c = mediaController.value
    if (c !== null) {
      c.pause()
      c.currentTime = 0
      playbackState.value = 'stopped'
    }
  }

  function forward() {
    speedyType.value = 'forward'
    const c = mediaController.value

    updateSpeedRate(c)
    c?.play()
  }

  function rewind() {
    speedyType.value = 'rewind'
    const c = mediaController.value

    updateSpeedRate(c)
    c?.play()
  }

  function restoreSpeed() {
    clearInterval(speedInterval.value)
    speedyType.value = null

    const c = mediaController.value
    const playing = isPlaying.value

    if (c) {
      if (!playing) c.pause()
      if(c.muted) c.muted = false
    }
  }

  function updateSpeedRate(c: HTMLAudioElement | null) {
    const playing = isPlaying.value
    const st = speedyType.value
    const tc = 0.3

    if(c){
      if(!playing) c.muted = true

      speedInterval.value = setInterval(() => {
        if(st === 'rewind') c.currentTime -= tc
        else c.currentTime += tc
      }, 100) as unknown as number
    }
  }

  return {
    mediaController,
    audioContext,
    isPlaying,
    speedyMode,
    speedyType,
    playbackProgress,
    playbackState,
    reelProgress,
    appModal,
    playPause,
    stop,
    forward,
    restoreSpeed,
    rewind
  }
})
