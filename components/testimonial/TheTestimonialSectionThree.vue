<template>
    <div id="section-three-testimonials" class="container">
        <div id="blog-section-one" class="container">
              <GridBlog :blogPosts="recentPosts()" />
        </div>
    </div>
</template>

<script>
import GridBlog from "@/components/shared/GridBlog";
export default {
    name: 'TheTestimonialSectionTwo',
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
#blog-section-one .blogs {
  display: grid;
  /* grid-template-columns: repeat(3, minmax(100px, 1fr)); */
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  padding: 1rem 0rem 1rem 0rem;
}

#blog-section-one img {
  max-width: 100%;
  height: auto;
}

#blog-section-one h2 {
  text-align: center;
  letter-spacing: 0.2rem;
  line-height: 3rem;
}

#blog-section-one figcaption {
  text-align: center;
  padding-bottom: 2rem;
  border-bottom: solid;
  border-color: grey;
  border-width: thin;
}

#blog-section-one p {
  margin-top: 1rem;
}

#blog-section-one a {
  color: var(--primary-colour);
  /* text-align: right; */
}
</style>
