<template>
  <AppModal title="App Info">
    <div class="csp_info">
      <p>
        <span class="csp_strong">Cobhams Player</span> is a retro-style cassette player created just
        for the fun of it, dedicated to the reowned Performing Artist, Singer-Songwriter and Music
        Producer, <a href="https://twitter.com/cobhamsasuquo" target="_blank">Cobhams Asuquo</a>.
        The app is built with
        <a href="https://vuejs.org/guide/introduction.html" target="_blank">VueJS</a>, an
        approachable, performant and versatile framework for building web user interfaces.
      </p>
      <p>
        All contributions are welcomed! You can find source code
        <a href="https://github.com/prodbyola/cobham-player">here on GitHub</a>. This project is at
        its earliest stage, so you might experience some bugs. Feedbacks are highly appreciated. You
        can <a href="https://github.com/prodbyola/cobham-player/issues">open an issue</a> or let's
        have a chat: <a href="mailto:prodbyola@gmail.com">prodbyola@gmail.com</a>. Whatever you
        think can be done to improve the project, kindly let me know. Don't forget, I'm also open to
        work and collaborations.
      </p>
      <p>
        A very Big Thanks to
        <a href="https://www.figma.com/@tank666" target="_blank">Yury Zeliankousk</a> for the
        original <a href="https://www.figma.com/community/file/935937278123360532">Figma template</a>.
      </p>
    </div>
  </AppModal>
</template>
<script lang="ts" setup>
import AppModal from './AppModal.vue'
</script>
<style lang="scss" scoped>
.csp_info {
  margin: 18px 8px;
  a,
  .csp_strong {
    font-weight: bold;
  }

  p {
    margin-bottom: 8px;
  }
}
</style>
