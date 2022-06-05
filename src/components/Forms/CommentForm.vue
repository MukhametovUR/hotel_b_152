<template>
    <form submit.prevent class="form">
      <h4>Оставить отзыв:</h4>
      <my-input type="text" class="form-input" v-model="name" placeholder="Название" />
      <my-input type="text" class="form-input" v-model="pluses" placeholder="Плюсы" />
      <my-input type="text" class="form-input" v-model="minuses" placeholder="Минусы" />
      <my-input type="text" class="form-input" v-model="comment" placeholder="Комментарий" />
      <my-input type="text" class="form-input" v-model="author" placeholder="Автор" />
      <my-button @click="createComment" class="btn-comment">Отправить</my-button>
    </form>
</template>

<script>
export default {
name:'comment-form',
props: ['id'],
data: () => ({
    name: '',
    pluses:'',
    minuses:'',
    comment:'',
    author:'',
  }),

methods: {
    createComment(){//Метод отправки отзыва о гостинице в глобальное хранилище store
      $store.state.commnents
    }
  }
}
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