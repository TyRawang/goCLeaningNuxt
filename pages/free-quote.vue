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
  head() {
    return {
      title: 'Best Residential Cleaning in Calgary | Go Cleaning', 
      meta: [{
        hid: 'description',
        name: 'description', 
        content: 'We have in the Cleaning Business for over a decade now, we are proud to call our self an expert in Cleaning. Let us help you live a happier life.'      }]
    }
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
