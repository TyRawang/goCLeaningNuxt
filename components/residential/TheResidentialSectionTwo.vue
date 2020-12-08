<template>
    <div id="section-two-residential" class="container">
        <div class="cards">
            <span>
                <img src="~/assets/svg/go-cleaning-man.svg" alt="Go Cleaning Man Icon">
                <img src="~/assets/svg/go-cleaning-female.svg" alt="Go Cleaning Female Icon">
            </span>
            <h3>Deep Cleaning</h3>
            <p>2 Cleaners</p>
            <ul>
                <li>1 Bedroom House: $185</li>
                <li>2 Bedroom House: $215</li>
                <li>3 Bedroom House: $245</li>
                <li>4 Bedroom House: $289</li>
                <li>5 Bedroom House: 2235</li>
            </ul>
            <h4>STARTING FROM</h4>
            <h5>$185</h5>
            <h6>FLAT RATE</h6>
        </div>
        <div class="cards">
            <span class="btn">RECOMMENDED</span>
            <span>
                <img src="~/assets/svg/go-cleaning-man.svg" alt="Go Cleaning Man Icon">
                <img src="~/assets/svg/go-cleaning-female.svg" alt="Go Cleaning Female Icon">
                <img src="~/assets/svg/go-cleaning-calendar.svg" alt="Go Cleaning Calendar Icon">
            </span>
            <h3>Recurring Cleaning</h3>
            <p>2 Cleaners</p>
            <ul>
                <li>Weekly - 15% OFF</li>
                <li>Bi-Weekly - 10% OFF</li>
                <li>Monthly - 5% OFF</li>
            </ul>
            <h4>STARTING FROM</h4>
            <h5>$72</h5>
            <h6>FLAT RATE</h6>
            <!-- <span class="btn">SELECT</span> -->
        </div>
        <div class="cards">
            <span>
                <img src="~/assets/svg/go-cleaning-man.svg" alt="Go Cleaning Man Icon">
                <img src="~/assets/svg/go-cleaning-female.svg" alt="Go Cleaning Female Icon">
                <img src="~/assets/svg/go-cleaning-man-2.svg" alt="Go Cleaning Man Icon">
            </span>
            <h3>One Time Cleaning</h3>
            <p>2 Cleaners<p>
            <ul>
                <li>1 Bedroom House: $85</li>
                <li>2 Bedroom House: $115</li>
                <li>3 Bedroom House: $145</li>
                <li>4 Bedroom House: $189</li>
                <li>5 Bedroom House: $235</li>
            </ul>
            <h4>STARTING FROM</h4>
            <h5>$85</h5>
            <h6>FLAT RATE</h6>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheResidentialSectionTwo'
}
</script>

<style scoped>
#section-two-residential {
    display: grid;
    grid-template-columns: 1fr 1.15fr 1fr;
    justify-items: center;
    grid-gap: 1.5rem;
    margin-top: 4rem;
}

#section-two-residential .cards {
    padding: 1.5rem 0.5rem; 
    text-align: center;
}

#section-two-residential h3 {
    font-weight: 500;
    font-size: 28px;
    line-height: 35px;
    color: #6ABF16;
}

#section-two-residential p {
    font-size: 16px;
    font-weight: bold;
    /* line-height: 48px; */
    /* text-align: center; */
    letter-spacing: 5px;
    color: #777777;
    padding-bottom: 1rem;
}

#section-two-residential ul li {
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: #777777;

}

#section-two-residential .cards h4 {
    font-size: 14px;
    line-height: 25px;
    color: var(--secondary-colour);
}

#section-two-residential .cards h5 {
    font-weight: 600;
    font-size: 70px;
    line-height: 48px;
    color: var(--primary-colour);
    margin: 0.5rem 0;
}

#section-two-residential .cards h6 {
    font-size: 14px;
    line-height: 25px;
    color: #C4C4C4;
}

#section-two-residential .cards:nth-child(1), 
#section-two-residential .cards:nth-child(3) {
    margin: 1rem;
    /* background-color: var(--secondary-colour); */

}

#section-two-residential .cards:nth-child(2) li {
    line-height: 2.5rem;
}
 

#section-two-residential .btn {
    margin-top: -40px;
    background-color: #FFDE33;
    border: none;
    position: relative; 
    line-height: 0.5rem;
    letter-spacing: 5px;
    font-size: 14px;
    margin-bottom: 1.5rem;
    margin-left: 2rem;
    margin-right: 2rem; 
}

@media (max-width: 900px) {

    #section-two-residential {
        grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
        justify-content: center;
    }

}



</style>