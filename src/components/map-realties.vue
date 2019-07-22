<template>
    <div class="block">
        <img src="../assets/map/Bitmap.png" alt="">
    </div>
</template>

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
            img {
                width: 97%;
                padding: 1.5%;
            }
        }
    }
</style>
