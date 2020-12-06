<template>
  <section class="generic-page-section">
    <TheGenericSection v-for="(content, index) in genericPageSectionContents" :key="index" :genericSectionContent="content" />
  </section>
</template>

<script>
import TheGenericSection from "@/components/shared/TheGenericSection";
export default {
  name: "TheGenericPageSection",
  components: {TheGenericSection},
  data(){
    return {
    }
  },

  props: {
    genericPageSectionContents: {
      type: Array,
      required: true
    }
  }

}
</script>

<style scoped>

</style>
