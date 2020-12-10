<template>
    <div id="section-two-testimonials" class="">
        <div>
            <h3>Request a Callback</h3>
            <p>Give us your information and request a call </p>
            <button><nuxt-link to="/free-quote">Request a Callback</nuxt-link></button>
            <!-- <input type="tel" id="phone" name="phone" placeholder="YOUR PHONE NUMBER" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required><br><br>         -->
        </div>
        <div>
            <span></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RequestCallBack'
}
</script>

<style scoped>
#section-two-testimonials {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      /* margin-bottom: 3rem; */
  }
  #section-two-testimonials input {
    border-radius: 25px;
    border: 2px solid #73AD21;
    padding: 20px;
    width: 80%;
    height: auto;
    background: rgba(106,191,22, 0.3);
    /* color: lavender; */
  }


  #section-two-testimonials input ::placeholder {
      color: white;
  }


 

  #section-two-testimonials div:nth-child(1) {
      background: var(--primary-colour);
  }
  #section-two-testimonials div:nth-child(2) {

        background:radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(106,191,22,1) 82%), url(~assets/img/Happy-Family.jpg) no-repeat center center/cover;
        
    }

    #section-two-testimonials h3 {
        color: #ffffff;
        font-style: normal;
        font-weight: bold;
        font-size: 42px;
        line-height: 40px;

        padding-top: 1rem; 
        padding-bottom: 1rem;
    
    }

    #section-two-testimonials div {
        padding: 3rem; 
    }

    #section-two-testimonials p {
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        padding-bottom: 1rem;
        color: #FFFFFF;
    }
        
    @media (max-width: 1000px) {

        #section-two-testimonials {
            grid-template-columns: 1fr;
        }
        #section-two-testimonials div:nth-child(1) {
        background:radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(106,191,22,1) 82%), url(~assets/img/Happy-Family.jpg) no-repeat center center/cover;
        }
        #section-two-testimonials div:nth-child(2) {
            display: none;
        
    }
    }
   
</style>