<template>
  <div class="container container--narrow">
    <div class="calc-wrapper">
      <h5 class="block-title">
        Калькулятор: Д.М.Г. рождения + трактовка арканов
      </h5>

      <form class="form" @submit.prevent="getSum">
        <div class="input-wrapper">
          <input
            type="number"
            placeholder="дд"
            maxlength="2"
            min="1"
            max="31"
            class="input"
            required
            v-model="day"
          />
        </div>
        <div class="input-wrapper">
          <input
            type="number"
            placeholder="мм"
            maxlength="2"
            class="input"
            min="1"
            max="12"
            v-model="month"
            required
          />
        </div>
        <div class="input-wrapper">
          <input
            type="number"
            placeholder="гг"
            maxlength="4"
            minlength="4"
            min="1900"
            max="2020"
            required
            class="input"
            v-model="year"
          />
        </div>
        <div class="input-wrapper">
          <input type="submit" value="Рассчитать" class="input input--btn" />
        </div>
      </form>

      <div class="output" v-if="calc">
        Поздравляю! Ваше число судьбы:
        <strong> {{ number.num }} ({{ number.title }}) </strong>
      </div>

      <div class="content">
        <strong
          >Вы молодец, потому что вошли в число 7% людей на планете, кто узнал о
          числе своей Души.</strong
        >
        НО! Чтобы расширить свои знания о себе, нужно двигаться дальше…
        <span class="content--small">
          если по сумме чисел у вас получилось 22 – ваше число 4 –
          «Император».</span
        >
      </div>
    </div>
    <div class="form-block">
      <div class="icon-wrapper">
        <img
          src="../../assets/icons/icon-magestic3.svg"
          alt="magestic"
          onerror="../../assets/images/icon-magestic3.png"
        />
      </div>
      <h5 class="form-title">
        В упражнении был фрагмент из моей книги
        <strong>«Нумерология по Таро 2.0»</strong>
      </h5>
      <div class="content content--form">
        <strong
          >Подписавшись на рассылку, вы получите в подарок книгу
          целиком.</strong
        >
        С помощью нее вы сможете узнать о себе намного больше! В этой рассылке
        вы получите серию фрагментов записей уроков одной из школ. Записи моих
        вебинаров доступны только подписчикам ASASproject:
      </div>
      <TheForm />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "./style.scss";
</style>
<script>
import { numbers } from "@/assets/js/calc.js";
import TheForm from "@/components/TheForm";

export default {
  data: () => ({
    numbers: numbers,
    number: {},
    day: Number,
    month: Number,
    year: Number,
    calc: false
  }),
  components: { TheForm },
  methods: {
    getSum() {
      this.calc = true;
      let value = Number(this.day + this.month + this.year);
      let sum = 0;
      let rez = 0;
      while (value) {
        sum += value % 10;
        value = Math.floor(value / 10);
      }
      rez = sum;

      if (rez > 21) {
        rez = sum % 9 || 9;
      }

      this.number = this.numbers.find(num => num.num === rez);
      console.log(this.number);
      return rez;
    }
  }
};
</script>
