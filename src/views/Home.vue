<template>
  <div>
    <!-- <div class="container"> -->
    <TheHeader /> <Advantages /><Info /><Gifts />
    <TheForm class="form-border" /><Exercise />
    <About />
    <!-- </div> -->
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import Advantages from "@/components/Advantages";
import Info from "@/components/Info";
import Gifts from "@/components/Gifts";
import TheForm from "@/components/TheForm";
import Exercise from "@/components/Exercise";
import About from "@/components/About";

export default {
  name: "Home",
  components: {
    TheHeader,
    Advantages,
    Info,
    Gifts,
    TheForm,
    Exercise,
    About
  }
};
</script>
<style lang="scss" scoped></style>
