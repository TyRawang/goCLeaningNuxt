<template>
  <div class="blogs">
    <nuxt-link v-for="(post, index) in blogPosts" :key="index" :to="'/blog/' + post.slug" class="single-blog">
      <img :src="post.image.formats.large.url" alt="">
      <!-- <img src="~/assets/img/Happy-Family.jpg" alt="Happy family sitting in their living room"> -->
      <h2>{{ post.title }}</h2>
      <figcaption>By {{ post.author ? post.author : 'Go Cleaning' }} </figcaption>
      <p>{{ post.description }}</p>
      <nuxt-link :to="'/blog/' + post.slug">Read More</nuxt-link>
      <!-- <p>post.tags</p> -->
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "GridBlog",
  props: {
    blogPosts: {
      type: Array,
      required: true
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>

<style scoped>
.single-blog figcaption, .single-blog p {
  color: black;
  font-size: smaller;
}
</style>
