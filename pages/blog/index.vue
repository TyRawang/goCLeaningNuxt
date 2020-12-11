<template>
  <section>
    <TheBlogBanner2 />
    <!-- <div class="clearfix"></div> -->
    <TheBlogBx2 :posts="posts" />
    <!-- <div class="clearfix"></div> -->
    <RequestCallBack />
  </section>
</template>

<script>
import TheBlogBanner2 from "@/components/blog/TheBlogBanner2";
import TheBlogBx2 from "@/components/blog/TheBlogBx2";
// import TheBlogParallax from "@/components/blog/TheBlogParallax";
import RequestCallBack from "@/components/shared/RequestCallBack";

export default {
  components: {RequestCallBack, TheBlogBx2, TheBlogBanner2, }, 

  async asyncData ({ $content }) {
    const posts = await $content('posts').sortBy('createdAt', 'desc').fetch()
    return { posts }
  },
  head() {
    return {
      title: 'Learn more about cleaning by reading our blogs | Blog', 
      meta: [{
        hid: 'description',
        name: 'description', 
        content: 'Read our blogs and learn more about cleaning and Go Cleaning. We will share all our secrets behind creating a safe and clean environment!'
        // content: 'Let us be your perfect solution for you residential & commercial cleaning needs. Our pricing is Affordable, order your FREE QUOTE today!'
      }]
    }
  }
}
</script>

<style>

</style>
