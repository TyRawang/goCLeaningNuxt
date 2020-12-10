<template>
    <section>
      <TheTestimonialBanner/>
      <TheTestimonialSectionOne/>
      <RequestCallBack/>
      <TheBlogBx2 :posts="posts"/>

    </section>
</template>
<script>
import TheTestimonialBanner from "@/components/testimonial/TheTestimonialBanner";
import TheTestimonialSectionOne from "@/components/testimonial/TheTestimonialSectionOne";
import RequestCallBack from "@/components/shared/RequestCallBack";
import TheTestimonialSectionThree from "@/components/testimonial/TheTestimonialSectionThree";
import TheBlogBx2 from "@/components/blog/TheBlogBx2";


export default {
  components: { TheTestimonialBanner, TheTestimonialSectionOne,
    RequestCallBack, TheBlogBx2
  },


  async asyncData({ $content, params }) {
    // console.log(params)
    const posts = await $content('posts').sortBy('createdAt', 'desc').fetch()
    return { posts }
  }
}
</script>
