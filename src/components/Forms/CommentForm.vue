<template>
  <form @submit.prevent="submit" class="form">
    <h4>Оставить отзыв:</h4>
    <my-input
      type="text"
      class="form-input"
      v-model:value="comment.body"
      @input="comment.body = $event.target.value"
      placeholder="Комментарий"
    />
    <my-input
      type="number"
      min="1"
      max="5"
      class="form-input"
      v-model:value="comment.stars"
      @input="comment.stars = $event.target.value"
      placeholder="Количетсов звезд"
    />
    <my-input
      type="text"
      class="form-input"
      v-model:value="comment.author"
      @input="comment.author = $event.target.value"
      placeholder="Автор"
    />
    <my-button type="submit" class="btn-comment">Отправить</my-button>
  </form>
</template>

<script>
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "comment-form",
  props: ["id"],
  data: () => ({
    comment: {
      title: "",
      body: "",
      stars: "",
      author: "",
    },
  }),

  methods: {
    ...mapMutations(["createComment"]), //Вызываем мутацию vuex
    submit() {
      if (
        this.comment.body != "" &&
        this.comment.stars != "" &&
        this.comment.stars != "author"
      ) {
        this.createComment(
          {
            // // id: Date.now(),
            title: this.allHotel[0].name,
            comment: this.comment,
          },
          (this.comment = {
            id: "",
            title: "",
            body: "",
            stars: "",
            author: "",
          })
        );
      }
    },
  },
  computed: mapGetters(["allHotel"]),
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  margin: 10% 20%;
  border: 1px solid teal;
  &-input {
    margin: 5px 10px;
  }
}
.btn-comment {
  align-self: center;
  margin-bottom: 10px;
}
.select-hotel {
  border: 1px solid teal;
  margin-top: 15px;
  height: 40px;
  padding-left: 10px;
  margin: 5px 10px;
}
</style>