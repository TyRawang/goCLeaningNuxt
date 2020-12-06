<template>
  <div>
    <h3>CATEGORIES</h3>
    <ul>
      <li v-for="cat in categories" :key="cat.id">{{cat.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
name: "TheCategories",
  props: {
    categories: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

</style>
