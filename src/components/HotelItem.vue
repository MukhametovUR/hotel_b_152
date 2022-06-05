<!-- Декомпозиция HotelList -->

<template>
    <div class="hotel"> 
        <div class="hotel-item">Название <strong> {{ hotel.name }} </strong></div>
        <div class="hotel-item">Цена за сутки <strong> {{ hotel.price }} </strong></div>
        <div class="hotel-item">Количество звезд <strong> {{ hotel.stars }} </strong></div>
        <div class="hotel-item">Расстояние до центра <strong> {{ hotel.distance }} км </strong></div>
    </div>
</template>

<script>
export default {
name:'hotel-item',
// Пробрасываем пропсы для регистрации экземпяра
props:{
    hotel:{
        type:Object,
        required:true,
    }
}


}
</script>

<style>
.hotel {
    padding: 15px;
    margin-top: 10px;
    border: 2px solid teal;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>