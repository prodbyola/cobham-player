<template>
  <div class="csp_info">
    <div class="cspc_info__logo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="110"
        height="23"
        viewBox="0 0 110 23"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M51.8897 0H24.7949V4.88441H35.2648V23H41.4416V4.88441H51.8897V0ZM68.186 0.00652554C64.5719 0.00652554 53.2696 0 53.2696 0V23H68.3393C74.6037 23 80.5177 18.7753 80.5177 11.4945C80.5177 4.96739 75.6989 0.00652554 68.186 0.00652554ZM67.9888 18.1593C63.4329 18.1636 59.1617 18.1593 59.1617 18.1593V4.73147C59.1617 4.73147 62.2501 4.72713 67.6164 4.73147C73.2676 4.73585 74.757 8.04748 74.757 11.4945C74.757 15.278 72.8733 18.1483 67.9888 18.1593ZM88.0526 23V0H81.8757V23H88.0526ZM95.7188 11.0729C95.8941 11.1188 96.0912 11.252 96.2445 11.3656L110 22.9956H101.239L88.2278 11.0729L100.1 0H108.401L96.2445 10.778C96.0912 10.9244 95.8941 11.0227 95.7188 11.0729ZM18.2019 9.71861L26.6348 14.579L19.9761 16.3571L18.2019 9.71861ZM8.45479 9.71861H18.2019L13.3174 18.1375L8.45479 9.71861ZM8.45479 3.05176e-05L0 14.579L4.88451 23H21.7722L26.6348 14.579L18.2019 3.05176e-05H8.45479ZM13.3174 4.8604L18.2019 3.05176e-05V9.71861L13.3174 4.8604ZM13.3174 4.8604L8.45479 3.05176e-05V9.71861L0 14.579L6.6587 16.3571L4.88451 23L13.3174 18.1375L21.7722 23L19.9761 16.3571L13.3174 18.1375L6.6587 16.3571L8.45479 9.71861L13.3174 4.8604Z"
          fill="#FAFAFA"
        />
      </svg>
    </div>
    <p class="csp_info__text1">
      Normal Bias 120<span class="cspisu">µ</span><span class="cspiss">s</span> EQ
    </p>
    <p class="csp_info__text2">A<span class="stroke">|</span><span class="cspis_90">90</span></p>
    <p class="csp_info__madein">Made  in  Nigeria</p>
  </div>
</template>
<style lang="scss" scoped>
.csp_info {
  position: relative;
  margin-top: 112px;
  display: inline-flex;
  align-items: center;
  width: 100%;
  padding-left: 48px;

  p {
    font-family: SF Compact Display;
    color: white;
  }

  .csp_info__text1 {
    font-size: 0.875rem;
    font-weight: 400;
    margin-left: 17px;

    .cspisu {
      font-style: italic;
    }

    .cspiss {
      letter-spacing: -2.1px;
    }
  }

  .csp_info__text2 {
    font-weight: 600 !important;
    font-size: 2.1875rem;
    margin-left: 7px;

    .stroke {
        font-size: 1.8125rem;
        font-weight: 300 !important;
    }

    .cspis_90 {
        font-weight: 600 !important;
        letter-spacing: -1.4px;
    }
  }

  .csp_info__madein {
    text-transform: uppercase;
    font-size: 0.5rem;
    align-self: flex-end;
    margin-left: 15px;
    margin-bottom: 12px;
  }
}
</style>
