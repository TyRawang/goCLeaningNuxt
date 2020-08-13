<template>
  <!-- This is the clean version -->
  <section>
    <div class="tags">
      <h1>Tags</h1>
      <ul>
        <li v-for="(tag, index) in postTags" :key="index">{{ index }}</li>
      </ul>
    </div>

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
      <p><strong>Where Do We Start Cleaning?</strong></p>
      <div>
          {{ article.description }}
        </div>
    </div>

    <div class="">
      <nuxt-content :document="article" />
    </div>

  </section>
</template>

<script>
export default {
  name: "TheBlogDetailBody",

  computed:{
    postTags(){
      let tags = this.article.tags.split(',')
      // console.log(tags);
      // let ptags = []
      // for(let tag in tags){
      //   ptags.push(tag)
      // }
      // return ptags
      return tags
    }
  },

  props: {
    article: {
      type: Object,
      required: true
    }
  },

  mounted(){
    console.log(this.postTags);
  },

  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },

    // postTags(postTag){
    //   const tags = postTag.split(',')
    //   let ptags = []
    //   for(let tag in tags){
    //     ptags.push(tag)
    //   }
    //   return ptags
    // }
  }
}
</script>

<style>
</style>
