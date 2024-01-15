import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppState = defineStore('appState', () => {
  const audioContext = ref<AudioContext | null>(null)
  const mediaController = ref<HTMLAudioElement | null>(null)
  const playbackState = ref<'playing' | 'paused' | 'stopped'>('stopped')
  const isPlaying = computed(() => playbackState.value === 'playing')
  
  const playbackProgress = ref(0)
  const reelProgress = computed(() => {
    const rp = (playbackProgress.value / 100) * 60
    return Math.round(rp)
  })

  function playPause(){
    if(audioContext.value?.state === 'suspended'){
      audioContext.value.resume()
    }

    const c = mediaController.value
    if(isPlaying.value){
      c?.pause()
      playbackState.value = 'paused'
    } else {
      c?.play()
      playbackState.value = 'playing'
    }
  }

  function stop(){
    const c = mediaController.value
    if(c !== null){
      c.pause()
      c.currentTime = 0
      playbackState.value = 'stopped'
    }
  }

  return { 
    mediaController,
    audioContext,
    playPause,
    stop,
    isPlaying,
    playbackProgress,
    reelProgress
   }
})
