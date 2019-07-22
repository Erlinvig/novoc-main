<template>
    <div class="container">
        <div class="content">
            <p class="footer__text">© 2009–2016 «NOVOC». При использовании материалов ссылка на сайт обязательна</p>

            <a class="footer__text aevrika" href="https://aevrika.ru/" target="_blank">
                <img class="footer__icon" src="../assets/icons/lamp.svg" alt="">
                Разработка и продвижение — «ЭВРИКА»
            </a>
        </div>

    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
    .content {
        display: flex;
        justify-content: space-between;
        padding: 80px 0;
    }

    .footer__text {
        color: black;
        text-decoration: none;
        font-weight: 300;
        font-family: "Roboto", sans-serif;
        font-size: 14px;
    }
    .footer__icon {
        margin-right: 1em;
    }

    .aevrika {
        display: flex;
        align-items: center;
        padding-left: 1em;
        transition: .5s ease;

        &:hover {
            color: #079fc2;
        }
    }

    @media (max-width: 767px) {
        .content {
            padding: 50px 1em;
            flex-direction: column;

            .aevrika {
                margin-top: 1.5em;
                padding: 0;
            }
        }
    }
</style>
