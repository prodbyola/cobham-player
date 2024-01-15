<template>
  <div class="csp_header">
    <div v-for="(social, index) in socials" :key="index" class="csp_social">
        <img :src="`/images/${social.name}.png`" />
    </div>
  </div>
</template>
<script lang="ts" setup>
const socials = [
  { name: 'twitter', link: '' },
  { name: 'linkedin', link: '' },
  { name: 'github', link: '' },
  { name: 'info', link: '' }
]
</script>
<style lang="scss" scoped>
$social_size: 32px;

.csp_header {
  position: absolute;
  height: 48px;
  width: 100%;
  background-color: white;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 16px;

  .csp_social {
    width: $social_size;
    height: $social_size;
    cursor: pointer;
    
    img {
        height: 100%;
        width: 100%;
    }
  }
}
</style>
