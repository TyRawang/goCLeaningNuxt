<template>
  <!-- This is the clean version -->
  <section>
    <div>
      <div>

        <div>
          <div>
            <div>
              <div>
                <h3>{{ article.title }}</h3>
                <span>{{ formatDate(article.createdAt) }}</span> | <a>{{ article.author ? article.author : 'Anonymous' }}</a>
              </div>
            </div>

            <div>
              <div>
                <img :src="article.image">
              </div>

              <div><p><strong>Where Do We Start Cleaning?</strong></p>
                <div>
                  {{ article.description }}
                </div>
              </div>
            </div>
          </div>

          <nuxt-content :document="article" />

        </div>

      </div>

    </div>

  </section>
</template>

<script>
export default {
  name: "TheBlogDetailBody",

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
