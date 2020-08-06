<template>
  <section>
    <TheBlogBanner />
    <div class="clearfix"></div>
    <TheBlogBx :posts="posts" />
    <div class="clearfix"></div>
    <TheBlogParallax />
  </section>
</template>

<script>
import TheBlogBanner from "@/components/blog/TheBlogBanner";
import TheBlogBx from "@/components/blog/TheBlogBx";
import TheBlogParallax from "@/components/blog/TheBlogParallax";
export default {
  components: {TheBlogParallax, TheBlogBx, TheBlogBanner},

  async asyncData ({ $content }) {
    const posts = await $content('posts').sortBy('createdAt', 'desc').fetch()
    return { posts }
  }
}
</script>

<style>

</style>
