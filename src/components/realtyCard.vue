<template>
    <div class="card">
        <div class="card__info">
            <p class="card__title">{{realty.title}}</p>
            <div class="card__address-info">
                <span class="card__metro">
                    <img src="../assets/icons/metro-logo.svg" alt="" style="margin-right: 5px;">
                    {{realty.metro}}
                </span>
                <span class="card__time">{{realty.time}}</span>
            </div>
            <p class="card__address">{{realty.address}}</p>

            <div class="info__table">
                <div v-for="room in realty.rooms" :key="room.id">
                    <div class="table__row row-border">
                        <span class="table__item-right">{{room.count}}</span>
                        <span class="table__item-left">{{room.price}}</span>
                    </div>
                </div>
                <div class="table__row">
                    <span class="table__item-right">Стадия готовности:</span>
                    <span class="table__item-left">{{realty.state}}</span>
                </div>
                <div class="table__row">
                    <span class="table__item-right">Ипотека:</span>
                    <span class="table__item-left">{{realty.mortgage}}</span>
                </div>
                <div class="table__row">
                    <span class="table__item-right">Отделка:</span>
                    <span class="table__item-left">{{realty.facing}}</span>
                </div>
            </div>

            <div class="card__advantages">

                <span class="advantage__item">
                    <img class="advantage__icon" src="../assets/icons/house.svg" alt="">
                    Ипотека
                </span>
                <span class="advantage__item">
                    <img class="advantage__icon" src="../assets/icons/calendar.svg" alt="">
                    Рассрочка
                </span>
                <span class="advantage__item">
                    <img class="advantage__icon" src="../assets/icons/percentage.svg" alt="">
                    Скидки
                </span>
                <span class="advantage__item">
                    <img class="advantage__icon" src="../assets/icons/ruble.svg" alt="">
                    Субсидии
                </span>
            </div>
        </div>
        <div class="card__image">
            <img :src="realty.image" alt="">
            <div class="card__more">
                <a href="#" class="btn-blue">Подробнее</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['realty']
    }
</script>

<style lang="scss" scoped>
    .card {
        display: flex;
        justify-content: space-between;
        background-color: #fff;
        transition: 0.5s ease;

        &:hover {
            box-shadow: 0 0 25px rgba(0,0,0,0.15);
        }
    }

    .card__info {
        padding: 50px;
        width: 50%;

        .card__title {
            font-weight: 500;
            margin-bottom: 22px;
            font-size: 24px;
        }
        .card__address-info {
            display: flex;
            margin-bottom: 20px;
            .card__metro {
                font-size: 14px;
                margin-right: 1em;
            }
            .card__time {
                font-size: 13px;
                color: #adadad;
            }
        }
        .card__address {
            font-size: 14px;
            margin-bottom: 24px;
        }

        .info__table {
            margin-bottom: 30px;
            width: 100%;
            display: flex;
            flex-direction: column;
            .row-border {
                border-bottom: 1px solid #e7e7e7;
            }
            .table__row {
                display: flex;
                justify-content: space-between;
                width: 100%;

                .table__item-right, .table__item-left {
                    width: 100%;
                    padding-top: 5px;
                    padding-bottom: 5px;
                    font-size: 14px;
                }
                .table__item-right {
                    color: #adadad;
                }
                .table__item-left {
                    padding-left: 25px;
                    border-left: 1px solid #e7e7e7;
                }
            }
        }

        .card__advantages {
            display: flex;
            flex-wrap: wrap;

            .advantage__item {
                text-transform: uppercase;
                background-color: #f7f7f7;
                color: #079fc2;
                border-radius: 5px;
                font-size: 13px;
                padding: 5px;
                margin-right: .5em;
                font-weight: 500;
                display: flex;
                align-items: center;
                .advantage__icon {
                    margin-right: 1em;
                    pointer-events: none;
                }
            }
        }
    }

    .card__image {
        width: 50%;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        align-items: center;
        img {
            display: block;
            width: 100%;
            height: 100%;
        }
        .card__more {
            position: absolute;
            display: flex;
            margin-top: -1em;
            text-transform: uppercase;
        }
    }

    @media (min-width: 1280px) {

    }

    @media (min-width: 992px) and (max-width: 1280px) {
        .card {
            .card__info {
                padding: 20px;
                .card__title {
                    margin-bottom: 14px;
                    font-size: 20px;
                }
                .card__address-info {
                    margin-bottom: 14px;
                }
                .card__address {
                    margin-bottom: 14px;
                }
                .info__table {
                    margin-bottom: 14px;
                }
                .table__item-left, .table__item-right {
                    font-size: 13px;
                }
            }
        }
    }

    @media (min-width: 768px) and (max-width: 991px) {
        .card {
            flex-direction: column;
            .card__info {
                padding: 20px;
                width: 95%;
                .card__advantages {
                    justify-content: center;
                }
            }
            .card__image {
                width: 70%;
                align-self: center;
            }
        }
    }

    @media (min-width: 480px) and (max-width: 767px) {
        .card {
            flex-direction: column;
            .card__info {
                padding: 1em;
                width: 90%;

                .card__advantages {
                    justify-content: center;
                }

                .card__advantages {
                    .advantage__item {
                        padding: 6px;
                    }
                }
            }
            .card__image {
                width: 100%;
                align-self: center;
            }
        }
    }

    @media (max-width: 479px) {
        .card {
            flex-direction: column;
            .card__info {
                padding: 1em;
                width: 90%;

                .table__item-left, .table__item-right {
                    font-size: 12px !important;
                }

                .card__advantages {
                    justify-content: center;
                }

                .card__advantages {
                    justify-content: space-around;
                    .advantage__item {
                        padding: 6px;
                        margin-bottom: 5px;

                    }
                }
            }
            .card__image {
                width: 100%;
                align-self: center;
            }
        }
    }
</style>
