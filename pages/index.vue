<template>
    <section>
      <TheHomeBanner2/>
      <TheFirstSection/>
      <TheSecondSection/>
      <RequestCallBack/>
      <!-- <TheTestimonialSectionOne/> -->
    </section>
</template>
<script>
import TheHomeBanner2 from "@/components/index/TheHomeBanner2";
import TheFirstSection from "@/components/index/TheFirstSection";
import TheSecondSection from "@/components/index/TheSecondSection";
import RequestCallBack from "@/components/shared/RequestCallBack";
// import TheTestimonialSectionOne from "@/components/testimonial/TheTestimonialSectionOne"
export default {
  components: {
    TheSecondSection, TheFirstSection, TheHomeBanner2, RequestCallBack
  },

  head() {
    return {
      title: 'Best Cleaning & Janitorial Service in Calgary | Go Cleaning', 
      meta: [{
        hid: 'description',
        name: 'description', 
        content: 'Let us be your perfect solution for you residential & commercial cleaning needs. Our pricing is Affordable, order your FREE QUOTE today!'
      }]
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

