<template>
  <section class="sec-padding blog-banner">
    <div class="container">
      <div class="row">
        <div class="main-title text-center animate-in" data-anim-type="fade-in-down" data-anim-delay="100">
          <h3 class="text-white big-title">GO CLEANING BLOG</h3>
          <h6>THE LATEST NEWS &amp; RESOURCES</h6>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheBlogBanner"
}
</script>

<style scoped>
.blog-banner {
  background-attachment: fixed;
  background-color: rgba(255, 255, 255, 0);
  background-image: url('~assets/images/bg/rawpixel-679094-unsplash.jpg');
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 1;
  padding: 8% 30px 10%;
  filter: blur(0px);
}

.sec-padding {
  padding: 80px 0 80px 0;
}

.main-title h3 {
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  line-height: 1.2;
  letter-spacing: 0;
  text-align: center;
  color: #6abf16;
  margin-bottom: 31px;
  font-style: normal;
  font-size: 47px;
}

.main-title h6 {
  color: #aaaaaa;
  font-weight: 900;
  line-height: 1.5;
  letter-spacing: 0px;
  font-style: normal;
}

h6 {
  font-size: 16px;
  margin-bottom: 14px;
}


.text-center {
  text-align: center!important;
}

.text-white {
  color: #fff!important;
}

.big-title {
  font-size: 64px!important;
  margin-bottom: 0!important;
}
</style>
