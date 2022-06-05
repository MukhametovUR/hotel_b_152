<template>
  <div >
    <div class="header-list">
      <span class="hotel-item">Название</span>
      <span class="hotel-item">Стоимость за сутки</span>
      <span class="hotel-item">Количество звезд</span>
      <span class="hotel-item">Расстояние до центра</span>
      <span class="hotel-item"></span>
    </div>
     <transition-group name="hotel-list">
          <hotel-item
        v-for="hotel in $store.state.hotels"
        :hotel="hotel" 
        :key="hotel.id" 
        class="hotel"
      />
     </transition-group>
  </div>
</template>

<script>
import HotelItem from './HotelItem.vue'
export default {
name:'hotel-list',
    components:{
        HotelItem
    },
}
</script>

<style lang="scss">
.hotel {
    padding: 15px;
    margin-top: 10px;
    border: 2px solid teal;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-item {
        display: flex;
        flex-direction: column;
        padding: 10px 0;
    }
}
.hotel-list-move {
  transition: transform 0.8s ease;
}
.header-list {
  display: flex;
  justify-content: space-between;
}

</style>