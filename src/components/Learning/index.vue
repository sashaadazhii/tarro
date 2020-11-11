<template>
  <section class="light">
    <div class="container container--narrow">
      <div class="icon-wrapper">
        <img
          src="../../assets/icons/icon-magestic4.svg"
          onerror="../../assets/images/icon-magestic4.png"
          alt="magestic"
        />
      </div>
      <h2 class="title">
        Что вы получите и чему научитесь в школе «Нумерология по Таро 3.0»
      </h2>

      <div class="accordion">
        <vsa-list>
          <vsa-item v-for="item in learning" :key="item.title">
            <vsa-heading>
              <p v-html="item.title"></p>
            </vsa-heading>

            <vsa-icon>
              <span class="open">+</span>
              <span class="close">&#9932;</span>
            </vsa-icon>

            <vsa-content>
              <p v-html="item.result"></p>
            </vsa-content>
          </vsa-item>
        </vsa-list>
      </div>

      <Divider src="icon-magestic2.svg" />
    </div>
  </section>
</template>
<script>
import {
  VsaList,
  VsaItem,
  VsaHeading,
  VsaContent,
  VsaIcon
} from "vue-simple-accordion";
import "vue-simple-accordion/dist/vue-simple-accordion.css";
import { learning } from "@/assets/js/learning.js";
export default {
  data: () => ({
    learning: learning
  }),
  components: {
    VsaItem,
    VsaHeading,
    VsaContent,
    VsaIcon,
    VsaList
  }
};
</script>
<style lang="scss" scoped>
@import "./style.scss";
</style>
