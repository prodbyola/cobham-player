<template>
  <div class="csp_controls">
    <div
      v-for="(control, index) in controls"
      :key="index"
      class="csp_control"
      :class="{
        rightmost: index === controls.length - 1,
        leftmost: index === 0,
        record: control.name === 'record',
        active: control.name === activeControl || playPressed(control.name)
      }"
      @click="control.action"
      @mousedown="() => onHoldControl(control.name)"
      @mouseup="onReleaseControl"
      @touchstart="() => onTouchControl(control.name)"
      @touchend="onTouchRelease"
    >
      <ControlIcon :name="control.name" />
    </div>
    <input ref="fileInput" type="file" accept="audio/mpeg" hidden />
  </div>
</template>
<script lang="ts" setup>
import { useAppState } from '@/stores/app'
import ControlIcon from './ControlIcon.vue'
import { computed, onMounted, ref } from 'vue'

const CONTROL_NAMES = ['eject', 'record', 'rewind', 'forward', 'stop', 'pause', 'play'] as const
type ControlName = (typeof CONTROL_NAMES)[number]

const appState = useAppState()
const fileInput = ref<HTMLInputElement>()

const activeControl = ref<ControlName | null>(null)
const playPressed = computed(() => (control: ControlName) => {
  return ['play', 'pause'].includes(control as string) && appState.isPlaying && !appState.speedyMode
})

const onHoldControl = (controlName: ControlName) => {
  if (controlName === 'forward') {
    appState.forward()
  } else if (controlName === 'rewind') {
    appState.rewind()
  }

  activeControl.value = controlName
}

const onReleaseControl = () => {
  const excluded = ['play', 'pause', 'record'].includes(activeControl.value as string)

  const speedy = ['forward', 'rewind'].includes(activeControl.value as string)
  if (speedy) {
    appState.restoreSpeed()
  }

  if (!excluded) {
    activeControl.value = null
  }
}

const onTouchControl = (cn: ControlName) => {
  if (cn === 'forward' || cn === 'rewind') {
    onHoldControl(cn)
  }
}

const onTouchRelease = () => {
  const speedy = ['forward', 'rewind'].includes(activeControl.value as string)
  if (speedy) {
    onReleaseControl()
  }
}

const pickFile = () => {
  fileInput.value?.click()
}

const controls = computed<
  {
    name: ControlName
    action: () => void
  }[]
>(() => {
  return [
    { name: 'eject', action: pickFile },
    { name: 'record', action: () => {} },
    { name: 'rewind', action: () => {} },
    { name: 'forward', action: () => {} },
    { name: 'stop', action: appState.stop },
    { name: appState.isPlaying ? 'pause' : 'play', action: appState.playPause }
  ]
})

onMounted(() => {
  const fi = fileInput.value
  fi?.addEventListener('change', () => {
    const files = fi.files
    if (files !== null) {
      const src = URL.createObjectURL(files[0])
      appState.changeMediaSrc(src)
    }
  })
})
</script>
<style lang="scss" scoped>
$end_curve: 30px;

.csp_controls {
  width: 100%;
  height: 82px;
  display: flex;
  justify-content: center;
  column-gap: 2px;
  margin-top: 34px;

  .csp_control {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: white;
    box-shadow: 0px 5px 6px rgba(29, 80, 65, 0.5);
    padding: 4px 8px;
    cursor: pointer;
    transition: all 0.3s;
  }

  .csp_control:hover {
    transform: scale(105%);
  }

  .csp_control.rightmost {
    border-radius: 0 $end_curve $end_curve 0;
  }

  .csp_control.leftmost {
    border: none;
    border-radius: $end_curve 0 0 $end_curve;
  }

  .csp_control.active {
    transform: translateY(6px);
  }

  .csp_control.record {
    background-color: #dd2828;
  }
}
</style>
