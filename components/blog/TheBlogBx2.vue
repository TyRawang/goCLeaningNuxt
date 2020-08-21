<template>

  <section id="blog-section-one" class="container">

    <div class="blogs">
      <div v-for="(post, index) in postsForCurrentPage()" :key="index">
        <img :src="post.image" alt="">
        <!-- <img src="~/assets/img/Happy-Family.jpg" alt="Happy family sitting in their living room"> -->
        <h2>{{ post.title }}</h2>
        <figcaption>By {{ post.author ? post.author : 'Go Cleaning' }} | {{ formatDate(post.createdAt) }}</figcaption>
        <p>{{ post.description }}</p>
        <nuxt-link :to="'/blog/' + post.slug">Read More</nuxt-link>
        <!-- <p>post.tags</p> -->
      </div>
    </div>

<!--    <ThePagination :allPosts="this.posts"></ThePagination>-->
    <paginate
      :page-count="20"
      :page-range="3"
      :margin-pages="2"
      :click-handler="goToPageNumber(page)"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination'"
      :page-class="'page-item'"
    ></paginate>
  </section>
</template>

<script>
import ThePagination from "@/components/shared/ThePagination";
export default {
  name: "TheBlogBx2",
  components: {ThePagination},
  props: {
    posts: {
      type: Array,
      required: true
    }
  },

  data(){
    return {
      postsPerPage: 9,
      postsInCurrentPage: [],
      currentPage: 1,
      page: 1
    }
  },

  mounted() {
    console.log(this.posts)
    this.$root.$on('pageNoClicked', (payload)=>{
      this.goToPageNumber(payload)
    })
  },

  methods: {
    formatDate(date) {
      const options = {year: 'numeric', month: 'long', day: 'numeric'}
      return new Date(date).toLocaleDateString('en', options)
    },

    goToPageNumber(pageNo){
      this.currentPage = pageNo
      this.postsForCurrentPage()
    },

    postsForCurrentPage() {
      let start = ((this.currentPage * this.postsPerPage) - this.postsPerPage)
      // console.log(start)
      let end = (this.currentPage * this.postsPerPage) - 1
      // console.log(end)
      let postsInThisPage = []
      if (this.posts.length < this.postsPerPage) {
        return this.posts
      } else {
        for (let i = start; i <= end; i++) {
          if (this.posts[i]) {
            postsInThisPage.push(this.posts[i])
          } else {
            break;
          }
        }
        return postsInThisPage
      }
    },



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
