<template>
  <div class="btn-wrapper">
    <div class="left"></div>
    <a href="#" class="btn">
      {{ btnText }}
    </a>

    <div class="right"></div>
  </div>
</template>
<style lang="scss" scoped>
@import "./style.scss";
</style>
<script>
export default {
  props: {
    btnText: {
      type: String,
      default: "Узнать больше"
    }
  }
};
</script>
