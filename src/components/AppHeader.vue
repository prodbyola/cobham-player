<template>
  <div class="csp_header">
    <div
      v-for="(social, index) in socials"
      :key="index"
      @click="() => getSocial(social)"
      class="csp_social"
    >
      <img :src="`/images/${social.name}.png`" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useAppState } from '@/stores/app'

const appState = useAppState()

type SocialType = {
  name: string
  link?: string
}

const socials: SocialType[] = [
  { name: 'twitter', link: 'https://twitter.com/prodbyola' },
  { name: 'linkedin', link: 'https://linkedin.com/in/prodbyola' },
  { name: 'github', link: 'https://github.com/prodbyola' },
  { name: 'info', link: '' }
]

const getSocial = (social: SocialType) => {
  if (social.name === 'info') {
    appState.appModal = 'info'
  } else {
    window.open(social.link, '_blank')
  }
}
</script>
<style lang="scss" scoped>
$social_size: 32px;

.csp_header {
  // position: absolute;
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
