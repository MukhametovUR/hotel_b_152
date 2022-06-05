<!-- Декомпозиция HotelList -->

<template>
    <div class="hotel"> 
        <div class="hotel-item"> <strong> {{ hotel.name }} </strong></div>
        <div class="hotel-item"> <strong> {{ hotel.price }} </strong></div>
        <div class="hotel-item"> <strong> {{ hotel.stars }} </strong></div>
        <div class="hotel-item"> <strong> {{ hotel.distance }} км </strong></div>
        <router-link :to="{ name: 'HotelIdPage', params: { id: hotel.id } }" class="menu-item"><my-button >Подробно</my-button></router-link>
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
},
watch: {
  $route(to, from) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
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
    justify-content: space-around;
}
.hotel-item {
    width: 100px;
    flex-grow: 1;
}
</style>