<template>
    <div class="block">
        <yandex-map
                class="yandex-map"
                :zoomControl="{}"
                :coords="[55.75370903771494, 37.61981338262558]"
                :scroll-zoom="true"
                zoom="10"
                :cluster-options="{1: {clusterDisableClickZoom: true}}"
                :behaviors="['ruler']"
                :controls="['trafficControl']"
                :placemarks="placemarks"
                map-type="map"
        >

        </yandex-map>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                placemarks: [
                    {
                        coords: [54.8, 39.8],
                        properties: {}, // define properties here
                        options: {}, // define options here
                        clusterName: "1",
                        callbacks: { click: function() {} }
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .block {
        img {
            display: block;
            width: 100%;
            height: auto;
        }
    }

    @media (min-width: 768px) {
        .block {
            .yandex-map {
                padding: 1.5%;
                width: 97%;
                height: 500px;
            }
        }
    }
</style>
