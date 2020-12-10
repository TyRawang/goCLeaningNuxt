<template>
  <section>
    <div id="pre-footer">
      <h3>Our customers love our service and attention to safety and detail</h3>
      <p><span>Send us an email, call us, or let us call you</span></p>
      <p>Your convenience and happiness is our pririty</p>
      <button><nuxt-link to="/free-quote">REQUEST A FREE QUOTE</nuxt-link></button>
    </div>
    <div id="footer-menu" class="container">
      <div>
        <h3>About</h3>
        <p>Go Cleaning is a company based in Calgary that provides cleaning services. Our
          mission is to give the best customer satisfaction while empowering our cleaners.
        </p>
      </div>
      <div>
        <h3>Go Cleaning Menu</h3>
        <a><nuxt-link to="/">Home</nuxt-link></a>
        <a href="#">Services</a>
        <span><a><nuxt-link to="/commercial-cleaning-services-calgary">Commercial</nuxt-link></a></span>     
        <span><a><nuxt-link to="/residential-cleaning-services-calgary">Residential</nuxt-link></a></span>
        <span><a><nuxt-link to="/carpet-cleaning-service-calgary">Carpet Cleaning</nuxt-link></a></span> 
        <a href="#">About</a>
        <span><a><nuxt-link to="/blog">Blog</nuxt-link></a></span>     
        <span><a><nuxt-link to="/testimonials-reviews-for-best-cleaning-service">Testimonials</nuxt-link></a></span>
        <span><a><nuxt-link to="/best-cleaning-services-calgary-faq">FAQ</nuxt-link></a></span>
        <span><a><nuxt-link to="/contact-us-for-cleaning-services">Contact</nuxt-link></a></span> 
        
      </div>
      <div>
        <h3>Recent Posts</h3>
        <a><nuxt-link to="/blog/where-do-we-start-cleaning">- Where Do We Start Cleaning?</nuxt-link></a>
        <a><nuxt-link to="/blog/clean-house-cleaner-perspective">- Clean House, Cleaner Perspective</nuxt-link></a>
        <a><nuxt-link to="/blog/what-is-your-cleaning-style">- What Is Your Cleaning Style?</nuxt-link></a>
      </div>
    </div>              
    <!-- <li><nuxt-link to="/commercial-cleaning-service-calgary">Commercial</nuxt-link></li> -->

    <footer>
      <p>
        © Copyright {{ new Date().getFullYear() }} | All Rights Reserved | <nuxt-link to="/sitemap.xml">Sitemap</nuxt-link> | Powered by<a href="https://webdesigncalgary.net">WebDesign Calgary |</a> 
                  <nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link> | <nuxt-link to="/terms-conditions">Terms &amp; Conditions</nuxt-link> 
      </p>
    </footer>
  </section>
</template>

<script>
export default {
}
</script>

<style>
/* Pre Footer */

#pre-footer {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  background:radial-gradient(circle, rgba(50,184, 233, 0) 0%, rgba(50, 184, 233, 0.7) 0%), 
    url(~assets/img/Go-Cleaning-Body-Content-Three-Background.jpg) no-repeat center center/cover;
  border-bottom: solid;
  border-color: var(--primary-colour);
  border-width: 2rem;

}

#pre-footer h3 {
  font-weight: bold;
  font-size: 48px;
  line-height: 48px;
  text-align: center;
  color: #FFFFFF;

}

#pre-footer p {
  font-weight: 300;
  font-size: 30px;
  line-height: 40px;
  text-align: center;
  color: #FFFFFF;

}

#pre-footer p span {
  font-weight: 50;

  /* color: black; */
}

button {
  margin: 2rem;
}



/* Footer Menu */
#footer-menu {
  display: grid;
  grid-template-columns: 3fr 3fr 3fr;
  grid-gap: 2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;

}

#footer-menu h3 {
  color: black;
  text-align: left;

}

#footer-menu > div:nth-child(1)  p {
  font-weight: normal;
}

#footer-menu >div:nth-child(2), #footer-menu >div:nth-child(3) {
  display: flex;
  flex-direction: column;
}



#footer-menu >div:nth-child(2) span {
  margin-left: 1rem;
}

#footer-menu a:hover {
  color: var(--secondary-colour);
}


/* Footer */
footer {
  background: var(--secondary-colour);
}

footer p, footer a {
  padding: 1.5rem;
  color: #fff;
  margin: auto;
  width: 90%;
  font-size: 1rem;
  font-weight: 200;
}

footer a:hover {
  color: var(--primary-colour);
}

@media (max-width: 600px){
  #footer-menu  {
    grid-template-columns: 1fr;
  }
}
</style>
