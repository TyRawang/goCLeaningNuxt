<template>
    <div id="second-section-commercial" class="container">
        <div>
            <span><img src="~assets/svg/smiley-face.svg" alt="Go Cleaning Smiling Face SVG"></span>
            <span><h4>Happy To Serve You</h4></span>
            <span><p>We love what we do, thus we provide you commercial cleaning services like you have never experienced before. We work with the motto that happy customer is the best reward in any business.</p></span>
        </div>
        <div>
            <span><img src="~assets/svg/list.svg" alt="Go Cleaning Background Checks SVG"></span>
            <span><h4>Background Checks</h4></span>
            <span><p>All of our employees go through mandatory background checks which includes, police clearance, reference check and social media check</p></span>

        </div>
        <div>
            <span><img src="~assets/svg/clock.svg" alt="Go Cleaning Flexible SVG"></span>
            <span><h4>Flexible</h4></span>
            <span><p>We are extremely flexible with our schedule. We work all year around, no sick days. You can even do last minute booking for your commercial cleaning requirements.</p></span>
        </div>
        <div>
            <span><img src="~assets/svg/moving-clock.svg" alt="Go Cleaning Specific Time SVG"></span>
            <span><h4>Specific TIme</h4></span>
            <span><p>You can schedule us for any specific time for your commercial cleaning services requirements. We work round the clock throughout the year and you can schedule your appointment whenever its feasible for you. </p></span>

    
        </div>
        <div>
            <span><img src="~assets/svg/folding-list.svg" alt="Go Cleaning No Hidden Fees SVG"></span>
            <span><h4>No Hidden Fees</h4></span>
            <span><p>We do not have any hidden fees. </p></span>
        </div>
        <div>
            <span><img src="~assets/svg/calculator.svg" alt="Go Cleaning Calculator SVG"></span>
            <span><h4>Free Estimates    </h4></span>
            <span><p>We do a free in-person estimate</p></span>
        </div>
    </div>
</template>

<script>
export default {
    name: "TheCommercialSecondSection"
}
</script>

<style scoped>
    #second-section-commercial {
    display: grid;
    /* grid-template-columns: repeat(3, 3fr); */
    grid-template-columns: repeat( auto-fit, minmax(350px, 1fr) );
    grid-gap: 1rem;
    /* margin: 0 auto; */

}

#second-section-commercial > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
}

#second-section-commercial > div h4 {
    color: #32B8E9;
}

#second-section-commercial > div p {
    font-weight: normal;
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: center;
    color: #777777;
}
</style>