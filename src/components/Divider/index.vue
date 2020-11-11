<template>
  <div class="divider">
    <div class="divider__icon">
      <img
        :src="require(`../../assets/icons/${src}`)"
        alt="magestic icon"
        class="divider__img"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "./style.scss";
</style>

<script>
export default {
  props: {
    src: {
      type: String,
      default: "icon-magestic6.svg"
    }
  }
};
</script>
