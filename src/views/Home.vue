<template>
  <div class="home">
    <div class="right">
      <a class="btn-right">
        <font-awesome-icon icon="phone" class="icon"></font-awesome-icon>
        <span>Обратный звонок</span>
      </a>
      <a class="btn-right">
        <font-awesome-icon icon="calendar-alt" class="icon"></font-awesome-icon>
        <span>Записаться на показ</span>
      </a>
    </div>
    <filter-panel />
    <app-map />
    <realty />
    <office />
    <app-footer />
  </div>
</template>

<script>
  import appHeader from '../components/header';
  import navigation from '../components/navigation';
  import filterPanel from '../components/filter-panel'
  import appMap from '../components/map-realties'
  import realty from '../components/realty';
  import office from '../components/office';
  import appFooter from '../components/footer'

  export default {
    name: 'home',
    components: {
      appHeader,
      navigation,
      filterPanel,
      appMap,
      realty,
      office,
      appFooter
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    .right {
      z-index: 1;
      position: fixed;
      right: 0;
      top: 40%;
      a {
        display: flex;
        flex-direction: column;

        span {
          text-align: center;
          user-select: none;
        }
      }

      a:first-child {
        margin-bottom: 6px;
      }

      .icon {
        font-size: 20px;
        padding: 8px 0 8px;
      }
    }
  }

  @media (max-width: 991px) {
    .right {
      display: none;
    }
  }
</style>
