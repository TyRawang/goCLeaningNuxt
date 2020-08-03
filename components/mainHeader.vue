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
        <img src="img/logo.png" alt="Go Cleaning Logo" class="logo">
        <nav>
            <ul class="nav__links">
                <li><a href="index.html">Home</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="testimonials.html">Testimonials</a></li>
                <li><a href="frequently-asked-questions.html">FAQ</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="contact-us.html">Contact</a></li>

            </ul>
        </nav>
        <a href="#" class="cta"><button>Free Quote</button></a>
        <a onclick="openNav()" class="menu" href="#"><button>Menu</button></a>
    </header>

    <div id="mobile__menu" class="overlay">
        <a href="" onclick="closeNav()" class="close">&times;</a>
        <div class="overlay__content">
            <a href="#">Services</a>
            <a href="#">Projects</a>
            <a href="#">About</a>
        </div>
    </div>
    </section>
</template>