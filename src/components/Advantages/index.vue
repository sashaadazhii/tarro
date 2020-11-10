<template>
  <section class="dark">
    <div class="container">
      <ul class="advantages">
        <li class="advantages__item">
          <div class="advantages__icon">
            <img
              src="../../assets/images/magestic-year.png"
              class="advantages__img"
              alt="magestic advantages"
            />
          </div>
          <div class="advantages__num">22</div>
          <div class="advantages__text">года теории и практики</div>
        </li>

        <li class="advantages__item">
          <div class="advantages__icon">
            <img
              src="../../assets/images/magestic-expir.png"
              class="advantages__img"
              alt="magestic advantages"
            />
          </div>
          <div class="advantages__num">7</div>
          <div class="advantages__text">лет интенсивного обучения</div>
        </li>
        <li class="advantages__item">
          <div class="advantages__icon">
            <img
              src="../../assets/images/magestic-studets.png"
              class="advantages__img"
              alt="magestic advantages"
            />
          </div>
          <div class="advantages__num">1000+</div>
          <div class="advantages__text">счастливых выпускников</div>
        </li>
      </ul>
      <TheButton btnText="Стать учеником школы Нумерология по таро 3.0" />
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import "./style.scss";
</style>

<script>
import TheButton from "@/components/TheButton";

export default {
  data: () => ({ btnText: String }),
  components: {
    TheButton
  }
};
</script>
