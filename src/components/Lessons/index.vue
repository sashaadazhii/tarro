<template>
  <section class="light">
    <div class="container container--narrow">
      <div class="subtitle">Основные занятия</div>
      <div class="accordion">
        <vsa-list>
          <vsa-item v-for="(item, idx) in lessons" :key="idx">
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

              <div v-if="item.result.practice.title" class="editional">
                <span class="editional__title">
                  {{ item.result.practice.title }}
                </span>
                <span class="editional__content">{{
                  item.result.practice.content
                }}</span>
              </div>

              <div v-if="item.result.homework" class="homework">
                <p class="homework__title">{{ item.result.homework.title }}</p>
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

              <div v-if="item.result.bonus.title" class="editional">
                <span class="editional__title">{{
                  item.result.bonus.title
                }}</span>
                <span class="editional__content">
                  {{ item.result.bonus.content }}</span
                >
              </div>
              <div v-else class="empty"></div>
            </vsa-content>
          </vsa-item>
        </vsa-list>
      </div>
      <div class="btn-wrapper">
        <div class="left"></div>
        <a href="#" class="btn"
          >Стать учеником школы Нумерология по таро 3.0
        </a>
        <div class="right"></div>
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
import { lessons } from "@/assets/js/lessons.js";

export default {
  data: () => ({
    lessons: lessons,
    counter: 0,
    btnText: String
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
