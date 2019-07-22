<template>
  <div id="app">
      <navigation-left class="navigation-left" :class="{'navigation-left--open': isOpenMenu}"/>
      <app-header />
      <navigation class="navigation"/>
    <router-view/>
  </div>
</template>

<script>
    import appHeader from './components/header';
    import navigation from './components/navigation';
    import navigationLeft from './components/navigation-left'

    export default {
        components: {
            appHeader,
            navigation,
            navigationLeft
        },
        methods: {

        },
        computed: {
            isOpenMenu() {
                return this.$store.getters['isOpenMenu']
            }
        }
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap&subset=cyrillic');

    .navigation-left {
        position: fixed;
        min-height: 100%;
        left: -100%;
        transition: .5s ease;
    }

    .navigation-left--open {
        left: 0;
    }

    li {
        list-style-type: none;
    }

    a {
        text-decoration: none;
        color: black;
    }

    body, p, li, ul, a, input, select {
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        font-family: "Roboto", "sans-serif";
    }
    
    p {
      font-family: "Roboto", sans-serif;
    }
      
    .btn-green {
        outline: none;
        border: none;
        cursor: pointer;
        text-decoration: none;
        background-color: #74cfb7;
        color: white;
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        padding: 17px 75px;
        font-size: 13px;
        border-radius: 4px;
        transition: .5s ease;

        &:hover {
            background-color: #079fc2;
        }
    }

    .btn-blue {
        outline: none;
        border: none;
        cursor: pointer;
        text-decoration: none;
        background-color: #079fc2;
        color: white;
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        padding: 17px 75px;
        font-size: 13px;
        border-radius: 4px;
        transition: .5s ease;

        &:hover {
            background-color: #74cfb7;
        }
    }

    .btn-right {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 70px;
        height: 70px;
        outline: none;
        border: none;
        cursor: pointer;
        text-decoration: none;
        background-color: #74cfb7;
        color: white;
        font-family: "Roboto", sans-serif;
        font-size: 11px;
        font-weight: 400;
        border-radius: 4px 0 0 4px;
        transition: .5s ease;

        &:hover {
            background-color: #079fc2;
        }
    }

    .container {
        margin: 0 auto;
        width: 100%;
        max-width: 1200px;
    }

    .burger {
        width: 50px;
        height: 50px;
        position: relative;

        .burger__item,
        .burger__item::before,
        .burger__item::after {
            position: absolute;
            top: 50%;
            margin-top: -1.5px;
            left: 50%;
            margin-left: -12px;
            width: 24px;
            height: 3px;
            background-color: #222222;
        }

        .burger__item::before,
        .burger__item::after {
            content: '';
            transition: .2s ease;
        }
        .burger__item::before {
            transform: translateY(-8px);
        }
        .burger__item::after {
            transform: translateY(8px);
        }
    }
    .burger__active .burger__item::before {
        transform: rotate(45deg);
    }
    .burger__active .burger__item::after {
        transform: rotate(-45deg);
    }
    .burger__active .burger__item {
        height: 0;
    }

    @media (min-width: 1280px) {
        .container {
            max-width: 1200px;
        }
    }

    @media (min-width: 992px) and (max-width: 1279px) {
        .container {
            max-width: 950px;
        }
    }

    @media (min-width: 768px) and (max-width: 991px) {
        .container {
            width: 95%;
        }
        .navigation {
            display: none;
        }
    }

    @media (min-width: 480px) and (max-width: 767px) {
        .container {
            width: 100%;
        }
        .navigation {
            display: none;
        }
    }

    @media (min-width: 320px) and (max-width: 479px) {
        .container {
            width: 100%;
        }
        .navigation {
            display: none;
        }
    }

    @media (max-width: 319px) {
        .container {
            width: 100%;
        }
        .navigation {
            display: none;
        }
    }
</style>
