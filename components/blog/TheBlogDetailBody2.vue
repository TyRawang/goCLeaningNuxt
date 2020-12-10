<template>
    <section class="container">
        <div class="body">
            <div>
                <h1>{{article.title}}</h1>
                <figcaption>By {{article.author ? article.author : 'Go Cleaning'}} | {{ formatDate(article.createdAt) }}</figcaption>
                <img :src="article.image" alt="">
                <nuxt-content :document="article" />
                 <div class="share-this-blog-bottom">
                    <h3>Share This Blog</h3>
                    <span>
                      <span class="share-link"><ShareNetwork
                        network="facebook"
                        :url="ourDomain + $route.fullPath"
                        :title="article.title"
                        :description="article.description"
                        :quote="article.quote"
                        :hashtags="article.tags"
                      >
                        <i class="fab fa-facebook fa-lg"></i>
                        <!--                        <span>Share on Twitter</span>-->
                      </ShareNetwork></span>
                      <span class="share-link"><ShareNetwork
                        network="twitter"
                        :url="ourDomain + $route.fullPath"
                        :title="article.title"
                        :description="article.description"
                        :quote="article.quote"
                        :hashtags="article.tags"
                      >
                        <i class="fab fa-twitter fa-lg"></i>
                        <!--                        <span>Share on Twitter</span>-->
                      </ShareNetwork></span>
                      <span class="share-link"><ShareNetwork
                        network="linkedin"
                        :url="ourDomain + $route.fullPath"
                        :title="article.title"
                        :description="article.description"
                        :quote="article.quote"
                        :hashtags="article.tags"
                      >
                        <i class="fab fa-linkedin fa-lg"></i>
                        <!--                        <span>Share on Twitter</span>-->
                      </ShareNetwork></span>
                      <span class="share-link"><ShareNetwork
                        network="whatsapp"
                        :url="ourDomain + $route.fullPath"
                        :title="article.title"
                        :description="article.description"
                        :quote="article.quote"
                        :hashtags="article.tags"
                      >
                        <i class="fab fa-whatsapp fa-lg"></i>
                        <!--                        <span>Share on Twitter</span>-->
                      </ShareNetwork></span>
<!--                        <a href="#"><i class="fab fa-facebook fa-lg"></i></a>-->
<!--                        <a href="#"><i class="fab fa-twitter fa-lg"></i></a>-->
<!--                        <a href="#"><i class="fab fa-linkedin fa-lg"></i></a>-->
<!--                        <a href="#"><i class="fab fa-whatsapp fa-lg"></i></a>-->
                        <!-- <a href="#"><i class="fab fa-envelope-o"></i></a> -->
                    </span>
                </div>
            </div>
            <div>
              <TheRecentPosts :recentPosts="recentPosts()" />

                <TheCategories :categories="categories" />

                <div class="share-this-blog">
                    <h3>Share This Blog</h3>
                    <span>
                      <span class="share-link"><ShareNetwork
                        network="facebook"
                        :url="ourDomain + $route.fullPath"
                        :title="article.title"
                        :description="article.description"
                        :quote="article.quote"
                        :hashtags="article.tags"
                      >
                        <i class="fab fa-facebook fa-lg"></i>
                        <!--                        <span>Share on Twitter</span>-->
                      </ShareNetwork></span>
                      <span class="share-link"><ShareNetwork
                        network="twitter"
                        :url="ourDomain + $route.fullPath"
                        :title="article.title"
                        :description="article.description"
                        :quote="article.quote"
                        :hashtags="article.tags"
                      >
                        <i class="fab fa-twitter fa-lg"></i>
                        <!--                        <span>Share on Twitter</span>-->
                      </ShareNetwork></span>
                      <span class="share-link"><ShareNetwork
                        network="linkedin"
                        :url="ourDomain + $route.fullPath"
                        :title="article.title"
                        :description="article.description"
                        :quote="article.quote"
                        :hashtags="article.tags"
                      >
                        <i class="fab fa-linkedin fa-lg"></i>
                        <!--                        <span>Share on Twitter</span>-->
                      </ShareNetwork></span>
                      <span class="share-link"><ShareNetwork
                        network="whatsapp"
                        :url="ourDomain + $route.fullPath"
                        :title="article.title"
                        :description="article.description"
                        :quote="article.quote"
                        :hashtags="article.tags"
                      >
                        <i class="fab fa-whatsapp fa-lg"></i>
                      </ShareNetwork></span>
                    </span>

                </div>
                <div>
                    <h3>Get In Touch</h3>
                     <a>Phone: 1 (855) 213-0087 <br> or <br> (403) 768-4186</a>
                    <a>Email: <a href="mailto:info@gocleaning.ca">info@gocleaning.ca</a></a>
                    <a>Web: <a href="http://gocleaning.ca">http://gocleaning.ca</a></a>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
import TheRecentPosts from "@/components/blog/TheRecentPosts";
import TheCategories from "@/components/blog/TheCategories";
export default {
  name: "TheBlogDetailBody2",
  components: {TheCategories, TheRecentPosts},
  props: {
    posts:{
      type:Array,
      required: true
    },
    article: {
      type: Object,
      required: true
    }
  },

  data(){
    return {
      recent: 3,
      categories: [
        {id:1, name: 'Cleaning'},
        {id:2, name: 'Commercial'},
        {id:3, name: 'Corporate'},
        {id:4, name: 'Residential'},
        {id:5, name: 'Outside World'},
      ],
      ourDomain:'https://gocleaning.ca/' // for now. It should be the base url that is for example: gocleaning.ca
    }
  },

  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },

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
    section .body {
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-gap: 3rem;
        padding-top: 4rem;

    }

    @media (max-width: 800px) {
      section .body {
        display: inline-block; 
  
      }
      .share-this-blog  {
        display: none;
      }
    }

    h1 {
        text-align: left;
        /* margin-top: 6rem;  */

    }

    figcaption {
        border-bottom: solid;
        border-color: grey;
        padding-bottom: 1rem;
        border-width: thin;
    }

    img {
        width: 80%;
        height: auto;
        margin-top: 2rem;
    }

    h3 {
        color: var(--secondary-colour);
        font-weight: bold;
    font-size: 16px;
    line-height: 48px;
    align-items: center;
    letter-spacing: 5px;
    }

    a {
        font-size: 14px;
        line-height: 25px;
        color: #777777;
    }

    a:hover {
        color: var(--secondary-colour);
    }

    .share-this-blog  span {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .share-this-blog-bottom  span a {
        padding-right: 2rem;
    }

    .share-link {
      cursor: pointer;
    }
</style>
