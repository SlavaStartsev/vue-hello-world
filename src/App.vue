<template>
  <div>
    <div v-for="item in 10" :key="item">{{ item }}</div>
  </div>
</template>

<script>
export default {
  props: ["items", "its"],
};
</script>


<style scoped>
.full-width {
  width: 100%;
}
.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>