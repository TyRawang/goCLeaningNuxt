<template>
  <div class="top-image-card">
    <fieldset class="content-box">
      <legend align="center"><img :src="cardContent.legendImage" /></legend>
      <h3>{{ cardContent.featureHeading }}</h3>
      <hr>
      <p>{{ cardContent.featureDetail }}</p>
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
</style>
