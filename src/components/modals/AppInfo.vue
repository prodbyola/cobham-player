<template>
  <AppModal title="App Info">
    <div class="csp_info">
      <h4 class="open_text">Time to Back in Time &#128337; &#128515;!</h4>
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
      <p>
        Favicon: <a href="https://www.freepik.com/free-vector/cinema-film-production-realistic-transparent-composition-with-isolated-image-circle-bobbin-with-reel-vector-illustration_23130020.htm#query=reel&position=3&from_view=search&track=sph&uuid=ec86461c-d4dd-4322-a77d-606cf3ae3a53">Image by macrovector</a> on Freepik
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

  .open_text {
    text-align: center;
    font-size: 1.4rem;
    color: rgba(0, 0, 0, 0.627);
    font-weight: bold;
  }
}
</style>
