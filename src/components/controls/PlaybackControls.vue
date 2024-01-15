<template>
  <div class="csp_controls">
    <div 
      v-for="(control, index) in controls" 
      :key="index" 
      class="csp_control"
      :class="{
        rightmost: index === controls.length - 1,
        leftmost: index === 0
      }"
    >
      <ControlIcon :name="control.name" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import ControlIcon from './ControlIcon.vue'

const controls = [
  { name: 'eject', action: () => {} },
  { name: 'rewind', action: () => {} },
  { name: 'forward', action: () => {} },
  { name: 'stop', action: () => {} },
  { name: 'play', action: () => {} }
]
</script>
<style lang="scss" scoped>
$end_curve: 30px;

.csp_controls {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 34px;

  .csp_control {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-left: 1px solid black;
    padding: 4px 8px;
    cursor: pointer;
    transition: all .3s;
  }

  .csp_control:hover {
    transform: scale(105%);
    border-right: 1px solid black;
  }

  .csp_control.rightmost {
    border-radius: 0 $end_curve $end_curve 0;
  }

  .csp_control.leftmost {
    border: none;
    border-radius: $end_curve 0 0 $end_curve;
  }
}
</style>
