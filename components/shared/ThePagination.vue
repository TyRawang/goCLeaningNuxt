<template>
  <div class="container pagination-area">
    <button v-show="currentPage<3 || currentPage >= totalPages()-2" @click="goToPage(1)" :class="currentPage===activePage?'active-page':''">1</button>
    <button v-show="currentPage>=4 || currentPage >= totalPages()-2">...</button>
    <button v-show="currentPage<=2" @click="goToPage(2)" :class="currentPage===activePage?'active-page':''">2</button>
    <button v-show="currentPage<=2 || currentPage === 3 && totalPages()-2 !== 3" @click="goToPage(3)" :class="currentPage===activePage?'active-page':''">3</button>

    <button v-show="currentPage-3>=1 && currentPage+3 < totalPages()-2" @click="goToPage(currentPage)" :class="currentPage===activePage?'active-page':''">{{currentPage}}</button>
    <button v-show="currentPage >= totalPages()-2" @click="goToPage(totalPages()-2)" :class="currentPage===activePage?'active-page':''">{{totalPages()-2}}</button>
    <button v-show="currentPage >= totalPages()-2" @click="goToPage(totalPages()-1)" :class="currentPage===activePage?'active-page':''">{{totalPages()-1}}</button>
    <button v-show="currentPage <= totalPages()-3">...</button>
    <button @click="goToPage(totalPages())" :class="currentPage===activePage?'active-page':''">{{totalPages()}}</button>
<!--    <button v-for="(item, index) in totalPages()" :key="index" :class="(index+1) === currentPage?'active-page':''" @click="goToPage(index+1)" >{{index + 1}}</button>-->

    <div class="clearfix"></div>
  </div>
</template>

<script>
export default {
  name: "ThePagination",
  props: {
    allPosts: {
      type: Array,
      required: true
    }
  },

  data(){
    return {
      postsPerPage: 9,
      postsInCurrentPage: [],
      currentPage: 1,
      activePage: null
    }
  },

  mounted() {
    console.log('paginate')
    console.log(this.allPosts)
  },

  methods: {
    totalPages() {
      return Math.ceil(this.allPosts.length / this.postsPerPage)
    },

    goToPage(pageNo){
      this.currentPage = pageNo
      this.activePage = pageNo
      this.$root.$emit('pageNoClicked', pageNo)
    },

    // goToPreviousPage() {
    //   if (this.currentPage > 1) {
    //     this.currentPage -= 1
    //     this.postsForCurrentPage()
    //   }
    // },
    //
    // goToNextPage() {
    //   if (this.currentPage < this.totalPages()) {
    //     this.currentPage += 1
    //     this.postsForCurrentPage()
    //   }
    // }
  }
}
</script>

<style>
.pagination-area {
  margin-top: 1%;
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
  padding: .75rem 2rem;
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

.pagination-area button {
  margin-right: 5px;
  outline: none;
}

.active-page {
  background: dodgerblue;
}

</style>
