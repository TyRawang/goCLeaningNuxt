<template>
    <div id="section-one-testimonials" class="container">
        <h3>WHAT THEY SAY ABOUT US</h3>
        <h2>TESTIMONIALS</h2>

        <client-only>
        <VueSlickCarousel  ref="carousel" v-bind="slickOptions">
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
</template>

<script>
export default {
  name: 'TheTestimonialSectionOne',
  data() {
    return {
      slickOptions: {
        arrows: true,
        infinite: true,
        // slidesToShow: 2,
        // slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        "dots": true,
        "infinite": true,
        "centerMode": true,
        "centerPadding": "100px",
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "variableWidth": true      
        }    
      }
    }
}
</script>

<style scoped>
#section-one-testimonials div .cards {
    display: flex;
    flex-direction: row;
    /* background-color: grey; */
        max-width: 30rem;

}
#section-one-testimonials .cards p {
    font-family: Dosis;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 25px;
    color: #777777;

}


#section-one-testimonials  img {
    border-radius: 95%;
    width: 200px;
  }

  #section-one-testimonials .cards :nth-child(2) {
      padding: 2rem;
  }

  #section-one-testimonials .cards :nth-child(2) h6 {
      text-align: right;
      color: var(--secondary-colour);
      font-size: 2rem;

  }
  .cards {
    margin: 2rem;
  }
</style>
