<template>
  <section>
    <TheBlogDetailBanner />
    <div class="clearfix"></div>
    <TheBlogDetailBody :article="article" />
<!--    <nuxt-content :document="article" />-->
    <div class="clearfix"></div>
  </section>
</template>

<script>
import TheBlogDetailBanner from "@/components/blog/TheBlogDetailBanner";
import TheBlogDetailBody from "@/components/blog/TheBlogDetailBody";
export default {
  components: {
    TheBlogDetailBanner, TheBlogDetailBody
  },


  async asyncData({ $content, params }) {
    // console.log(params)
    const article = await $content('posts', params.slug).fetch()
    return { article }
  },
}
</script>

<style>
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
</style>
