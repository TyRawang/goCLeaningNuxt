<template>
  <section>
    <div id="footer-menu" class="container">
      <div>
        <h3>About</h3>
        <p>Go Cleaning is a company based in Calgary that provides cleaning services. Our
          mission is to give the best customer satisfaction while empowering our cleaners.
        </p>
      </div>
      <div>
        <h3>Go Cleaning Menu</h3>
        <a href="#">Home</a>
        <a href="#">Services</a>
        <span><a href="#">Residential</a></span>
        <span><a href="#">Commercial</a></span>
        <span><a href="#">Airbnb</a></span>
        <a href="#">Testimonials</a>
        <a href="#">Faq</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </div>
      <div>
        <h3>Recent Posts</h3>
        <a href="#">- Where Do We Start Cleaning?</a>
        <a href="#">- What Is Your Cleaning Style?</a>
        <a href="#">- Clean House, Cleaner Perspective</a>
      </div>
    </div>

    <footer>
      <p>© Copyright {{ new Date().getFullYear() }} | All Rights Reserved | Sitemap | Powered by WebDesign Calgary</p>
    </footer>
  </section>
</template>

<script>
export default {
}
</script>

<style>
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

footer p {
  padding: 1.5rem;
  color: #fff;
  margin: auto;
  width: 50%;
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
