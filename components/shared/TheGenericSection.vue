<template>
  <section class="generic-section">
    <div class="container" v-if="reviewsOrTestimonial">
      <div class="generic-section-full-width">
        <ReviewsTextContent :mainHeading="genericSectionContent.mainHeading" :firstSeparatorImg="genericSectionContent.firstSeparatorImg" :secondaryHeading="genericSectionContent.secondaryHeading" :mainParagraphs="genericSectionContent.mainParagraphs" :secondSeparatorImg="genericSectionContent.secondSeparatorImg" :displaySectionBtn="genericSectionContent.displaySectionBtn" :sectionBtnText="genericSectionContent.sectionBtnText" :thirdHeading="genericSectionContent.thirdHeading" />
      </div>
    </div>

    <div class="container" v-else>

      <div v-if="genericSectionContent.fullWidth" class="generic-section-full-width">
        <SectionTextContent :mainHeading="genericSectionContent.mainHeading" :separatorImg="genericSectionContent.separatorImg" :mainParagraphs="genericSectionContent.mainParagraphs" :displayAsParagraph="genericSectionContent.displayAsParagraph" :hasExtendedContent="genericSectionContent.hasExtendedContent" :extendedHeading="genericSectionContent.extendedHeading" :extendedParagraphs="genericSectionContent.extendedParagraphs" :displaySectionBtn="genericSectionContent.displaySectionBtn" :sectionBtnText="genericSectionContent.sectionBtnText" />
      </div>

      <div v-else class="generic-section-with-columns">

        <div v-if="genericSectionContent.imageRight" class="image-right">
          <div class="generic-content-area">
            <SectionTextContent :mainHeading="genericSectionContent.mainHeading" :separatorImg="genericSectionContent.separatorImg" :mainParagraphs="genericSectionContent.mainParagraphs" :displayAsParagraph="genericSectionContent.displayAsParagraph" :hasExtendedContent="genericSectionContent.hasExtendedContent" :extendedHeading="genericSectionContent.extendedHeading" :extendedParagraphs="genericSectionContent.extendedParagraphs" :displaySectionBtn="genericSectionContent.displaySectionBtn" :sectionBtnText="genericSectionContent.sectionBtnText" />
          </div>
          <div class="generic-image-area">
            <img v-show="genericSectionContent.imagePath" :src="genericSectionContent.imagePath" alt="">
          </div>
        </div>

        <div v-else class="image-left">
          <div class="generic-image-area">
            <img v-show="genericSectionContent.imagePath" :src="genericSectionContent.imagePath" alt="">
          </div>
          <div class="generic-content-area">
            <SectionTextContent :mainHeading="genericSectionContent.mainHeading" :separatorImg="genericSectionContent.separatorImg" :mainParagraphs="genericSectionContent.mainParagraphs" :displayAsParagraph="genericSectionContent.displayAsParagraph" :hasExtendedContent="genericSectionContent.hasExtendedContent" :extendedHeading="genericSectionContent.extendedHeading" :extendedParagraphs="genericSectionContent.extendedParagraphs" :displaySectionBtn="genericSectionContent.displaySectionBtn" :sectionBtnText="genericSectionContent.sectionBtnText" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTextContent from "@/components/shared/parts/SectionTextContent";
import ReviewsTextContent from "@/components/shared/parts/ReviewsTextContent";
export default {
  name: "TheGenericSection",
  components: {ReviewsTextContent, SectionTextContent},
  props: {
    genericSectionContent: {
      type: Object,
      required: true
    },

    reviewsOrTestimonial: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
.generic-section {
  padding: 2rem 0;
}

.image-right, .image-left {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.generic-content-area, .generic-image-area {
  width: 47%;
}

.generic-section-full-width {
  text-align: center;
}
</style>
