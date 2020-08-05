<template>
  <section>
    <TheBlogBanner />
    <div class="clearfix"></div>
    <TheBlogBx />
    <div class="clearfix"></div>
    <TheBlogParallax />
  </section>
</template>

<script>
import TheBlogBanner from "@/components/blog/TheBlogBanner";
import TheBlogBx from "@/components/blog/TheBlogBx";
import TheBlogParallax from "@/components/blog/TheBlogParallax";
export default {
  components: {TheBlogParallax, TheBlogBx, TheBlogBanner}
}
</script>

<style>

</style>
