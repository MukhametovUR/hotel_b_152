<template>
  <div class="list-hotels">
    <transition-group name="hotel-list">
      <hotel-item
        v-for="hotel in allHotels"
        :hotel="hotel"
        :key="hotel.id"
        class="hotel"
      />
    </transition-group>
  </div>
</template>

<script>
import HotelItem from "./HotelItem.vue";
import { mapGetters } from "vuex";
export default {
  name: "hotel-list",
  components: {
    HotelItem,
  },
  computed: mapGetters(["allHotels"]), //получаем данные из метода mapGetters vuex
};
</script>

<style lang="scss" scoped>
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
.list-hotels {
  margin-bottom: 100px;
}
</style>