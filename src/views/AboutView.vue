<template>
  <h1>Все комментарии</h1>
  <div v-for="comment in allComments" :key="comment.id">
    <div>{{comment.title}}</div>
    <div>{{comment.body}}</div>
    <div>{{comment.stars}}</div>
    <div>{{comment.author}}</div>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
name:"about",
computed: mapGetters(['allComments'])
}
</script>

<style>

</style>
