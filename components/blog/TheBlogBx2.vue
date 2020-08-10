<template>

   <section id="blog-section-one" class="container">

        <div class="blogs" >          
            <div v-for="(post, index) in posts" :key="index">
                <img :src="post.image" alt="">
                <!-- <img src="~/assets/img/Happy-Family.jpg" alt="Happy family sitting in their living room"> -->
                <h2>{{ post.title }}</h2>
                <figcaption>By {{post.author ? post.author : 'Go Cleaning'}} | {{ formatDate(post.createdAt) }}</figcaption>
                <p>{{ post.description }}</p>
                <nuxt-link :to="'/blog/' + post.slug">Read More</nuxt-link>
                <!-- <p>post.tags</p> -->
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: "TheBlogBx2",

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
    border-color:grey;
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
