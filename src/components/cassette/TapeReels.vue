<template>
    <div class="csp_plaster csp_reels">
        <div class="csp__reel reel__rolled">
            <ReelIcon />
        </div>
        <div class="csp__reel">
            <ReelIcon />
        </div>
    </div>
    <div class="csp_plaster csp_reels_holes">
        <div class="csp_reels_hole">
        </div>
        <div class="csp_reels_hole">
        </div>
    </div>
    <div class="csp_plaster">
        <div class="csp_reels__window">
        </div>
    </div>
</template>
<script lang="ts" setup>
import ReelIcon from './ReelIcon.vue';
</script>
<style lang="scss" scoped>
.csp_plaster {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}

.csp_reels {
    column-gap: 118px;

    .csp__reel {
        width: 124px;
        height: 124px;
        border-radius: 50%;
        display: inline-block;
        background-color: transparent;

        img {
            width: 100%;
            height: 100%;
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        }
    }

    .reel__rolled {
        outline: solid #232323 60px;
    }
}

.csp_reels_holes {
    column-gap: 166px;
    .csp_reels_hole {
        height: 76px;
        width: 76px;
        border-radius: 50%;
        outline: solid black 18px;
    }
}

$window_vertical_border: 2px;
$window_horizontal_border: 8px;

.csp_reels__window {
    width: 134px;
    height: 76px;
    border-top: $window_horizontal_border solid black;
    border-bottom: $window_horizontal_border solid black;
    border-left: $window_vertical_border solid black;
    border-right: $window_vertical_border solid black;
    background: linear-gradient(63deg, rgba(248, 248, 248, 0.15) 15.84%, rgba(248, 248, 248, 0.05) 83.17%);
    stroke-width: 1px;
    stroke: #000;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
</style>