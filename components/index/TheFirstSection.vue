<template>
  <!-- First Section -->
  <div id="first-section">
    <div class="first-box">
      <h2>WE REMOVE <span>THE</span><span>Headache</span> <span>FROM</span> <span>CLEANING</span></h2>
      <div class="btn">LET US CLEAN FOR YOU</div>
    </div>

    <div class="second-box">
      <h1>Best Cleaning <span>Service in Calgary</span> </h1>
      <p>Go Cleaning is a proud cleaning company in Calgary that is family owned and operated. We
        beleive that clean environment leads to cleaner perspective and a healthier life.
      </p>
      <p>We have a staff of professional cleaners with years of experience in the Commerical and
        Residential Cleaning industry. Your search stop here, we are provide the best
        Janitorial Service in Calgary.
      </p>
      <div class="btn">CHOOSE, QUALITY, CHOOSE GO CLEANING</div>
    </div>
    <div class="review-logos">
      <ul>
        <li><a href="#"><img src="~/assets/img/Go-Cleaning-Google-Review.png" alt="Go Cleaning Google Review"></a></li>
        <li><a href="#"><img src="~/assets/img/Go-Cleaning-HomeStars-Review.png" alt="Go Cleaning HomeStars Review"></a></li>
        <li><a href="#"><img src="~/assets/img/Go-Cleaning-Yelp-Review.png" alt="Go Cleaning Yelp Review"></a></li>
        <li><a href="#"><img src="~/assets/img/Go-Cleaning-BBB-Review.jpg" alt="Go Cleaning BBB Review"></a></li>
      </ul>
    </div>
    <div class="side">
      <div class="side-overlay">
        <h3>Our customers love our serive and attention to safety and detail.</h3>
        <h4>Send us an email, call us, or let us call you</h4>
        <h3>Your convenience and happiness is our priority</h3>
        <div class="btn">REQUEST A FREE QUOTE</div>
      </div>
    </div>
    <div class="service-info">
      <div>
        <h3>In need of cleaning service for your company?</h3>
        <h4>We ar the cleaning solution for your small, medium or large space.</h4>
      </div>
    </div>
    <div class="testimonials">
      <h2>Testimonials</h2>
      <div class="testimonials-content">
        <div class="cards">
          <img src="~/assets/img/noah_bowman.png" alt="Go Cleaning Testimonial">
          <p>
            Go Cleaning provided me with excellent services. Their
            cleaners are always smiling and have great respect for me
            and house. I can easily say they are the best cleaning service
            near me.
            <span>Noah</span>
            <span>Happy Customer</span>
          </p>
        </div>
      </div>
    </div>

    <!-- END OF SECTION-ONE -->
  </div>
</template>

<script>
export default {
name: "TheFirstSection"
}
</script>

<style>

#first-section  {
  display: grid;
  grid-template-columns: 1fr 1.5fr 3fr 0.3fr 2fr;
  grid-auto-rows: auto;
  /* grid-gap: 1rem; */

  /* border-radius: 10rem; */


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

#first-section :nth-child(5) {

  grid-column-start: 1;
  grid-column-end: 3;
  width: 100%;
  height: auto;
  background: url('~assets/img/Go-Cleaning-Header-Background.jpg') no-repeat right center/cover;
  /* background-color: rgba(95, 97, 96, 0.8); */
  color: #ffffff;
}

#first-section :nth-child(5) div {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 4rem;
  padding-bottom: 4rem;
  background-color: rgba(95, 97, 96, 0.8);
  width: 100%;
  height: 100%;
  color: #ffffff;
  line-height: 1.3rem;

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
  /* background-color: black; */
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 3;
  padding: 2rem;


}


#first-section .testimonials h2 {
  text-align: center;
  margin-bottom: 2rem;
}

#first-section .testimonials .cards  img {
  border-top-left-radius: 1rem;
}

#first-section .testimonials .cards p {
  background: linear-gradient(124.9deg, #1675BF -5.34%, #32B8E9 110.05%);
  color: #fff;
  padding: 1rem;

}

#first-section .testimonials .cards p span {
  display: block;
}


#first-section .testimonials .testimonials-content .cards {
  display: flex;
  /* grid-template-columns: repeat(3, 1fr); */

}

@media (max-width: 800px) {
  #first-section {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  #first-section .first-box {
    grid-column-start: 5;
    grid-column-end: 6;
    grid-row-start: 3;
    grid-row-end: 4;

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

  #first-section .side {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 4;

  }

  #first-section .service-info {
    grid-column-start: 1;
    grid-column-end: 6;
    grid-row-start: 5;
    grid-row-end: 6;


  }

  #first-section .testimonials {
    grid-column-start: 3;
    grid-column-end: 6;
    grid-row-start: 2;
    grid-row-end: 3;

  }
}

@media (max-width: 600px) {
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
  #first-section .review-logos ul {
    display: inline;
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
}
</style>
