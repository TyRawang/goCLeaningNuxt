<template>
    <section>
      <TheHomeBanner2/>
      <!-- <TheFirstSection/>
      <TheSecondSection/>
      <RequestCallBack/>
      <TheTestimonialSectionOne/> -->
    </section>
</template>
<script>
import TheHomeBanner2 from "@/components/index/TheHomeBanner2";
// import TheFirstSection from "@/components/index/TheFirstSection";
// import TheSecondSection from "@/components/index/TheSecondSection";
// import RequestCallBack from "@/components/shared/RequestCallBack";
// import TheTestimonialSectionOne from "@/components/testimonial/TheTestimonialSectionOne"
export default {
  components: {
      TheHomeBanner2
    // TheSecondSection, TheFirstSection, TheHomeBanner2, RequestCallBack
  },

  data(){
    return {
      loading: true,
    }
  },

  created() {
  },

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}
</script>
