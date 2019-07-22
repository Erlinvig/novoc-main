<template>
    <div class="block">
        <div class="container">
            <ul class="menu">
                <li class="menu__search-field" :class="{'menu__search-field--open': isOpenSearchPanel}">
                    <font-awesome-icon icon="arrow-circle-left" class="menu__back" @click="back"></font-awesome-icon>
                    <label for="search"></label>
                    <input id="search" type="text" placeholder="Введите запрос">
                </li>
                <li><a href="#" class="menu__item active">Новостройки</a></li>
                <li><a href="#" class="menu__item">Элитная недвижимость</a></li>
                <li><a href="#" class="menu__item">Коммерческая недвижимость</a></li>
                <li><a href="#" class="menu__item">Загородная недвижимость</a></li>
                <li><a href="#" class="menu__item">Услуги</a></li>
                <li><a href="#" class="menu__item">Контакты</a></li>
                <li><a href="#" class="menu__item" @click="search">
                    <font-awesome-icon icon="search" class="menu__search"></font-awesome-icon>
                </a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isOpenSearchPanel: false
            }
        },

        methods: {
            search() {
                if (!this.isOpenSearchPanel) {
                    this.isOpenSearchPanel = true;
                } else {
                    console.log('Поиск по запросу');
                }
            },
            back() {
                this.isOpenSearchPanel = false;
            }
        }
    }
</script>

<style lang="scss" scoped>

    .menu {
        display: flex;
        justify-content: space-between;
        padding: 26px 0;
        border-bottom: 4px solid #74cfb7;

        .menu__search-field--open {
            display: flex !important;
            min-width: 1150px;
            transition: .5s ease;

            input {
                opacity: 1 !important;
            }
            .menu__back {
                opacity: 1 !important;
            }
        }


        .menu__search-field {
            position: absolute;
            display: none;
            align-items: center;
            margin-top: -5px;
            background-color: #fff;
            transition: .5s ease;
            input {
                font-size: 18px;
                opacity: 0;
            }
            .menu__back {
                margin-right: 1em;
                width: 2em;
                height: 2em;
                cursor: pointer;
                transition: .5s ease;
                opacity: 0;

                &:hover {
                    color: #74cfb7;
                }
            }

        }

        .menu__item {
            text-transform: uppercase;
            font-weight: 500;
            font-size: 13px;
            transition: .3s ease;
            color: #404853;

            &:hover {
                color: #74cfb7;
            }
        }
        .active {
            color: #74cfb7;
        }
        .menu__search {
            color: #74cfb7;
            font-size: 15px;
            transition: .5s;

            &:hover {
                color: #079fc2;
            }
        }
    }

    @media (min-width: 992px) and (max-width: 1279px) {
        .menu {
            .menu__item {
                font-size: 12px;
            }
            .menu__search-field--open {
                min-width: 910px;
            }
        }
    }

</style>
