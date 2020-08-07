<template>
  <section>
    <!-- PreNav -->
    <div id="pre-nav">
      <div>
        <a href="tel:+14037684186">(403)-768-4186</a>
      </div>
      <div>
        <a href="https://www.facebook.com/gocleaningcalgary/"><i class="fab fa-facebook-f fa-2x"></i></a>
        <a href="https://www.instagram.com/gocleaningcalgary/"><i class="fab fa-instagram fa-2x"></i></a>
        <a href="https://www.linkedin.com/company/18969594/"><i class="fab fa-linkedin-in fa-2x"></i></a>
        <a href="mailto: info@gocleaning.ca"><i class="fas fa-envelope fa-2x"></i></a>
      </div>
    </div>

    <header>
      <img src="~/assets/img/logo.png" alt="Go Cleaning Logo" class="logo">
      <nav>
        <ul class="nav__links">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="#">Services <i class="fas fa-angle-down"></i> </nuxt-link>
            <ul class="dropdown">
              <li></li>
              <li><nuxt-link to="commercial-cleaning-service-calgary">Commercial</nuxt-link></li>
              <li><nuxt-link to="residential-cleaning-service-calgary">Residential</nuxt-link></li>
              <li><nuxt-link to="airbnb-cleaning-service-calgary">Airbnb</nuxt-link></li>
            </ul>
          </li>
          <li><nuxt-link to="testimonials.html">Testimonials</nuxt-link></li>
          <li><nuxt-link to="frequently-asked-questions.html">FAQ</nuxt-link></li>
          <li><nuxt-link to="blog.html">Blog</nuxt-link></li>
          <li><nuxt-link to="contact-us.html">Contact</nuxt-link></li>
        </ul>
      </nav>
      <nuxt-link to="#" class="cta">
        <button>Free Quote</button>
      </nuxt-link>
      <a @click="openNav" class="menu" href="#">
        <button>Menu</button>
      </a>
    </header>

    <div id="mobile__menu" class="overlay" ref="mobileMenu">
      <a href="#" @click="closeNav" class="close">&times;</a>
      <div class="overlay__content">
        <nuxt-link to="#">Services</nuxt-link>
        <nuxt-link to="#">Projects</nuxt-link>
        <nuxt-link to="#">About</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    openNav(){
      this.$refs.mobileMenu.style.width = '100%';
    },

    closeNav(){
      this.$refs.mobileMenu.style.width = '0%';
    }
  }
}
</script>

<style>
/* PreNav */
#pre-nav {
  background: var(--secondary-colour);
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1.5rem;
  padding: 0.25rem 1rem 0.25rem 1rem;
}



#pre-nav a {
  font-weight: bold;
  font-size: 1.2rem;
  color: #fff;
}


#pre-nav >:last-child a {
  padding-left: 1rem;
}

#pre-nav >:last-child a:hover {
  color: var(--primary-colour);
}

/* Menu */

header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 30px 10%;
}

header .nav__links a:hover {
  color: var(--secondary-colour);
  border-bottom: 2px solid;
  margin-top: 0.5rem;
}

.logo {
  cursor: pointer;
  margin-right: auto;
}

.nav__links {
  list-style: none;
}

.nav__links li {
  display: inline-block;
  padding: 0px 20px;
}

.nav__links li:nth-child(1) {
  padding: 0 20px 0 0;
}

.nav__links li a {
  transition: all 0.3s ease 0s;
  font-weight: bold;
  font-size: 1rem;
  color: grey;
}

.nav__links li a:hover {
  color: #0088a9;
}

/* SubMenu */
nav a {
  text-decoration: none;
}

/* nav {
	font-family: monospace;
} */

nav ul {
  background:rgba(255,255,255, 0.9);
	list-style: none;
	margin: 0;
	padding-left: 0;
}

nav li {
	color: #fff;
  /* background: darkorange; */
	display: block;
	float: left;
	padding: 1rem;
	position: relative;
	text-decoration: none;
  transition-duration: 0.5s;
}
  
nav li a {
  color: #fff;
}

nav li:hover,
nav li:focus-within {
	/* background: red; */
	cursor: pointer;
}

nav li:focus-within a {
  outline: none;
}

nav ul li ul {
	/* background: orange; */
	visibility: hidden;
  opacity: 0;
  min-width: 5rem;
	position: absolute;
  transition: all 0.5s ease;
  padding-top: 1rem;
	left: 0;
  display: none;
}

nav ul li:hover > ul,
nav ul li:focus-within > ul,
nav ul li ul:hover,
nav ul li ul:focus {
  visibility: visible;
  opacity: 1;
  display: block
}

nav ul li ul li {
	clear: both;
  width: 100%;
  padding-bottom: 1rem !important;
}

/* End of SubMenu */

 .cta {
  order: 2;
}

 .menu {
  display: none;
}

 button {
  margin-left: 2rem;
  padding: 9px 25px;
  background-color: var(--button-colour);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
}

 button:hover {
  opacity: 0.9;
}

/* Mobile For Menu*/
@media only screen and (max-width: 1100px) {
  .nav__links, .cta {
    display: none;
  }

  .menu {
    display: inherit;
  }
}

/* Mobile Nav */

.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  background-color: var(--primary-colour);
  overflow-x: hidden;
  transition: all 0.5s ease 0s;

}

.overlay__content {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}

.overlay__content a {
  padding: 1rem;
  font-size: 5rem;
  display: block;
  transition: all 0.3s ease 0s;
  color: #edf0f1;

}

.overlay a:hover, .overlay a:focus {
  color: var(--button-colour);
}

.overlay .close {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 5rem;
}

@media screen and (max-width: 1140px) {
  .overlay a {
    font-size: 1.5rem;
  }

  .overlay .close {
    font-size: 4rem;
    top: 1rem;
    right: 3rem;
  }

  /* #banner .banner-bg .banner-form form {
      grid-template-columns: repeat(2, 1fr);


  } */
}
</style>
