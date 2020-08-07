<template>
  <!-- This is the cleaner version -->
  <section>
    <div>
      <h3>{{ article.title }}</h3>
      <span>{{ formatDate(article.createdAt) }}</span> | <a>{{ article.author ? article.author : 'Anonymous' }}</a>
    </div>
    <div>
      <img :src="article.image">
    </div>
    <div>
      {{ article.description }}
    </div>
    <nuxt-content :document="article" />
  </section>
</template>

<script>
export default {

  props: {
    article: {
      type: Object,
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

<style>
</style>
