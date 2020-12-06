<template>
  <div>
    <h3>RECENT POSTS</h3>
    <ul>
      <li v-for="(rp, index) in recentPosts" :key="index"><nuxt-link :to="'/blog/' + rp.slug">{{rp.title}}</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TheRecentPosts",

  props: {
    recentPosts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

</style>
