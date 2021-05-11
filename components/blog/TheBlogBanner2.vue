<template>
  <!-- Banner -->
  <div id="banner">
    <div class="banner-bg">
      <div class="container">
        <!-- <h1>Best Janitorial Service in Calgary</h1>
                <h3>Fully Insured, Bonded & WCB</h3> -->
        <div class="banner-form commercial" v-if="!categoriesType">
          <!-- <div class="meter orange nostripes">
                        <span style="width: 33.3%"></span>
                    </div> -->
          <h1>Read Our Cleaning Blog</h1>
          <h5>Cleaning Tips &amp; News<span></span></h5>
        </div>
        <div v-if="categoriesType" class="category-type">
          <h1>Category: {{ categoryName }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categoriesType: {
      type: Boolean,
      required: false
    },
    categoryName: {
      type: String,
      required: false
    }
  },
  name: "TheBlogBanner2"
};
</script>

<style scoped>
#banner {
  width: 100%;
  height: auto;
  background: url("~assets/images/bg/rawpixel-679094-unsplash.jpg") no-repeat
    center center/cover;
  /* border-radius: 0% 0% 90% 90%/0% 0% 50% 50%; */
}

#banner .banner-bg {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 4rem;
  /* background-color: rgba(73, 243, 51, 0.7); */
  background-color: rgba(106, 191, 22, 0.65);
  width: 100%;
  height: auto;
  /* border-radius: 0% 0% 90% 90%/0% 0% 50% 50%; */
}

#banner .banner-form.commercial h1 {
  color: #ffffff;
}

#banner .banner-form {
  /* background: rgb(255, 255, 255, 0.5); */
  border-radius: 15px;
  padding: 30px 10px 90px 10px;
  width: 100%;
  height: auto;
}
.category-type  {
  padding: 4rem 0;
}
.category-type h1 {
  color: white !important;
  text-transform: capitalize;
}
</style>
