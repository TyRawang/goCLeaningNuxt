<template>
  <section class="sec-padding">
    <div class="container">
      <div class="row">

        <div class="blog-content">
          <div class="row">
            <div class="blog-desc">
              <div class="main-title" id="blog-detail-bx">
                <h3 class="text-left d-title">Where Do We Start Cleaning?</h3>
                <span class="d-date">2019-12-04T14:30:09</span> | <a class="d-auther">yhicknyan</a>
              </div>
            </div>

            <div class="col-md-12">
              <div class="blog-image bottom-margin3">
                <img src="https://backend.gocleaning.ca/wp-content/uploads/2019/12/3-1024x681.jpeg"
                     class="img-responsive d-image">
              </div>

              <div class="fusion-text"><p><strong class="d-title">Where Do We Start Cleaning?</strong></p>
                <div class="d-content">
                  <p>As we begin our descent into the New Year we are often posed with the question ‘Where do we start cleaning?’ This question can be hard to answer especially if there are many problem areas in the home.</p>

                  <p>Here are some tips on how to make house cleaning a little less overwhelming.</p>

                  <p>The first tip is to figure out where to start cleaning, you can do this by thinking of areas in your home that you use frequently, such as the following; the kitchen and dining area, the living room, the bathrooms and of course the bedroom areas.</p>

                  <p>When you first start to clean, try picking one area of a room and working on that until you deem it spotless, and then move onto another area of that particular room. It may seem tedious but it will prevent you from feeling overwhelmed and will allow you to feel more motivated as you move along in your cleaning process. By working on small areas of a specific room piece by piece this will enhance your focus and determination which will leave you feeling more motivated.</p>

                  <p>The second tip is to ask your family members or roommates what areas of the home need the most attention. This will allow those to voice their concerns, provide additional input and a cleaning plan to be established and then implemented. This will allow for all ideas to be heard and will help strengthen bonds between everyone in the household.</p>


                  <p>The third tip is to remember that cleaning home can take time, a house doesn’t have to be spotless by a certain time. A useful thing to remember is if you are expecting company, start to clean the house a few days before they arrive, this will reduce any last minute cleaning stress and you will feel more prepared for their arrival.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- sharing button -->
          <div class="sharing margin-top5">
            <div class="row">

              <div class="col-md-8">
                <h4>Share This Story, Choose Your Platform!</h4>
              </div>

              <div class="col-md-4">

                <a href="#"><i class="fa fa-facebook"></i></a>

                <a href="#"><i class="fa fa-twitter"></i></a>

                <a href="#"><i class="fa fa-linkedin"></i></a>

                <a href="#"><i class="fa fa-whatsapp"></i></a>

                <a href="#"><i class="fa fa-google-plus"></i></a>

                <a href="#"><i class="fa fa-pinterest"></i></a>

                <a href="#"><i class="fa fa-envelope-o"></i></a>

              </div>

            </div>

          </div>

          <!--  Related Posts -->

          <div class="relatedpost-title bottom-margin3 margin-top5 recent-post"><h3>Related Posts</h3> <!---->
            <div class="related-post"><img src="https://backend.gocleaning.ca/wp-content/uploads/2019/12/2-300x170.jpg"
                                       class="img-responsive bottom-margin1"> <h4><a
              href="https://gocleaning.ca/blog-detail/22">What Is Your Cleaning Style?</a></h4> <span>2019-12-04T14:29:01 | <a>yhicknyan</a></span>
            </div>
            <div class="related-post"><img src="https://backend.gocleaning.ca/wp-content/uploads/2019/12/blog1-300x200.jpg"
                                       class="img-responsive bottom-margin1"> <h4><a
              href="https://gocleaning.ca/blog-detail/17">Clean House, Cleaner Perspective</a></h4> <span>2019-12-04T14:28:24 | <a>yhicknyan</a></span>
            </div>
          </div>


          <!--end item -->

        </div>

        <div class="blog-sidebar">

          <section class="recent-post">

            <div class="heading">

              <h4 class="widget-title">Recent Posts</h4>

            </div>

            <ul class="recent-post1">
              <li><a href="https://gocleaning.ca/blog-detail/24">Where Do We Start Cleaning?</a></li>
              <li><a href="https://gocleaning.ca/blog-detail/22">What Is Your Cleaning Style?</a></li>
              <li><a href="https://gocleaning.ca/blog-detail/17">Clean House, Cleaner Perspective</a></li>
            </ul>

          </section>

          <section class="recent-post">

            <div class="heading">

              <h4 class="widget-title">Find us on Facebook</h4>

            </div>

          </section>

          <section class="recent-post">

            <div class="heading">

              <h4 class="widget-title">Get In Touch</h4>

            </div>

            <p>Phone: 1 (855) 213-0087 <br> or <br> (403) 768-4186</p>

            <p>Email: <a href="mailto:info@gocleaning.ca">info@gocleaning.ca</a></p>

            <p>Web: <a href="http://gocleaning.ca">http://gocleaning.ca</a></p>

          </section>

        </div>

        <!--end item -->

      </div>

    </div>

  </section>
</template>

<script>
export default {
  name: "TheBlogDetailBody"
}
</script>

<style>
.sec-padding {
  padding: 80px 0 80px 0;
}

.blog-content {
  display: block;
  width: 66%;
  float: left;
}

.blog-sidebar {
  display: block;
  width: 32%;
  float: left;
  margin-left: 2%;
}

.blog-desc {
  padding: 30px 25px 50px 25px;
}

.blog-desc .main-title {
  padding-bottom: 20px;
  border-bottom: solid 1px #e5e5e5;
}

.blog-image img {
  position: relative;
  width: 100%;
}

.main-title h3 {
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  line-height: 1.2;
  letter-spacing: 0px;
  color: #6abf16;
  font-style: normal;
}

.blog-desc h3 {
  font-size: 40px!important;
  margin-bottom: 0!important;
}

.text-left {
  text-align: left!important;
}

.blog-desc span {
  font-size: 13px!important;
}

.blog-desc a {
  color: #6abf16;
  font-size: 13px!important;
}

.sharing {
  background: #F6F6F6;
  padding: 17px;
}

.sharing h4 {
  margin: 0;
  color: #252525;
  font-size: 20px;
  line-height: 30px;
  font-weight: 900;
}

.sharing a {
  font-size: 16px;
  color: #bebdbd;
  margin: 0 6px;
}

.margin-top5 {
  float: left;
  margin-top: 50px;
  width: 100%;
}

.relatedpost-title h3 {
  font-size: 18px;
  line-height: 27px;
  color: #777777;
  font-weight: 500;
}

.relatedpost-title h4 {
  margin: 0;
}

.relatedpost-title span {
  font-size: 13px;
}

.recent-post ul {
  padding-left: 18px;
  list-style-type: none;
}

.recent-post ul li {
  padding: 5px 0;
  border-bottom: solid 1px #dddbdb;
}

.related-post {
  width: 49%;
  float: left;
}
</style>
