<template>
    <section>
      <TheTestimonialBanner/>
      <TheTestimonialSectionOne/>
      <RequestCallBack/>
      <TheTestimonialSectionThree :posts="posts"/>

    </section>
</template>
<script>
import TheTestimonialBanner from "@/components/testimonial/TheTestimonialBanner";
import TheTestimonialSectionOne from "@/components/testimonial/TheTestimonialSectionOne";
import RequestCallBack from "@/components/shared/RequestCallBack";
import TheTestimonialSectionThree from "@/components/testimonial/TheTestimonialSectionThree";
// import TheCommercialFouthSection from "@/components/commercial/TheCommercialFouthSection";
// import TheCommercialFifthSection from "@/components/commercial/TheCommercialFifthSection";




export default {
  components: { TheTestimonialBanner},


  async asyncData({ $content, params }) {
    // console.log(params)
    const posts = await $content('posts').sortBy('createdAt', 'desc').fetch()
    return { posts }
  },
}
</script>
