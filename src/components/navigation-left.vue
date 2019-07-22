<template>
    <div class="block">
        <div class="block__header">
            <a class="header__link" href="#">
                <img class="header__image" src="../assets/header/logo.jpg" alt="">
            </a>
            <span class="header__title">Агенство недвижимости</span>
        </div>

        <hr class="block__line">

        <ul class="menu">
            <li><a href="#" class="menu__link active">Новостройки</a></li>
            <li><a href="#" class="menu__link">Элитная недвижимость</a></li>
            <li><a href="#" class="menu__link">Коммерческая недвижимость</a></li>
            <li><a href="#" class="menu__link">Загородная недвижимость</a></li>
            <li><a href="#" class="menu__link">Услуги</a></li>
            <li><a href="#" class="menu__link">Контакты</a></li>
        </ul>

        <hr class="block__line">

        <div class="menu__search">
            <label for="search"></label>
            <input class="menu__search-field" id="search" type="text" placeholder="Введите запрос">
            <a href="#" class="menu__link-search">
                <font-awesome-icon icon="search" class="menu__search-icon"></font-awesome-icon>
            </a>
        </div>

        <hr class="block__line">

        <ul class="menu">
            <li class="right">
                <font-awesome-icon icon="phone" class="icon"></font-awesome-icon>
                <a href="#" class="menu__link">Обратный звонок</a>
            </li>
            <li class="right">
                <font-awesome-icon icon="calendar-alt" class="icon"></font-awesome-icon>
                <a href="#" class="menu__link">Записаться на показ</a>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    .block {
        z-index: 10;
        width: 300px;
        min-height: 100vh;
        background-color: #1f1f1f;

        .block__header {
            display: flex;
            align-items: center;
            margin-bottom: 1em;
            .header__image {
                width: 100px;
                padding-right: 1em;
            }
            .header__title {
                color: white;
                font-size: 20px;
                font-weight: 500;
            }
        }
        .block__line {
            margin: 0;
        }
    }
    .menu {
        padding: 1em 1em 0 1em;
        display: flex;
        flex-direction: column;

        .icon {
            color: #d0f4e3;
            margin-right: 1em;
            font-size: 13px;
        }

        .right {
            display: flex;
            .menu__link {
                font-size: 13px;
                font-weight: 400;
                color: #d0f4e3;
            }
        }

        .menu__item {
            margin-bottom: 1px;
            display: block;
        }
        .menu__link {
            margin-bottom: .8em;
            text-transform: uppercase;
            font-size: 14px;
            font-weight: 500;
            color: white;
            display: block;
        }
        .active {
            color: #74cfb7;
        }
    }
    .menu__search {
        margin: 1em 0;
        padding: 0 1em;
        display: flex;
        align-items: center;

        .menu__search-field {
            padding: .5em 1em;
            font-size: 14px;
            width: 80%;
            margin-right: 1em;
        }
        .menu__link-search {
            font-size: 16px;
            color: #74cfb7;
        }
    }

    @media (min-width: 320px) and (max-width: 479px) {
        .block {
            width: 280px;
        }
    }
</style>
