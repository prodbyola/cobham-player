<template>
    <div class="csp_reels">
        <div class="csp__reel reel__rolled">
            <img src="/images/reel.png" />
        </div>
        <div class="csp__reel">
            <img src="/images/reel.png" />
        </div>
    </div>
</template>
<style lang="scss" scoped>
.csp_reels {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
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
        }
    }

    .reel__rolled {
        outline: solid #232323 60px;
    }
}
</style>