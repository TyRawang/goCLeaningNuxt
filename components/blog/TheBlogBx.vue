<template>
  <section id="blog-bx" class="section">
      <div class="container">
        <div class="columns">
          <div class="blogs text-center" v-for="(post, index) in posts" :key="index">
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
                <div class="meta-info"><nuxt-link :to="'/blog/' + post.slug">Read More</nuxt-link></div>
              </div>
            </div>
          </div>

          <div class="clearall"></div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: "TheBlogBx",

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
#blog-bx {
  background-color: rgba(255,255,255,0);
  border: 1px solid #e5e5e5;
  border-bottom-width: 3px;
}
.margin-top4 {
  float: left;
  margin-top: 40px;
  width: 100%;
}

.blogs {
  float: left;
  width: 32%;
  margin: 0 .98%;
}

.blogs:first-child{
  margin-left: 0;
  margin-right: .98%;
}

.blogs:nth-child(3){
  margin-left: .98%;
  margin-right: 0;
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
  height: 100%!important;
  width: 100%;
}

.rollover {
  background-image: -webkit-linear-gradient(top, rgba(106,191,22,0.81) 0%, #1675bf 100%);
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
}

.bottom-margin1 {
  margin-bottom: 10px;
}

.text-center {
  text-align: center!important;
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
  font-size: 40px!important;
  margin-bottom: 0!important;
}

.blog-desc span {
  font-size: 13px!important;
}

.blog-desc a {
  color: #6abf16;
  font-size: 13px!important;
}

.margin-top3 {
  margin-top: 30px!important;
}

.clearall{
  clear: both;
}

</style>
