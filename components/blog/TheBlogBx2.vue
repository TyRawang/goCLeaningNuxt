<template>

  <section id="blog-section-one" class="container">

    <GridBlog :blogPosts="postsForCurrentPage()" />

    <ThePagination
      :total-pages="totalPages()"
      :total="9"
      :per-page="3"
      :current-page="currentPage"
      @pagechanged="onPageChange"
    />
  </section>
</template>

<script>
import ThePagination from "@/components/global/ThePagination";
import GridBlog from "@/components/shared/GridBlog";
export default {
  name: "TheBlogBx2",
  components: {GridBlog, ThePagination},
  props: {
    posts: {
      type: Array,
      required: true
    }
  },

  data(){
    return {
      currentPage: 1,
      postsPerPage: 9
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

    totalPages() {
      return Math.ceil(this.posts.length / this.postsPerPage)
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

    onPageChange(page) {
      // console.log(page)
      this.currentPage = page;
    }
  },
}
</script>

<style>
#blog-section-one {
  margin-bottom: 4rem;
}
#blog-section-one .blogs {
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(20rem, 1fr) );
  grid-gap: 1rem;
  padding: 6rem 0rem 1rem 0rem;
  justify-content: center;
  align-content: center;

}

#blog-section-one img {
  max-width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
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
