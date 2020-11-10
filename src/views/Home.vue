<template>
  <div><TheHeader /> <Advantages /><Info /><Gifts /></div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import Advantages from "@/components/Advantages";
import Info from "@/components/Info";
import Gifts from "@/components/Gifts";

export default {
  name: "Home",
  components: {
    TheHeader,
    Advantages,
    Info,
    Gifts
  }
};
</script>
<style lang="scss" scoped></style>
