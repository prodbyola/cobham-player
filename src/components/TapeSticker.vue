<template>
    <div class="csp__sticker">
        <div class="csp__sticker_redtape"></div>
        <div class="csp__sticker_whitetape">
            <div class="csp__sticker_sidea">
                <p class="sidea__text">A</p>
            </div>
            <p class="csp__sticker_acst_text">acoustic cassette</p>
            <p class="csp__scripted">muffana</p>
            <p class="csp__sticker_text">N.R.[ ] IN OUT</p>
        </div>
        <div class="csp__sticker_redtape"></div>
    </div>
</template>
<style lang="scss" scoped>
.csp__sticker {
    .csp__sticker_redtape {
        height: 12px;
        background-color: #DD2828;
    }

    .csp__sticker_whitetape {
        p {
            color: #100F0F;
            font: SF Pro Display;
        }

        display: flex;
        width: 100%;
        height: 48px;
        background-color: white;
        padding: 9px 18px;

        .csp__sticker_sidea {
            height: 24px;
            width: 24px;
            background-color: #100F0F;
            display: inline-flex;
            justify-content: center;
            align-items: center;

            .sidea__text {
                font-family: Arial, Helvetica, sans-serif;
                color: white;
                font-weight: 700;
                font-size: 1.33331rem;
            }
        }

        .csp__sticker_acst_text {
            text-transform: uppercase;
            font-size: 0.625rem;
            font-weight: 500;
            font-family: SF Pro Display;
            margin-left: 4px;
        }

        .csp__scripted {
            font-family: Disruptors Script;
            font-weight: 400;
            font-size: 4rem;
            line-height: 0.4;
            transform: rotate(-4.577deg);
            margin-left: 12px;
            margin-right: 12.4px;
        }

        .csp__sticker_text {
            font-size: 0.625rem;
        }
    }
}
</style>