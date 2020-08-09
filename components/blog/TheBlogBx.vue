<template>
  <!-- This is the cleaner version -->
  <section>
    <div v-for="(post, index) in posts" :key="index">
      <img :src="post.image">
      <h3>
        <nuxt-link :to="'/blog/' + post.slug">
          {{ post.title }}
        </nuxt-link>
      </h3>

      <div>
        <span>By {{ post.author ? post.author : 'Anonymous' }} | {{ formatDate(post.createdAt) }}</span>
      </div>
      <div>
        <p>
          {{ post.description }}
        </p>
      </div>
      <div><nuxt-link :to="'/blog/' + post.slug">Read More</nuxt-link></div>

    </div>
  </section>
</template>

<script>
export default {
  name: "TheBlogBx",

  props: {
    posts: {
      type: Array,
      required: true
    }
  },

  mounted() {
    console.log(this.posts)
  },

  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  },
}
</script>

<style>

</style>
