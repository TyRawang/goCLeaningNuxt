<template>
    <div id="section-one-testimonials" class="container">
        <h3>WHAT THEY SAY ABOUT US</h3>
        <h2>TESTIMONIALS</h2>
        <div>
            <div class="cards">
                <div>
                    <img src="~/assets/img/noah_bowman.png" alt="">
                </div>
                <div>
                    <p> 
                        Gdo Cleaning provided me with excellent services. Their cleaners 
                        are always smiling and have great respect for me and house. I can 
                        easily say they are the best cleaning service near me. Noah
                    </p>
                    <h6>Noah</h6>
                </div>
            </div>
        </div>            

    </div>
</template>

<script>
export default {
    name: 'TheTestimonialSectionOne'
}
</script>

<style scoped>
#section-one-testimonials div .cards {
    display: flex;
    flex-direction: row;
    /* background-color: grey; */
}
#section-one-testimonials .cards {
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
</style>