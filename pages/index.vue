<template>
    <section>
      <TheHomeBanner/>
      <TheFirstSection/>
      <TheSecondSection/>
    </section>
</template>
<script>
import TheHomeBanner from "@/components/index/TheHomeBanner";
import TheFirstSection from "@/components/index/TheFirstSection";
import TheSecondSection from "@/components/index/TheSecondSection";
export default {
  components: {TheSecondSection, TheFirstSection, TheHomeBanner}
}
</script>
