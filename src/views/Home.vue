<template>
  <div class="home">
    <div class="right">
      <button class="btn-right">
        <font-awesome-icon icon="phone" class="icon"></font-awesome-icon>
        Обратный звонок
      </button>
      <button class="btn-right">
        <font-awesome-icon icon="calendar-alt" class="icon"></font-awesome-icon>
        Записаться на показ
      </button>
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
      position: fixed;
      right: 0;
      top: 40%;

      button:first-child {
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
