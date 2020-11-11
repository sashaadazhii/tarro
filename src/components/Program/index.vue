<template>
  <section class="light">
    <div class="container container--narrow">
      <h2 class="title">Программа школы</h2>
      <div class="icon-wrapper">
        <img
          src="../../assets/icons/dots.svg"
          onerror="../../assets/icons/dots.png'"
          alt="magestic"
        />
      </div>
      <div class="subtitle">Подготовительные занятия</div>
      <div class="accordion">
        <vsa-list>
          <vsa-item v-for="(item, idx) in program" :key="idx">
            <vsa-heading>
              <p v-html="item.title"></p>
            </vsa-heading>

            <vsa-icon>
              <span class="open">+</span>
              <span class="close">&#9932;</span>
            </vsa-icon>

            <vsa-content>
              <ul class="list">
                <li
                  v-for="(li, index) in item.result.list"
                  :key="index"
                  class="list__item"
                >
                  <span class="list__counter"> {{ index + 1 }}.</span> {{ li }}
                </li>
              </ul>

              <div v-if="item.result.practice" class="editional">
                <span class="editional__title">
                  {{ item.result.practice.title }}:
                </span>
                <span class="editional__content">{{
                  item.result.practice.content
                }}</span>
              </div>

              <div v-if="item.result.homework" class="homework">
                <p class="homework__title">{{ item.result.homework.title }}:</p>
                <ul class="list">
                  <li
                    class="list__item"
                    v-for="(li, index) in item.result.homework.tasks"
                    :key="index"
                  >
                    <span class="list__counter"> {{ index + 1 }}.</span>
                    {{ li }}
                  </li>
                </ul>
              </div>

              <div v-if="item.result.bonus" class="editional">
                <span class="editional__title"
                  >{{ item.result.bonus.title }}:</span
                >
                <span class="editional__content">
                  {{ item.result.bonus.content }}</span
                >
              </div>
            </vsa-content>
          </vsa-item>
        </vsa-list>
      </div>
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
import { program } from "@/assets/js/program.js";
export default {
  data: () => ({
    program: program,
    counter: 0
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
