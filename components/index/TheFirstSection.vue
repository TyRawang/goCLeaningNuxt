<template>
  <!-- First Section -->
  <div id="first-section">
    <div class="first-box">
      <h2>WE REMOVE <span>THE</span><span>Headache</span> <span>FROM</span> <span>CLEANING</span></h2>
      <div class=""><nuxt-link to="/free-quote" class="btn">LET US CLEAN FOR YOU</nuxt-link> </div>
      
    </div>

    <div class="second-box">
      <h1>Best Cleaning <span>Service in Calgary</span> </h1> 
      <p>Go Cleaning is a proud cleaning company in <a href="https://www.calgary.ca/home.html">Calgary</a> that is family owned and operated. We
        beleive that clean environment leads to a <nuxt-link to="/blog/clean-house-cleaner-perspective"> clean house and a cleaner perspective.</nuxt-link>
      </p>
      <p>We have a staff of professional cleaners with years of experience in the <nuxt-link to="/commercial-cleaning-services-calgary">Commercial</nuxt-link> 
         and       <nuxt-link to="/residential-cleaning-services-calgary">Residential Cleaning industry</nuxt-link>. Your search stop here, we are provide the best
        Janitorial Service in Calgary.
      </p>

      <div class="btn">CHOOSE, QUALITY, CHOOSE GO CLEANING</div>
    </div>
    <div class="review-logos">
      <ul>
        <li><a href="https://g.page/gocleaningcanada?gm"><img src="~/assets/img/Go-Cleaning-Google-Review.png" alt="Go Cleaning Google Review"></a></li>
        <li><a href="https://homestars.com/companies/2925929-go-cleaning"><img src="~/assets/img/Go-Cleaning-HomeStars-Review.png" alt="Go Cleaning HomeStars Review"></a></li>
        <li><a href="https://www.yelp.ca/biz/go-cleaning-calgary"><img src="~/assets/img/Go-Cleaning-Yelp-Review.png" alt="Go Cleaning Yelp Review"></a></li>
      </ul>
    </div>
    <div class="side">
      <div class="side-overlay">
        <h3>Our customers love our serive and attention to safety and detail.</h3>
        <h4>Send us an email, call us, or let us call you</h4>
        <h3>Your convenience and happiness is our priority</h3>
        <div><nuxt-link to="/free-quote" class="btn">REQUEST A FREE QUOTE</nuxt-link>
    </div>
      </div>
    </div>
    <!-- <div class="service-info">
      <div>
        <h3>In need of cleaning service for your company?</h3>
        <h4>We ar the cleaning solution for your small, medium or large space.</h4>
      </div>
    </div> -->
    <div class="testimonials">
      <h2>Testimonials</h2>
      <div class="testimonials-content">

        <client-only placeholder="Loading Testimonials Corousel;...">
        <VueSlickCarousel ref="carousel" v-bind="slickOptions">
          <div>
            <div class="cards">
              <div>
                <!-- <img src="~/assets/img/noah_bowman.png" alt=""> -->
                <img src="https://cdn5.vectorstock.com/i/1000x1000/61/44/young-man-smiling-person-caucasian-attractive-vector-14906144.jpg" alt="">
              </div>
              <div>
                <p>
                  “Go Cleaning provided me with excellent services. Their cleaners are always smiling and have great respect for me and house. I can easily say they are the best cleaning service near me”
                </p>
                <h6>Noah</h6>
              </div>
            </div>
          </div>
          <div>
            <div class="cards">
              <div>
                <!-- <img src="~/assets/img/noah_bowman.png" alt=""> -->
                <img src="https://image.freepik.com/free-vector/happy-young-woman-raises-her-with-sign-ok-presentation-concept-character-vector-illustration_102172-492.jpg" alt="">
              </div>
              <div>
                <p>
                  “I highly recommend Go Cleaning!”
                </p>
                <h6>Avery</h6>
              </div>
            </div>
          </div>
          <div>
    
          </div>
          <div>
            <div class="cards">
              <div>
                <img src="https://image.freepik.com/free-vector/moslem-boy-celebrating-ramadan-with-beautiful-burning-lamp-his-hand_102172-521.jpg" alt="">
              </div>
              <div>
                <p>
                  “Go Cleaning is a company that I trust because of the relationship I have build with the cleaners. It is hard for me to give access to my personal living space easily. I am glad that I have cleaners that I can trust. Now i come home knowing my home will get best cleaning service and is in secure hands”
                </p>
                <h6>Medalin</h6>
              </div>
            </div>
          </div>
          <div>
            <div class="cards">
              <div>
                <img src="https://image.freepik.com/free-vector/moslem-boy-celebrating-ramadan-with-beautiful-burning-lamp-his-hand_102172-521.jpg" alt="">
              </div>
              <div>
                <p>
                  “I found Go Cleaning through their ad. I am glad that I clicked that ad and choose them. They are on time and professional. I’ve tried several and I am happy and i can say they provide the best cleaning service”
                </p>
                <h6>Sue</h6>
              </div>
            </div>
          </div>
          <div>
            <div class="cards">
              <div>
                <img src="https://image.freepik.com/free-vector/moslem-boy-celebrating-ramadan-with-beautiful-burning-lamp-his-hand_102172-521.jpg" alt="">
              </div>
              <div>
                <p>
                  “I love their cleaners. They are so friendly, always smiling”
                </p>
                <h6>Ava</h6>
              </div>
            </div>
          </div>
        </VueSlickCarousel>
        </client-only>

      </div>

    </div>

    <!-- END OF SECTION-ONE -->
  </div>
</template>

<script>
export default {
name: "TheFirstSection",
  data(){
  return {
    // slickOptions: {
    //   arrows: false,
    //   dots: false,
    //   infinite: true,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   autoplay: true,
    //   speed: 2000,
    //   autoplaySpeed: 4000,
    //   cssEase: "linear"
    // }
    slickOptions: {
        arrows: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        // slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 8000,
        cssEase: "linear"
      }
  }
  }
}
</script>

<style>

#first-section  {
  display: grid;
  grid-template-columns: 1fr 1.5fr 3fr 0.3fr 2fr;
  grid-auto-rows: auto;
}

#first-section .first-box{
  background-color: rgba(254, 222, 51);
  /* padding-top: 1rem;
  padding-right: 1rem; */
  padding: 1rem;
}


#first-section .first-box h2 {
  color: #fff;
  text-align: end;
  line-height: 3rem;

}

#first-section .first-box .btn {
  background-color: #ffffff;
  color: var(--button-colour);
  border: none;
  text-align: center;
  margin-top: 1rem;
}

#first-section .first-box span {
  display: block;
}

#first-section .second-box {
  padding: 1rem;
  margin-top: 2rem;
  grid-column-start: 2;
  grid-column-end: 4;
}

#first-section  .second-box h1 {
  line-height: 3.5rem;
  margin-bottom: 0.5rem;
}

#first-section  .second-box p {
  color: grey;
  margin-bottom: 1rem;

}

#first-section  .second-box span {
  display: block;
}

#first-section  .second-box .btn {
  background-color: #ffffff;
  color: var(--button-colour);
  border-color: var(--button-colour);
  text-align: center;
  width: 60%;
}

#first-section .review-logos  {
  padding: 3rem;
}

#first-section .side {
  grid-column-start: 5;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 3;
  width: 100%;
  height: auto;
  background: url('~assets/img/Go-Cleaning-Commercial-Cleaning.jpg') no-repeat left center/cover;
}

#first-section .side .side-overlay {

  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 4rem;
  background-color: rgba(88, 196, 234, 0.65);
  width: 100%;
  height: 100%;
  color: #ffffff;
  line-height: 2.3rem;
  margin-bottom: 3rem;
}

#first-section .side h3, h4 {
  font-size: 1.5rem;
  padding-top: 1rem;
}

#first-section .side .side-overlay > * {
  margin: 0.5rem;
}

#first-section .side div .btn {
  padding: 0.5rem;
}


#first-section div:nth-child(5) div .btn {
  background-color: rgba(95, 97, 96, 0.8);
  color: #ffffff;
  border: #ffffff;
  border-style: solid;
  border-width: thin;
  padding: 1rem;
}

/* TESTMONIALS */
#first-section .testimonials  {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 3;
  padding: 2rem;


}

#first-section .testimonials h2 {
  text-align: center;
  margin-bottom: 2rem;
}

#first-section .testimonials .testimonials-content .cards {
    display: flex;
    flex-direction: row;
    max-width: 45rem;
}

#first-section .testimonials .testimonials-content .cards p {
    font-family: Dosis;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 25px;
    color: #777777;

}


#first-section .testimonials .testimonials-content  img {
    border-radius: 95%;
    width: 200px;
  }

  #first-section .testimonials .testimonials-content .cards :nth-child(2) {
      padding: 1rem;
  }

  #first-section .testimonials .testimonials-content .cards :nth-child(2) h6 {
      text-align: right;
      color: var(--secondary-colour);
      font-size: 2rem;

  }
  /* ============================================= */

@media (max-width: 800px) {
  #first-section {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  #first-section .first-box {
    grid-column-start: 1;
    grid-column-end: 6;
    grid-row-start: 3;
    grid-row-end: 4;
    /* display: none;  */

  }
  #first-section .second-box {
    grid-column-start: 1;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 2;

    flex-direction: row;
  }

  #first-section .review-logos {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
    /* display: inline-block; */

  }
  #first-section .review-logos ul li {
    display: inline;
    margin: auto;
    width: 50%;
    padding: 10px;

  }

  #first-section .side {
    grid-column-start: 1;
    grid-column-end: 6;
    grid-row-start: 5;
    grid-row-end: 6;

  }

  #first-section .service-info {
    grid-column-start: 1;
    grid-column-end: 6;
    grid-row-start: 6;
    grid-row-end: 7;


  }

  #first-section .testimonials {
    grid-column-start: 1;
    grid-column-end: 6;
    grid-row-start: 4;
    grid-row-end: 5;

  }

  @media (max-width: 750px) {
      #first-section .testimonials .testimonials-content .cards {
        /* display: flex; */
        flex-direction: column;
        max-width: 15rem;
        /* margin-right: 4rem;  */
    } 
  }
}

</style>
