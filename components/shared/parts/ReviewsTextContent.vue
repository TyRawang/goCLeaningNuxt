<template>
  <div class="text-content">
    <h3 class="content-main-heading">{{mainHeading}}</h3>
    <div class="heading-separator">
      <img v-if="firstSeparatorImg" :src="firstSeparatorImg" alt="">
      <hr v-else>
    </div>

    <h4 class="content-secondary-heading" v-show="secondaryHeading" >{{secondaryHeading}}</h4>
    <p class="content-main-paragraphs" v-show="mainParagraphs[0]" v-for="(mParagraph, index) in mainParagraphs" :key="index">{{mParagraph}}</p>

    <div class="heading-separator">
      <img v-if="secondSeparatorImg" :src="secondSeparatorImg" alt="">
      <hr v-else>
    </div>

    <h4 class="content-third-heading" v-show="thirdHeading">{{thirdHeading}}</h4>

    <button v-show="displaySectionBtn" class="text-content-btn" @click.prevent="handleBtnClick">{{ sectionBtnText }}</button>
  </div>
</template>

<script>
export default {
  name: "ReviewsTextContent",

  props: {
    mainHeading: {
      type: String,
      required: true
    },

    mainParagraphs: {
      type: Array,
      required: true
    },

    secondaryHeading: {
      type: String,
      required: true
    },

    thirdHeading: {
      type: String,
      required: true
    },

    firstSeparatorImg: {
      type: String,
      required: false
    },

    secondSeparatorImg: {
      type: String,
      required: false
    },

    displaySectionBtn: {
      type: Boolean,
      required: true
    },

    sectionBtnText: {
      type: String,
      required: false
    },
  },

  methods: {
    handleBtnClick(){
      alert('go to url')
    }
  }
}
</script>

<style scoped>
.content-main-heading {
  margin-bottom: 1rem;
  font-size: 2.5rem;
}

.heading-separator {
  width: 40%;
  /*margin: 0 auto;*/
  margin-bottom: 1rem;
}

.content-main-paragraphs {
  margin-bottom: 1rem;
}

.content-main-paragraphs span {
  color: blue;
}

.extended-content-area {
  margin: 1rem 0;
}

.content-extended-heading {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.content-extended-paragraphs {
  margin-bottom: 1rem;
}

.generic-section-full-width .heading-separator {
  margin: 1rem auto;
}
</style>
