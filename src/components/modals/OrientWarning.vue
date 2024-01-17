<template>
  <AppModal title="Turn Your Screen" class="csp_ow" fullscreen hide-close>
    <div class="csp_ow__content">
      <div class="cow_icon">
        <svg
          class="cow_icon__svg"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"
          />
        </svg>
      </div>
      <h1 class="cow_heading">Hey, looks like you're on mobile device!</h1>
      <p class="cow_text">
        Or it could be that your screen view is too narrow. <span class="csp_strong">Cobhams</span> is claustrophobic &#128515;. Please switch to a Desktop or Pad to enjoy the time.
      </p>
    </div>
  </AppModal>
</template>
<script lang="ts" setup>
import AppModal from './AppModal.vue'
</script>
<style lang="scss" scoped>
$icon_size: 84px;
.csp_ow {
  display: none;
}

@media only screen and (max-width: 767px) {
  .csp_ow {
    display: block;
    .csp_ow__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      padding: 0 12px;

      .cow_icon {
        -webkit-animation: spin 1s linear infinite;
        animation: spin 1s linear infinite;
        .cow_icon__svg {
          width: $icon_size;
          height: $icon_size;
        }
      }

      .cow_heading {
        line-height: 1.2;
        text-align: center;
        margin-bottom: 22px;
      }

      .cow_text {
        font-size: 1.2rem;
      }
    }
  }
}

// $turn_size: 90deg;

// @-webkit-keyframes turn {
//   0% {
//     -webkit-transform: rotate(0deg);
//   }
//   80% {
//     -webkit-transform: rotate($turn_size);
//   }
//   100% {
//     -webkit-transform: rotate($turn_size);
//   }
// }

// @keyframes spin {
//   0% {
//     transform: rotate(0deg);
//   }
//   80% {
//     -webkit-transform: rotate($turn_size);
//   }
//   100% {
//     transform: rotate($turn_size);
//   }
// }
</style>
