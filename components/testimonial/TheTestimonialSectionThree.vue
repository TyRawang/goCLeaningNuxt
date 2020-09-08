<template>
    <div id="section-three-testimonials" class="container">
        <div id="blog-section-one" class="container">
            <div class="blogs">
              <div v-for="(article, index) in recentPosts()" :key="index">
                <img :src="article.image" alt="">
                <h2>{{ article.title }}</h2>
                <figcaption>{{ article.author }} | {{ article.createdAt }}</figcaption>
                <p>{{ article.description }}</p>
                <nuxt-link :to="'/blog/'+ article.slug">Read more</nuxt-link>
              </div>
<!--                <div>-->
<!--                    <img src="~/assets/img/logo.png" alt="Happy family sitting in their living room">-->
<!--                    <h2>Here is the Blog Title</h2>-->
<!--                    <figcaption>By AuthorName | DatePosted</figcaption>-->
<!--                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse tempora officia laudantium beatae alias laboriosam adipisci commodi dolorem quas corporis.</p>-->
<!--                    <a href="#">Read more</a>-->
<!--                </div>-->
<!--                <div>-->
<!--                    <img src="~/assets/img/logo.png" alt="Happy family sitting in their living room">-->
<!--                    <h2>Here is the Blog Title</h2>-->
<!--                    <figcaption>By AuthorName | DatePosted</figcaption>-->
<!--                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse tempora officia laudantium beatae alias laboriosam adipisci commodi dolorem quas corporis.</p>-->
<!--                    <a href="#">Read more</a>-->
<!--                </div>-->
<!--                <div>-->
<!--                    <img src="~/assets/img/logo.png" alt="Happy family sitting in their living room">-->
<!--                    <h2>Here is the Blog Title</h2>-->
<!--                    <figcaption>By AuthorName | DatePosted</figcaption>-->
<!--                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse tempora officia laudantium beatae alias laboriosam adipisci commodi dolorem quas corporis.</p>-->
<!--                    <a href="#">Read more</a>-->
<!--                </div>-->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheTestimonialSectionTwo',
  props: {
      posts: {
        type: Array,
        required: true
      }
  },
  data(){
      return {
        recent: 3
      }
  },

  methods: {
    recentPosts(){
      let posts = []
      for(let i=0; i < this.recent; i++){
        if(this.posts[i]){
          posts.push(this.posts[i])
        }
      }
      return posts
    }
  }
}
</script>

<style scoped>

</style>
