<template>
    <section>
      <TheBanner/>
      <TheFirstSection/>
      <TheSecondSection/>
    </section>
</template>
<script>
import TheBanner from "@/components/index/TheHomeBanner";
import TheFirstSection from "@/components/index/TheFirstSection";
import TheSecondSection from "@/components/index/TheSecondSection";
export default {
  components: {TheSecondSection, TheFirstSection, TheBanner}
}
</script>
