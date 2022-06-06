<template>
  <div>
    <div v-for="hotel in allHotel" :key="hotel.id" class="container">
      <div v-if="hotel.id == id">
        <h1>Гостиница {{ hotel.name }}</h1>
        <img
          src="https://media.radissonhotels.net/image/metropolitan-hotel-sofia-a-member-of-radisson-individuals/exteriorview/16256-145921-f72742573_3xl.jpg?impolicy=Card&gravity=North"
          class="hotel-img"
          alt="hotel"
        />
        <div class="hotel-item">
          Стоимость проживания за сутки:
          <strong> {{ hotel.price }} рублей </strong>
        </div>
        <div class="hotel-item">
          Количество звезд: <strong> {{ hotel.stars }} </strong>
        </div>
        <div class="hotel-item">
          Расстояние до центра: <strong>{{ hotel.distance }}</strong> км
        </div>
        <p class="hotel-item text">
          <strong>Описание:</strong> Гостиница расположена в самом сердце
          Санкт-Петербурга, благодаря такому выгодному расположению постояльцы
          могут добраться до основных достопримечательностей, затратив при этом
          минимум времени. Отель отвечает всем требованиям современной
          гостиничной индустрии и станет прекрасным выбором для гостей, которые
          ценят уют и качество. К услугам клиентам отеля круглосуточная стойка
          регистрации с приветливым персоналом, готовым проконсультировать и
          оказать помощь по любому вопросу. Обширный номерной фонд представлен
          светлыми и комфортными двухместными номерами в числе удобств которых:
          кровати с мягкими ортопедическими матрасами, мебель из натурального
          дерева, кондиционер и собственная ванная комната с современной душевой
          кабиной и туалетно-косметическими принадлежностями, которые
          предоставляются бесплатно. Стильный интерьер выдержан в приятных
          пастельных тонах и помогает гостям отеля окунуться в домашнюю
          атмосферу. Питание организовано на высшем уровне. На территории
          гостиницы работает отличный ресторан, где можно заказать изысканные
          блюда по доступным ценам, а в баре представлен огромный ассортимент
          напитков на любой вкус. Для проведения деловых встреч и переговоров
          гостям предоставляется просторный конференц-зал со всем необходимым
          оборудованием и техникой. Расстояние до аэропорта — 15,6 км, а до
          железнодорожного вокзала — 0,2 км.
        </p>
      </div>
    </div>
    <CommentForm />
        
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CommentForm from "../components/Forms/CommentForm.vue";
export default {
  components: {
    CommentForm,
  },
  props: ["id"],
  //Получили id из vue-router


  computed: mapGetters(["allHotel", "allComments"]),
  //получаем данные из метода mapGetters vuex
};
</script>

<style scoped>
.hotel-item {
  margin-bottom: 10px;
}
.hotel-img {
  height: 200px;
}
.text {
  text-align: justify;
}
</style>