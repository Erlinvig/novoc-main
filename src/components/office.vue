<template>
    <div class="block">
        <div class="container">
            <div class="content">
                <p class="content__title">Агентство недвижимости «NOVOC»</p>
                <p class="content__text">— это команда профессиональных экспертов и агентов по недвижимости с большим багажом риелторской и юридической практики. Основные направления Миэль «В Беляево» – это продажа элитной недвижимости и квартир в новостройках.</p>
                <p class="content__title">Наши специалисты выполняют широкий спектр операций, связанных с недвижимостью:</p>
                <div class="content__services">
                    <div class="services__item">
                        <img src="../assets/services/item-1.png" class="item__icon" alt="">
                        <span class="item__text">Подбор квартир</span></div>
                    <div class="services__item">
                        <img src="../assets/services/item-2.png" class="item__icon" alt="">
                        <span class="item__text">Проверка застройщика и/или собственника</span>
                    </div>
                    <div class="services__item">
                        <img src="../assets/services/item-3.png" class="item__icon" alt="">
                        <span class="item__text">Проверка и оформление документов</span>
                    </div>
                    <div class="services__item">
                        <img src="../assets/services/item-4.png" class="item__icon" alt="">
                        <span class="item__text">Юридическая поддержка</span>
                    </div>
                    <div class="services__item">
                        <img src="../assets/services/item-5.png" class="item__icon" alt="">
                        <span class="item__text">Сопровождение сделки</span>
                    </div>
                </div>
                <p class="content__text">Если вы хотите купить квартиру в элитном жилом комплексе, то мы поможем вам это сделать не только максимально комфортно и безопасно, но и выгодно – мы всегда сообщаем о самых интересных акциях и выбираем действительно горячие предложения. Кроме того, мы готовы помочь оформить выгодную ипотеку. Каждый клиент становится для нас партнером, которого мы готовы защитить от всевозможных рисков и поддержать на всех этапах проведения сделки.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
    .block {
        padding-top: 60px;
    }

    .content {
        border: 1px solid #e7e7e7;
        padding: 60px 100px 0 100px;
    }

    .content__title {
        font-size: 20px;
        margin-bottom: 28px;
        font-weight: 500;
        font-family: "Roboto", sans-serif;
    }

    .content__text {
        color: #1f252d;
        margin-bottom: 35px;
        font-size: 16px;
        font-weight: 300;
        line-height: 22px;
        font-family: "Roboto", sans-serif;
    }

    .content__services {
        margin-bottom: 35px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;

        .services__item {
            width: 150px;
            margin-right:  2em;
            display: flex;
            align-items: center;

            .item__icon {
                margin-right: 1em;
                pointer-events: none;
            }

            .item__text {
                font-size: 14px;
            }

            &:last-child {
                margin-right: 0;
            }
        }
    }

    @media (min-width: 992px) and (max-width: 1279px) {
        .content__services {
            margin-bottom: 17px;
            .services__item {
                margin-bottom: 17px;
            }
            &:last-child {
                margin-bottom: 0;
            }
        }

    }

    @media (min-width: 768px) and (max-width: 991px) {
        .content__services {
            margin-bottom: 17px;
            justify-content: flex-start;
            .services__item {
                margin-bottom: 17px;
                margin-right: 50px;
            }
            &:last-child {
                margin-bottom: 0;
            }
        }
    }

    @media (max-width: 767px) {
        .block {
            padding-top: 1em;
            .content {

                margin-left: 1em;
                margin-right: 1em;
                padding: 25px 25px 0 25px;

                .content__services {
                    margin-bottom: 17px;
                    justify-content: flex-start;
                    .services__item {
                        margin-bottom: 17px;
                        margin-right: 50px;
                    }
                    &:last-child {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }

    @media (max-width: 479px) {
        .services__item {
            width: 100% !important;
        }
    }
</style>
