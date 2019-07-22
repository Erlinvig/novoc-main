<template>
    <div class="block">
        <div class="container">
            <div class="content">
                <a class="content__link" href="#">
                    <img class="content__image" src="../assets/header/logo.jpg" alt="">
                </a>
                <div class="content__column">
                    <span class="agency-realty">Агентство недвижимости</span>
                    <span class="agency-address">
                        <img src="../assets/icons/metro-logo.svg" alt="" style="margin-right: 5px;">
                        Москва, «Беляево», ул. Миклухо-Маклая, д. 43
                    </span>
                </div>
                <div class="content__column">
                    <span class="agency-phone">+7 (495) 276-03-03</span>
                    <span class="agency-plan">
                        <span>Пн—Пт: с 09.00 до 21.00, </span>
                        <span>Сб—Вс: с 10.00 до 17.00</span>
                    </span>
                </div>

                <div class="content__right">
                    <span class="right-phone">+7 (495) 276-03-03</span>
                    <button class="btn-blue content__phone">Бесплатная консультация</button>
                    <div class="burger" @click="burgerClick" :class="{burger__active: burger__active}">
                        <span class="burger__item"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            burger__active: false
        }
    },
    methods: {
        burgerClick() {
            this.burger__active = !this.burger__active;

            this.$store.dispatch('burgerClick');
        }
    }
}
</script>

<style lang="scss" scoped>
    .block {
        background-color: #f7f7f7;
    }
    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .content__link {
            display: flex;
        }

        .content__column {
            display: flex;
            flex-direction: column;

            .agency-realty {
                color: #1f252d;
                font-size: 20px;
                font-weight: 500;
                margin-bottom: 8px;
            }
            .agency-address {
                color: #1f252d;
                font-size: 14px;
                font-weight: 300;
            }
            .agency-phone {
                color: #1f252d;
                font-weight: 500;
                margin-bottom: 8px;
            }
            .agency-plan {
                color: #1f252d;
                font-size: 14px;
                font-weight: 300;
            }
        }
    }

    @media (min-width: 1280px) {
        .agency-phone {
            font-size: 20px;
        }
        .content__right {
            .burger {
                display: none;
            }
            .right-phone {
                display: none;
            }
        }
    }
    @media (min-width: 992px) and (max-width: 1279px) {
        .content__column {
            width: 20%;

            .agency-plan {
                display: flex;
                flex-direction: column;
            }
        }
        .content__image {
            width: 150px;
        }
        .content__phone {
            padding-left: 3em;
            padding-right: 3em;
        }
        .agency-phone {
            font-size: 20px;
        }
        .content__right {
            .burger {
                display: none;
            }
            .right-phone {
                display: none;
            }
        }
    }

    @media (min-width: 768px) and (max-width: 991px) {
        .content {
            border-bottom: 2px solid #e1e1e1;
            padding-bottom: 5px;
        }
        .content__image {
            width: 120px;
        }
        .content__column:nth-child(2), .agency-plan {
            display: none;
        }
        .agency-phone {
            font-size: 24px;
        }
        .content__right {
            display: flex;
            align-items: center;

            .content__phone {
                margin-right: .5em;
            }
            .right-phone {
                display: none;
            }
        }
    }

    @media (max-width: 767px) {
        .content {
            border-bottom: 2px solid #e1e1e1;
            padding-bottom: 5px;
        }
        .content__image {
            width: 120px;
        }
        .content__column {
            .agency-realty, .agency-plan, .agency-address, .agency-phone {
                display: none;
            }
        }

        .content__right {
            display: flex;
            align-items: center;

            .content__phone {
                display: none;
            }

            .right-phone {
                display: block;
                font-size: 24px;
                margin-right: .5em;
            }
        }
    }

    @media (max-width: 420px) {
        .content__image {
            width: 75px;
        }
        .content__right {
            .right-phone {
                font-size: 20px;
            }
        }
    }


</style>
