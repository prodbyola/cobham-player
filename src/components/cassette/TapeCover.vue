<template>
    <div class="csp_tape_cover tc_horizontal tc_top">
    </div>
    <div class="csp_tape_cover tc_horizontal tc_bottom">
    </div>
    <div class="csp_tape_cover tc_vertical tc_left">
    </div>
    <div class="csp_tape_cover tc_vertical tc_right">
    </div>
    <div class="csp_tape_cover tc_vertical__patch tc_left">
    </div>
    <div class="csp_tape_cover tc_vertical__patch tc_right">
    </div>
</template>
<style lang="scss" scoped>
.csp_tape_cover {
    position: absolute;
    background-color: black;
}

.tc_horizontal {
    height: 128px;
    width: 100%;
    left: 0;
    border-radius: 20px
}

.tc_vertical {
    height: 100%;
    width: 110px;
    top: 0;
    border-radius: 20px
}

.tc_vertical__patch {
    @extend .tc_vertical;
    width: 14px;
    background-color: black;
}

.tc_vertical__patch.tc_left {
    left: 190px;
}

.tc_vertical__patch.tc_right {
    right: 190px;
}

.tc_left {
    left: 0;
}

.tc_right {
    right: 0;
}

.tc_top {
    top: 0;   
}

.tc_bottom {
    bottom: 0;
}
</style>