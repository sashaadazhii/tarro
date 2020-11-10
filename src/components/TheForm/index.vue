<template>
  <div class="container">
    <div class="form-wrapper form-border">
      <form class="form">
        <div class="input-wrapper">
          <input
            type="text"
            placeholder="Ваше имя"
            minlength="3"
            class="input"
          />
        </div>
        <div class="input-wrapper">
          <input type="email" placeholder="Ваш E-mail" class="input" />
        </div>
        <div class="input-wrapper">
          <input
            type="submit"
            value="Получить подарки"
            class="input input--btn"
          />
        </div>
      </form>
      <div class="content">
        Если письмо не дошло, проверьте папку Спам вашего почтового сервиса и
        Кликните на «Не спам».
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./style.scss";
</style>
