<template>
  <div>
    <TheHeader /> <Advantages /><Info /><Gifts /><TheForm /><Exercise />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import Advantages from "@/components/Advantages";
import Info from "@/components/Info";
import Gifts from "@/components/Gifts";
import TheForm from "@/components/TheForm";
import Exercise from "@/components/Exercise";

export default {
  name: "Home",
  components: {
    TheHeader,
    Advantages,
    Info,
    Gifts,
    TheForm,
    Exercise
  }
};
</script>
<style lang="scss" scoped></style>
