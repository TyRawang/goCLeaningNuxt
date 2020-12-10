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
head() {
    return {
      title: 'Happy Customers | Go Cleaning', 
      meta: [{
        hid: 'description',
        name: 'description', 
        content: 'We have worked hard for our customers. We are thrilled to post some of their testimony on our site. Read our testimonials and Get a FREE QUTOE today!'
      }]
    }
  },

  async asyncData({ $content, params }) {
    // console.log(params)
    const posts = await $content('posts').sortBy('createdAt', 'desc').fetch()
    return { posts }
  }
}
</script>
