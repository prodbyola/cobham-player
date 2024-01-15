<template>
  <div class="csp_subholes">
    <div class="csp_hole__container">
        <div class="csp_hole csp_hole__rounded csp_page_bg"></div>
        <div class="csp_hole csp_hole__square csp_page_bg"></div>
    </div>

    <div class="csp_hole__container container_left">
        <div class="csp_hole csp_hole__rounded csp_page_bg"></div>
        <div class="csp_hole csp_hole__square csp_page_bg"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$rounded_size: 24px;
$square_size: 20px;
.csp_subholes {
  position: relative;
  display: flex;
  width: 100%;
  height: 48px;
  justify-content: center;
  column-gap: 136px;

  .csp_hole {
    background-attachment: fixed;
    fill: transparent;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .csp_hole__container {
    display: inline-flex;
    column-gap: 32px;
      .csp_hole__rounded {
        height: $rounded_size;
        width: $rounded_size;
        border-radius: 50%;
        margin-top: 20px;
      }

      .csp_hole__square {
        height: $square_size;
        width: $square_size;
        border-radius: 5px;
        margin-top: 16px;
      }
  }

  .csp_hole__container.container_left {
    flex-direction: row-reverse;
  }

}
</style>
