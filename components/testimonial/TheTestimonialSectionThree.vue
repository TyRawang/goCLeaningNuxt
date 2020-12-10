<template>
    <div id="section-three-testimonials" class="container">
        <div id="blog-section-one-k" class="container">
                  <GridBlog :blogPosts="recentPosts()" />
        </div>
    </div>
</template>

<script>
import GridBlog from "@/components/shared/GridBlog";
export default {
    name: 'TheTestimonialSectionThree',
  components: {GridBlog},
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
#blog-section-one-k {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 1rem;
  padding: 1rem 0rem 1rem 0rem;
}

#blog-section-one-k img {
  max-width: 90%;
  height: auto;
}

#blog-section-one-k h2 {
  text-align: center;
  letter-spacing: 0.2rem;
  line-height: 3rem;
}

#blog-section-one-k figcaption {
  text-align: center;
  padding-bottom: 2rem;
  border-bottom: solid;
  border-color: grey;
  border-width: thin;
}

#blog-section-one-k p {
  margin-top: 1rem;
}

#blog-section-one-k a {
  color: var(--primary-colour);
  /* text-align: right; */
}


</style>
