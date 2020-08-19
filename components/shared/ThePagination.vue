<template>
  <div class="container pagination-area">
    <button v-for="(item, index) in totalPages()" :key="index" :class="(index+1) === currentPage?'active-page':''" @click="goToPage(index+1)">{{index + 1}}</button>

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
