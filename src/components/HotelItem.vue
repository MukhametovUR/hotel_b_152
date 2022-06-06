<!-- Декомпозиция HotelList -->

<template>
  <div class="content">
    <img
      src="https://storage.googleapis.com/static-content-hc/sites/default/files/cataloina_porto_doble_balcon2_2.jpg"
      class="content-img"
      alt="appartament"
    />
    <div class="hotels">
      <div class="hotel-name">
        <strong> {{ hotel.name }} </strong>
      </div>
      <div class="hotel-stars" v-if="hotel.stars >= 5">
        <strong> {{ hotel.stars }} звезд</strong>
      </div>
      <div class="hotel-stars" v-if="hotel.stars < 5">
        <strong> {{ hotel.stars }} звезды</strong>
      </div>
      <div class="hotel-price">
        <strong> {{ hotel.price }} р. за сутки </strong>
      </div>
      <div class="hotel-distance">
        <strong> {{ hotel.distance }} км до центра</strong>
      </div>
    </div>
    <router-link :to="{ name: 'HotelIdPage', params: { id: hotel.id } }"
      ><my-button>Подробно</my-button></router-link
    >
  </div>
</template>

<script>
export default {
  name: "hotel-item",
  // Пробрасываем пропсы для регистрации экземпяра
  props: {
    hotel: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  padding: 15px;
  margin-top: 10px;
  border: 2px solid teal;
  display: flex;
  align-items: center;
  justify-content: space-around;

  &-img {
    height: 150px;
  }
}
.hotels {
  display: flex;
  justify-content: space-around;
  flex-grow: 1;
}
.hotel {
  &-name {
    color: blue;
    font-size: 24px;
  }
}
</style>