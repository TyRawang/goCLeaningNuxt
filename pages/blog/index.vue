<template>
  <section>
    <TheBlogBanner2 />
    <!-- <div class="clearfix"></div> -->
    <TheBlogBx2 :posts="posts" />
    <!-- <div class="clearfix"></div> -->
    <TheBlogParallax />
  </section>
</template>

<script>
import TheBlogBanner2 from "@/components/blog/TheBlogBanner2";
import TheBlogBx2 from "@/components/blog/TheBlogBx2";
import TheBlogParallax from "@/components/blog/TheBlogParallax";
export default {
  components: {TheBlogParallax, TheBlogBx2, TheBlogBanner2},

  async asyncData ({ $content }) {
    const posts = await $content('posts').sortBy('createdAt', 'desc').fetch()
    return { posts }
  }
}
</script>

<style>

</style>
