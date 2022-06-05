<template>
      <div class="menu">
        <!-- vue-router для перехода между страницами -->
          <router-link to="/" class="menu-item">Главная</router-link>
          <router-link to="/hotels" class="menu-item">Гостиницы</router-link>
          <router-link to="/about" class="menu-item">О нас</router-link>
      </div>
</template>

<script>
export default {
name:'Header'
}
</script>

<style lang="scss">
.wrp {}
.menu {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  list-style: none;
  align-items: center;
  background: blueviolet;
  padding:10px 0;
  &-item {
    color:#fff;
  }
}
 


</style>