<template>
  <div class="text-content">
    <h3 class="content-main-heading">{{mainHeading}}</h3>
    <div class="heading-separator">
      <img v-if="separatorImg" :src="separatorImg" alt="">
      <hr v-else>
    </div>
    <p class="content-main-paragraphs" v-show="mainParagraphs[0]" v-for="(mParagraph, index) in mainParagraphs" :key="index">{{mParagraph}}</p>

    <div v-show="hasExtendedContent" class="extended-content-area">
      <h3 class="content-extended-heading">{{extendedHeading}}</h3>

      <div v-if="displayAsParagraph">
        <p v-for="(extParagraph, index) in extendedParagraphs" :key="index" class="content-extended-paragraphs">{{extParagraph}}</p>
      </div>

      <ul v-else>
        <li v-show="extendedParagraphs[0]" v-for="(extParagraph, index) in extendedParagraphs" :key="index"><p>{{extParagraph}}</p></li>
      </ul>
    </div>

    <button v-show="displaySectionBtn" class="text-content-btn" @click.prevent="handleBtnClick">{{ sectionBtnText }}</button>
  </div>
</template>

<script>
export default {
  name: "SectionTextContent",

  props: {
    mainHeading: {
      type: String,
      required: true
    },

    mainParagraphs: {
      type: Array,
      required: true
    },

    displayAsParagraph: {
      type: Boolean,
      required: true
    },

    separatorImg: {
      type: String,
      required: false
    },

    hasExtendedContent: {
      type: Boolean,
      required: true
    },

    extendedHeading: {
      type: String,
      required: false
    },

    extendedParagraphs: {
      type: Array,
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
    requestQuote(){
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
