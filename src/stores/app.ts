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

  /** 
   * Calculates the amount of tape around the reels. A full reel has 60px border-width,
   * so we derive this value from `playbackProgress`.
   * 
   * Sometimes, `playbackProgress` is `NaN`. This usually happens when we change `src` for `mediaController`
   * and in such case `reelProgress` returns `NaN` as well. In order to avoid this, we must check and return 0 if `playbackControl` is `NaN`.
   */
  const reelProgress = computed(() => {
    let p = playbackProgress.value

    if (Number.isNaN(p)) p = 0
    const rp = (p / 100) * 60
    return Math.round(rp)
  })

  /**
   * Plays the audio if `playbackState` is `paused`. Otherwise, pauses the audio.
   */
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

  /**
   * Stops playback.
   */
  function stop() {
    const c = mediaController.value
    if (c !== null) {
      c.pause()
      c.currentTime = 0
      playbackState.value = 'stopped'
    }
  }

  /**
   * Fast-forward playback.
   */
  function forward() {
    speedyType.value = 'forward'
    const c = mediaController.value

    updateSpeedRate(c)
    c?.play()
  }

  /** Rewinds playback. */
  function rewind() {
    speedyType.value = 'rewind'
    const c = mediaController.value

    updateSpeedRate(c)
    c?.play()
  }

  /** Restores playback speed to normal. */
  function restoreSpeed() {
    clearInterval(speedInterval.value)
    speedyType.value = null

    const c = mediaController.value
    const playing = isPlaying.value

    if (c) {
      if (!playing) c.pause()
      if (c.muted) c.muted = false
    }
  }

  /** Increases the playback speed depending on whether the command is rewind or fast-forward. */
  function updateSpeedRate(c: HTMLAudioElement | null) {
    const playing = isPlaying.value
    const st = speedyType.value
    const tc = 0.3

    if (c) {
      if (!playing) c.muted = true

      speedInterval.value = setInterval(() => {
        if (st === 'rewind') c.currentTime -= tc
        else c.currentTime += tc
      }, 100) as unknown as number
    }
  }

  /** Changes the `mediaController`'s source file. */
  function changeMediaSrc(src: string) {
    const c = mediaController.value

    if (c !== null) {
      stop()

      c.src = src
      c.load()
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
    rewind,
    changeMediaSrc
  }
})
