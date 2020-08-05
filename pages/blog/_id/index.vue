<template>
  <section>
    <TheBlogDetailBanner />
    <div class="clearfix"></div>
    <TheBlogDetailBody />
    <div class="clearfix"></div>
  </section>
</template>

<script>
import TheBlogDetailBanner from "@/components/blog/TheBlogDetailBanner";
import TheBlogDetailBody from "@/components/blog/TheBlogDetailBody";
export default {
  name: "index",
  components: {TheBlogDetailBody, TheBlogDetailBanner}
}
</script>

<style>

</style>
