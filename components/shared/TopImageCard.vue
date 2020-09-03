<template>
  <div class="top-image-card">
    <fieldset class="content-box">
      <legend align="center"><img :src="cardContent.legendImage"/></legend>
      <h3 class="feature-heading">{{ cardContent.featureHeading }}</h3>
      <hr class="heading-detail-separator">
      <p class="feature-detail">{{ cardContent.featureDetail }}</p>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "TopImageCard",
  props: {
    cardContent: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.top-image-card {
  text-align: center;
}

.top-image-card img {
  padding: 0 3rem;
}

.feature-heading, .feature-detail {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.feature-detail {
  padding: 0 2.2rem;
}

.top-image-card hr {
  width: 40%;
  margin: 0 auto;
  border: 1px solid #92d102;
}
</style>
