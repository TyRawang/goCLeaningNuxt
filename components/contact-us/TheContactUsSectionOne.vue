<template>
    <section class="container">
        <div class="contact-info">
            <div>
                <a href="tel:1-855-213-0087"><i class="fas fa-phone"></i> </a>  
                <h3>Call Us</h3>
                <a href="tel:1-855-213-0087">1 (855) 213-0087</a>  
                or 
                <a href="tel:403-768-4186">(403) 768-4186</a>
            </div>
            <div>
                <a href="mailto:info@gocleaning.ca"><i class="far fa-envelope"></i></a>
                <h3>Email Us</h3>
                <a href="mailto:info@gocleaning.ca">info@gocleaning.ca</a>
            </div>
            <div>
                <a href="https://www.facebook.com/gocleaningcalgary"><i class="fab fa-facebook-f"></i></a>
                <h3>Facebook</h3>
                <a href="https://www.facebook.com/gocleaningcalgary">Go Cleaning Facebook</a>
            </div>
        </div>
        <div class="contact-form"> 
            <div class="contact-form-about">
                <p>Go Cleaning is the Best Cleaning Service provider in Calgary. We provide solution to all you home cleaning problems. Feel free to call or drop a mail. Best Home Cleaning Services Calgary Contact No. : 1 (855) 213-0087 &amp; (403) 768-4186</p>
                <p>Contact us to get the hassle free, cost effective and best in class Cleaning Services in Calgary. You can also request a call back or an appointment for your later on requirements. We believe that clean home leads to cleaner perspective and a happy customer is the best reward. We treat your problems like our own and our well trained staff is patient to answer all your queries, you can give them some instructions if you want regarding a special section of your house, or whatever your needs are you will definitely get best services delivered as promised. So don’t wait, don’t hesitate, call the best cleaning services and get your house back in its beautiful state.</p>
            </div>
            <div>
                <h1>Send Us a Message</h1>
                <form action="/thanks" name="contact-us-page" method="POST" data-netlify="true">
                    <input type="text" id="name" name="Customer-Name" placeholder="Your name..">
                    <input type="text" id="cname" name="Company-Name" placeholder="Your Company name..">
                    <select id="cleaning-type" name="Cleaning-Type">
                    <option value="Commercial">Commercial</option>
                    <option value="Residential">Residential</option>
                    <option value="Carpet Cleaning">Carpet Cleaning</option>
                    </select>
                    <textarea id="subject" name="More-Details" placeholder="More Details ..."></textarea>
                    <input type="submit" value="Submit">
                </form>
            </div>
        </div>
        
    </section>
</template>

<style scoped>
    .contact-info {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        grid-gap: 2rem; 
        /* justify-content: center; */
        justify-items: center;
        align-items: center;
        padding: 3rem;

    }

    section div:nth-child(1) div {
        display: block;
        text-align: center;
    }

    i {
        font-size: 4rem;
        color: var(--primary-colour);
    }

    h3 {
        font-size: 2rem; 
        color: var(--secondary-colour);
        font-weight: bold;
    }
    p {
        font: 16px 'Roboto', sans-serif;
        font-weight: 400;
        font-style: normal;
        letter-spacing: 0px;
        font-style: normal;
        line-height: 2;
        color: #585858;    
    }

    .contact-form  {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        grid-gap: 2rem; 
        margin-bottom: 4rem;
        /* padding-top: 1rem; */

    }

    .contact-form-about {
        padding-top: 3rem; 
    }

    input[type=text], select, textarea {
        width: 100%;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        margin-top: 6px;
        margin-bottom: 16px;
        resize: vertical;
    }

    input[type=submit] {
        background-color: #4CAF50;
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    input[type=submit]:hover {
        background-color: #45a049;
    }
    .contact-form form textarea {
        height: 200px;
    }
    form label {
        /* color: ; */
    }
</style>