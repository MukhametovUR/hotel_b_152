<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style>
.btn {
  cursor:pointer;
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: teal;
  border-radius: 5px;
}
</style>