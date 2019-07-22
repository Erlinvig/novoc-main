<template>
    <div class="block">
        <div class="container">
            <div class="realty">
                <realty-card class="realty__card" v-for="realty in realties" :key="realty._id" :realty="realty" />
            </div>
            <div class="all-suggestion">
                <button class="btn-green">ВСЕ ПРЕДЛОЖЕНИЯ</button>
            </div>
        </div>
    </div>
</template>

<script>
import realtyCard from './realtyCard';

export default {
    components: {
        realtyCard
    },
    data() {
        return {
            realties: [
                {
                    _id: 1,
                    title: 'Микрорайон Некрасовка',
                    metro: 'Марьина роща',
                    time: '2 минуты пешком',
                    address: 'Москва, ЮВАО, район Некрасовка, Люберецкие поля аэрации',
                    rooms: [
                        {_id: 0, count: '1-комнатные от 30 м²', price: 'от 4 026 843 р.'},
                        {_id: 1, count: '2-комнатные от 75 м²', price: 'от 22 900 000 р.'},
                        {_id: 2, count: '3-комнатные от 74 м²', price: 'от 17 400 000 р.'},
                        {_id: 3, count: '4-комнатные от 177 м²', price: 'от 63 200 000 р.'}
                    ],
                    state: 'Монтаж завершен. Ввод дома в эксплуатацию в 4 квартале 2019 года / На заселении.',
                    mortgage: 'Есть',
                    facing: 'Возможна',
                    image: require('../assets/realties/home-1.png')
                },
                {
                    _id: 2,
                    title: 'ДОМ «Флагман»',
                    metro: 'Выхино',
                    time: '10 минут на транспорте',
                    address: 'Московская область, г. Долгопрудный, ул. Набережная',
                    rooms: [
                        {_id: 0, count: '1-комнатные от 30 м²', price: 'от 3 239 397 р.'},
                        {_id: 1, count: '2-комнатные от 75 м²', price: 'от 4 734 000 р.'},
                        {_id: 2, count: '3-комнатные от 74 м²', price: 'от 6 512 440 р.'}
                    ],
                    state: 'Введен в эксплуатацию / На заселении.',
                    mortgage: 'Есть',
                    facing: 'Возможна',
                    image: require('../assets/realties/home-2.png')
                },
                {
                    _id: 3,
                    title: 'ЖК «Лайково»',
                    metro: 'Ховрино',
                    time: '15 минут на транспорте',
                    address: 'Московская область, г. Долгопрудный, ул. Дирижабельная',
                    rooms: [
                        {_id: 0, count: '1-комнатные от 30 м²', price: 'от 6 900 000 р.'},
                        {_id: 1, count: '2-комнатные от 75 м²', price: 'от 22 900 000 р.'},
                        {_id: 2, count: '3-комнатные от 74 м²', price: 'от 17 400 000 р.'},
                        {_id: 3, count: '4-комнатные от 177 м²', price: 'от 63 200 000 р.'}
                    ],
                    state: 'Монтаж завершен. Ввод дома в эксплуатацию в 4 квартале 2019 года / На заселении.',
                    mortgage: 'Есть',
                    facing: 'Возможна',
                    image: require('../assets/realties/home-3.png')
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .block {
        padding: 60px 0;
        background-color: #f7f7f7;

        .realty {
            margin-bottom: 50px;
            .realty__card {
                margin-bottom: 35px;
            }
        }

        .all-suggestion {
            display: flex;
            justify-content: center;
            width: auto;
        }
    }

    @media (max-width: 767px) {
        .block {
            padding: 30px 0 60px;
        }
    }
</style>
