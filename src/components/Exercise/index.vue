<template>
  <section class="light">
    <div class="container container--narrow">
      <div class="icon-wrapper">
        <img src="../../assets/images/icon-magestic1.png" alt="magestic" />
      </div>
      <h1 class="title">Познавательное упражнение!</h1>
      <div class="content">
        Всего 3 минуты, и вы узнаете, какая у вас Душа, какой вы настоящий и
        глубинный человек. Познакомитесь со своим Внутренним ребенком, который
        сильно хочет проявиться в вас.
      </div>

      <div class="accordion">
        <vsa-list>
          <vsa-item>
            <vsa-heading>
              Узнаете кто вы, и для чего пришли в этот мир. Но главное – войдете
              в Поток Жизни, выполняя свое Жизненное Предназначение.
            </vsa-heading>

            <vsa-icon>
              <span class="open">+</span>
              <span class="close">&#9932;</span>
            </vsa-icon>

            <vsa-content>
              Результат: Больше уверенности в своих силах, лучшее
              психологическое самочувствие и здоровье.
            </vsa-content>
          </vsa-item>
        </vsa-list>
      </div>

      <div class="content">
        <strong>
          Также число Сущности дает ответ на вопрос: «Что важно для моей Души?» </strong
        >Поняв это, вы сможете лучше о ней заботиться, подпитывать её и
        оберегать.
      </div>

      <div class="example-block">
        <div class="icon-wrapper">
          <img src="../../assets/images/dots-dark.png" alt="magestic" />
        </div>
        <div class="example">
          <h5 class="example__title">Расчет числа Сущности</h5>
          <div class="example__desc">
            Выписывает дату своего рождения и суммируем все цифры. Например:
          </div>
          <div class="example__order">
            <div class="example__point"><strong>07.06.1972</strong></div>
            <div class="example__point">0+7+0+6+1+9+7+2=32</div>
            <div class="example__point">
              3+2=5 – <strong>«Священник»</strong>
            </div>
          </div>
          <div class="example__content">
            <strong> В расчете мы используем старшие арканы Таро</strong>, а
            именно числа до 21 (Мир). Все, что больше, – суммируется. Например,
            <strong>
              если по сумме чисел у вас получилось 22 – ваше число 4 –
              «Император».</strong
            >
          </div>
        </div>
      </div>
      <Divider src="icon-magestic2.png" />
    </div>
    <Calc />
  </section>
</template>
<script>
import Calc from "@/components/Calc";
import {
  VsaList,
  VsaItem,
  VsaHeading,
  VsaContent,
  VsaIcon
} from "vue-simple-accordion";
import "vue-simple-accordion/dist/vue-simple-accordion.css";
export default {
  components: {
    VsaItem,
    VsaHeading,
    VsaContent,
    VsaIcon,
    VsaList,
    Calc
  }
};
</script>
<style lang="scss" scoped>
@import "./style.scss";

.vsa-item {
  &--is-active {
    .vsa-item__trigger__icon {
      .open {
        display: none;
      }

      .close {
        display: block;
      }
    }
  }
  &__trigger__icon {
    .open {
      display: block;
    }

    .close {
      display: none;
    }
  }
}
</style>
