<template>
    <div class="csp_modal">
        <div class="csp_modal__content">
            <div class="csp_modal__header">
                <h3 class="header_title">{{ title }}</h3>
                <div class="close_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>
                </div>
            </div>
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts" setup>
defineProps<{
    title?: string
}>()
</script>
<style lang="scss" scoped>
.csp_modal {
    z-index: 999;
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100vh;
    min-width: 100vw;
    background-color: #0000005c;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .csp_modal__content {
        border-radius: 8px;
        width: 100%;
        padding: 8px;
        .csp_modal__header {
            display: inline-flex;
            align-items: center;
            width: 100%;
            height: 32px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.087);
            padding-bottom: 8px;

            .header_title {
                flex: 1;
                text-align: center;
                font-weight: bold;
            }

            .close_icon {
                display: inline-flex;
                align-items: center;
                cursor: pointer;
            }
        }

        background-color: white;
        max-width: 520px
    }
}
</style>