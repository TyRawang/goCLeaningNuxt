<template>
  <section class="blogdetail-banner">
    <div class="container">
      <div class="row">
        <div class="main-title">
          <h4>CLEAN HOUSE, CLEANER PERSPECTIVE </h4>
          <h6>GREAT TIPS FOR ANYONE</h6>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheBlogDetailBanner"
}
</script>

<style>
  .blogdetail-banner {
    border-color: #d2d3d4;
    background-image: url('~static/images/bg/page_title_bg.png');
    background-color: #f6f6f6;
    padding: 20px;
  }

  .blogdetail-banner .main-title h4 {
    font-size: 18px;
    line-height: 1.2;
    font-weight: 900;
    color: #333333;
    margin: 0;
  }

  .blogdetail-banner .main-title h6 {
    color: #777777;
    margin: 0;
    font-size: 14px;
    line-height: 26px;
  }
  .main-title h6 {
    color: #aaaaaa;
    font-weight: 900;
    line-height: 1.5;
    letter-spacing: 0px;
    font-style: normal;
  }
</style>
