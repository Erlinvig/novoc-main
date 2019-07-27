<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div class="block">
        <div class="container">
            <h1 class="title">Купить квартиру в новостройке</h1>
            <div class="panel">
                <span class="panel__description">Стоимость, млн руб.</span>
                <div class="panel__filter-1">
                    <vue-slider
                            class="filter__price"
                            :min="0"
                            :max="69"
                            v-model="value"
                            :dot-options="dotOptions"
                            :order="false"
                    >
                        <template v-slot:process="{ start, end, style }">
                            <div class="vue-slider-process custom-class" :style="[style]"></div>
                        </template>

                        <template v-slot:dot="{ index }">
                            <span v-if="index === 0" class="custom-dot">
                                <font-awesome-icon icon="angle-left" class="custom-dot__decoration-left"></font-awesome-icon>
                                <span class="custom-dot__value">{{preposition1}} {{value[0]}}</span>
                                <font-awesome-icon icon="angle-right" class="custom-dot__decoration-right"></font-awesome-icon>
                            </span>
                            <span v-if="index === 1" class="custom-dot">
                                <font-awesome-icon icon="angle-left" class="custom-dot__decoration-left"></font-awesome-icon>
                                <span class="custom-dot__value">{{preposition2}} {{value[1]}}</span>
                                <font-awesome-icon icon="angle-right" class="custom-dot__decoration-right"></font-awesome-icon>
                            </span>
                        </template>

                        <template v-slot:tooltip="{ value }">
                            <div class="price__tooltip" style="display: none"></div>
                        </template>
                    </vue-slider>

                    <div class="filter__region">
                        <div class="region__row">
                            <input id="ch1" type="checkbox">
                            <label for="ch1">Москва и Новая Москва</label>
                        </div>
                        <div class="region__row">
                            <input id="ch2" type="checkbox">
                            <label for="ch2">Московская область</label>
                        </div>
                    </div>
                </div>

                <div class="panel__filter-2">
                    <select name="" id="s1">
                        <option value="0" v-for="metro in metroList">
                            {{metro.value}}
                        </option>
                    </select>

                    <select name="" id="s2">
                        <option value="0" v-for="type in typeList">
                            {{type.value}}
                        </option>
                    </select>

                    <select name="" id="s3">
                        <option value="0" v-for="square in squareList">
                            {{square.value}}
                        </option>
                    </select>

                    <select name="" id="s4">
                        <option value="0" v-for="facing in facingList">
                            {{facing.value}}
                        </option>
                    </select>

                    <select name="" id="s5">
                        <option value="0" v-for="deadline in deadlineList">
                            {{deadline.value}}
                        </option>
                    </select>
                    <button class="btn-blue">Найти</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VueSlider from 'vue-slider-component'
    import 'vue-slider-component/theme/antd.css'

    export default {
        components: {
            VueSlider
        },
        data () {
            return {
                value: [0, 69],
                dotOptions: [{
                    disabled: false
                }, {
                    disabled: false
                }],
                metroList: [
                    {value: 'Станция метро', id: 0},
                    {value: 'Новослободская', id: 1},
                    {value: 'Проспект мира', id: 2},
                    {value: 'Комсомольская', id: 3},
                    {value: 'Курская', id: 4},
                    {value: 'Таганская', id: 5},
                    {value: 'Павелецкая', id: 6},
                    {value: 'Добрынинская', id: 7},
                    {value: 'Октябрьская', id: 8},
                    {value: 'Парк культуры', id: 9},
                    {value: 'Киевская', id: 10},
                    {value: 'Краснопресненская', id: 11}
                ],
                typeList: [
                    {value: 'Тип жилья', id: 0},
                    {value: 'Вариант 1', id: 1},
                    {value: 'Вариант 2', id: 2},
                    {value: 'Вариант 3', id: 3}
                ],
                squareList: [
                    {value: 'Площадь', id: 0},
                    {value: '30 м² - 40 м²', id: 1},
                    {value: '40 м² - 50 м²', id: 2},
                    {value: '50 м² - 60 м²', id: 3},
                    {value: '60 м² - 70 м²', id: 4},
                    {value: '70 м² - 80 м²', id: 5},
                    {value: '80 м² - 90 м²', id: 6},
                    {value: '100 м² - 110 м²', id: 7}
                ],
                facingList: [
                    {value: 'Тип отделки', id: 0},
                    {value: 'без отделки', id: 1},
                    {value: 'возможна', id: 2}
                ],
                deadlineList: [
                    {value: 'Срок сдачи', id: 0},
                    {value: 'Вариант 1', id: 1},
                    {value: 'Вариант 2', id: 2},
                    {value: 'Вариант 3', id: 3}
                ]
            }
        },
        computed: {
            preposition1() {
                return this.value[0] < this.value[1] ? 'от' : 'до'
            },
            preposition2() {
                return this.value[0] < this.value[1] ? 'до' : 'от'
            }
        }
    }
</script>

<style lang="scss" scoped>

    .block {
        background: linear-gradient(
                        rgba(0, 0, 0, 0.5),
                        rgba(0, 0, 0, 0.5)
        ), url(../assets/filter-panel/background.jpg) 0 0 no-repeat;
        padding: 70px 0;

        .title {
            margin: 0;
            padding: 18px 0 48px;
            text-align: center;
            color: white;
            font-size: 40px;
            font-weight: 500;
        }
        .panel {
            display: flex;
            flex-direction: column;
            padding: 30px;
            background-color: #fff;
            border-radius: 5px;
            .panel__description {
                font-size: 14px;
                font-weight: 300;
                margin-bottom: 14px;
            }
            .panel__filter-1 {
                margin-bottom: 1em;
                display: flex;
                align-items: center;
                .filter__price {
                    margin-left: 2em;
                    margin-right: 4em;
                    width: 800px !important;
                }

                .custom-dot {
                    cursor: pointer;
                    display: flex;
                    justify-content: space-between;
                    width: 60px;
                    position: absolute;
                    padding: 8px;
                    bottom: -9px;
                    left: -30px;
                    background-color: #f7f7f7;
                    border: 1px solid #e1e1e1;
                    border-radius: 15px;
                    .custom-dot__decoration-left, .custom-dot__decoration-right {
                        color: #d1d1d1;
                        font-size: 12px;

                    }
                    .custom-dot__value {
                        color: #5e5e5e;
                        font-size: 12px;
                    }
                    .custom-dot__decoration-left {
                        padding-right: 7px;
                    }
                    .custom-dot__decoration-right {
                        padding-left: 7px;
                    }
                }

                .vue-slider-process {
                    background-color: #74cfb7;
                    min-height: 8px;
                    top: -2px !important;
                }

                .filter__region {
                    display: flex;
                    flex-direction: column;
                    .region__row {
                        align-items: center;
                        display: flex;
                        flex-direction: row;
                        margin-bottom: 8px;
                        input {
                            margin-right: 10px;
                        }
                        label {
                            cursor: pointer;
                            font-size: 14px;
                            font-weight: 300;
                            width: max-content;
                        }
                    }
                }
            }

            .panel__filter-2 {
                display: flex;
                select {
                    border-right: 1px solid #dddddd;
                    appearance: none;
                    text-align: center;
                    min-width: 185px;
                    cursor: pointer;
                    padding: 20px;
                    background: #f7f7f7 url(../assets/icons/arrow-down.jpg) no-repeat center right;

                    &:last-child {
                        border-right: none;
                    }
                }
            }
        }
    }

    @media (min-width: 992px) and (max-width: 1279px) {
        .block {
            .panel {
                .panel__filter-2 {
                    select {
                        min-width: 140px;
                        background: #f7f7f7 url(../assets/icons/arrow-down-v2.jpg) no-repeat center right;
                    }
                }
            }
        }
    }

    @media (max-width: 767px) {
        .block {
            background: white;
            padding-top: 15px;
            padding-bottom: 0;
            .title {
                color: #222222;
                padding-bottom: 0;
                font-size: 25px;;
            }
        }
    }

    @media (max-width: 991px) {
        .block {
            .panel {
                .panel__filter-2 {
                    flex-direction: column;
                    select {
                        width: 100%;
                        border-bottom: 1px solid #dddddd;
                        border-right: none;
                        &:nth-last-child(-n+2) {
                            border-bottom: none;
                            margin-bottom: 1em;
                        }
                    }

                }
            }
        }
    }

    @media (min-width: 480px) and (max-width: 767px) {
        .block {
            .title {
                font-size: 25px;
            }
            .panel {
                .panel__description {
                    margin-bottom: 1.5em;
                }
                .panel__filter-1 {
                    flex-direction: column;
                    align-items: flex-start;
                    .filter__price {
                        width: 85% !important;
                        margin-bottom: 1.5em;
                    }
                }
                .panel__filter-2 {
                    flex-direction: column;
                    select {
                        width: 100%;
                    }
                }
            }
        }
    }

    @media (min-width: 320px) and (max-width: 479px) {
        .block {
            .title {
                font-size: 25px;
            }
            .panel {
                .panel__description {
                    margin-bottom: 1.5em;
                }
                .panel__filter-1 {
                    flex-direction: column;
                    align-items: flex-start;
                    .filter__price {
                        width: 80% !important;
                        margin-bottom: 1.5em;
                    }
                }
            }
        }
    }

</style>
