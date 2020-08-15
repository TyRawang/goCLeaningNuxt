<template>
  <section id="blog-bx" class="section">
    <div class="container pagination-area">
      <div class="previous-page">
        <span class="button" v-if="currentPage > 1" @click="goToPreviousPage">< Previous Page</span>
        <span v-else>&nbsp;</span>
      </div>

      <div class="current-page">
        Page {{ currentPage }} of {{ totalPages() }}
      </div>

      <div class="next-page">
        <span class="button" v-if="currentPage < totalPages()" @click="goToNextPage">Next Page ></span>
        <span v-else>&nbsp;</span>
      </div>

      <div class="clearfix"></div>
    </div>

    <div class="container">
      <div class="columns">
        <div class="blogs text-center" v-for="(post, index) in postsForCurrentPage()" :key="index">
          <div class="blog-box margin-top4">
            <div class="img-box">
              <div class="rollover"><!----></div>
              <img :src="post.image" class="img-responsive bottom-margin1"></div>
            <div class="blog-desc">
              <div class="main-title">
                <h3>
                  <nuxt-link :to="'/blog/' + post.slug">
                    {{ post.title }}
                  </nuxt-link>
                </h3>
                <span>By {{ post.author ? post.author : 'Anonymous' }} | {{ formatDate(post.createdAt) }}</span></div>
              <div class="blog-detial margin-top3">
                <p class="text-center">
                  {{ post.description }}
                </p>
              </div>
              <div class="meta-info">
                <nuxt-link :to="'/blog/' + post.slug">Read More</nuxt-link>
              </div>
            </div>
          </div>
        </div>

        <div class="clearfix"></div>
      </div>
    </div>

    <div class="container pagination-area">
      <div class="previous-page">
        <span class="button" v-if="currentPage > 1" @click="goToPreviousPage">< Previous Page</span>
        <span v-else>&nbsp;</span>
      </div>

      <div class="current-page">
        Page {{ currentPage }} of {{ totalPages() }}
      </div>

      <div class="next-page">
        <span class="button" v-if="currentPage < totalPages()" @click="goToNextPage">Next Page ></span>
        <span v-else>&nbsp;</span>
      </div>

      <div class="clearfix"></div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      postsPerPage: 9,
      postsInCurrentPage: [],
      currentPage: 1,
    }
  },

  mounted() {
    console.log(this.posts)
  },

  methods: {
    formatDate(date) {
      const options = {year: 'numeric', month: 'long', day: 'numeric'}
      return new Date(date).toLocaleDateString('en', options)
    },

    totalPages(){
      return Math.ceil(this.posts.length / this.postsPerPage)
    },

    goToPreviousPage(){
      if(this.currentPage > 1){
        this.currentPage -= 1
        this.postsForCurrentPage()
      }
    },

    goToNextPage(){
      if(this.currentPage < this.totalPages() ){
        this.currentPage += 1
        this.postsForCurrentPage()
      }
    },

    postsForCurrentPage(){
      let start = ((this.currentPage * this.postsPerPage) - this.postsPerPage)
      console.log(start)
      let end = (this.currentPage * this.postsPerPage) - 1
      console.log(end)
      let postsInThisPage = []
      if(this.posts.length < this.postsPerPage){
        return this.posts
      }else{
        for(let i=start; i<=end; i++){
          if(this.posts[i]){
            postsInThisPage.push(this.posts[i])
          }else{
            break;
          }
        }
        return postsInThisPage
      }
    }
  },
}
</script>

<style>
#blog-bx {
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid #e5e5e5;
  border-bottom-width: 3px;
  padding: 5% 0;
  transition: ease-in-out;
}

.margin-top4 {
  float: left;
  margin-top: 40px;
  width: 100%;
}

.blogs {
  float: left;
  width: 31%;
  margin-left: 3%;
}

.blogs:first-child, .blogs:nth-child(4), .blogs:nth-child(7) {
  margin-left: 0;
}

.blogs:nth-child(4), .blogs:nth-child(7){
  clear: left;
}

.blog-box {
  border: 1px solid darkgray;
}

.img-box {
  height: 236px;
  overflow: hidden;
  position: relative;
}

.img-box img {
  height: 100% !important;
  width: 100%;
}

.rollover {
  background-image: -webkit-linear-gradient(top, rgba(106, 191, 22, 0.81) 0%, #1675bf 100%);
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
}

.bottom-margin1 {
  margin-bottom: 10px;
}

.text-center {
  text-align: center !important;
}

.blog-desc {
  padding: 30px 25px 50px 25px;
}

.blog-desc .main-title {
  padding-bottom: 20px;
  border-bottom: solid 1px #e5e5e5;
}

.main-title h3 {
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  line-height: 1.2;
  letter-spacing: 0px;
  text-align: center;
  color: #6abf16;
  font-style: normal;
}

.blog-desc h3 {
  font-size: 40px !important;
  margin-bottom: 0 !important;
}

.blog-desc span {
  font-size: 13px !important;
}

.blog-desc a {
  color: #6abf16;
  font-size: 13px !important;
}

.margin-top3 {
  margin-top: 30px !important;
}

.clearfix {
  clear: both;
}

.pagination-area {
  margin-top: 2.5%;
}

.previous-page, .current-page, .next-page {
  display: block;
  width: 31%;
  float: left;
}

.current-page {
  text-align: center;
  margin: 0 3%;
  padding: 1rem 0;
}

.previous-page .button, .next-page .button {
  background: none;
  border: 2px solid gray;
  border-radius: 10px;
  color: black;
  padding: 1rem 2rem;
}

.previous-page .button:hover, .next-page .button:hover {
  background: none;
  border: 2px solid darkseagreen;
  border-radius: 10px;
  box-shadow: 0 0 6px darkseagreen;
  cursor: pointer;
}

.previous-page .button {
  margin-left: 0;
}

.next-page .button {
  float: right;
  margin-left: 0;
}

</style>
