<template>
  <div>
    <h1>Список гостиниц</h1>
    <my-select v-model="selectedSort" :options="sortOptions"  class="select-hotels" />
    <hotel-list />
  </div>
</template>

<script>
import HotelList from "../components/HotelList.vue";
import CommentForm from "../components/Forms/CommentForm.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    HotelList,
    CommentForm,
  },
  data: () => ({
    selectedSort: "", //Создаем модель для привязки к комопненту my-select
    //Значения выпадающего списка my-select
    sortOptions: [
      { value: "name", name: "По возрастанию названию" },
      { value: "nameRe", name: "По убыванию названию" },
      { value: "price", name: "По цене" },
      { value: "stars", name: "По кол. звезд" },
      { value: "distance", name: "По расстоянию" },
    ],
  }),
  computed: mapGetters(["allHotels"]),
  watch: {
    //Наблюдаемое свойство за моделью selectedSort
    selectedSort(newValue) {
      if (newValue === "name") {
        this.allHotels.sort((hotel1, hotel2) => {
          //сортировка по алфавиту
          return hotel1[newValue]?.localeCompare(hotel2[newValue]);
        });
        if (newValue === "nameRe") {
          this.allHotels.sort((hotel1, hotel2) => {
            //сортировка по алфавиту в обратном порядке
            return hotel2[newValue]?.localeCompare(hotel1[newValue]);
          });
        }
      } else {
        this.allHotels.sort((a, b) => {
          //сортировка по числам
          return a[newValue] > b[newValue] ? 1 : -1;
        });
      }
    },
  },
};
</script>

<style lang="scss">
.container {
  display: flex;
  justify-content: space-around;
}
.select-hotels {
  align-items: end;
  cursor: pointer;
}
</style>