<template>
    <div id="section-three-commercial" class="container">
        <h2>Office Cleaning Basics</h2>
        <div>
            <p>Have you found yourself marvelling at office spaces that always seem to be a pristine condition? Have you wondered how your office can achieve that? Go Cleaning has you covered. Go Cleaning is a cleaning company that got all your office cleaning requirements covered! As we will provide you best commercial cleaning services Calgary.</p>
            <p>As a professional cleaning company, we offer exceptional customer service as we are open all year round, you can schedule us for a specific cleaning time, there are no hidden fees, and we provide free estimates. </p>
            <p> We hold our employee’s to a very high standard as we conduct mandatory background checks via police checks, reference checks, and social media checks as we want them to be experienced cleaners who have a passion for cleaning.</p>
            <p>Our cleaning professionals will regularly clean your office space by first reviewing the cleaning needs of your office space and then developing and implementing a cleaning strategy that will best fit the needs of your office space. Alongside the cleaning of your office space, our cleaners will sterilize the shared common rooms of the office such as the washrooms and the kitchen area.</p>
        </div>
        <div>
            <img src="~assets/img/Go-Cleaning-Commercial-Cleaning-Crop.png" alt="Go Cleaning Commercial Cleaning">
        </div>
    </div>
</template>

<script>
export default {
    name: "TheCommercialThirdSection"
}
</script>

<style scoped>
    #section-three-commercial {
    display: grid;
    /* grid-auto-columns: 1fr 1fr; */
    /* grid-auto-flow: column; */
    grid-template-columns: repeat(2, minmax(0, 1fr));
    /* grid-auto-flow: column; */
    grid-gap: 3rem;
    background-color: #F8F9FD;   
    padding: 3rem;
    }

    #section-three-commercial h2 {
        text-align: center;
        grid-column-start: 1; 
        grid-column-end: 4; 
        grid-row-start: 1; 
        grid-row-end: 3; 
    }

    #section-three-commercial p {
        font-size: 14px;
        line-height: 25px;
        color: #777777;
    }

    #section-three-commercial img {
        max-width: 60%;
        /* max-height: 10%;
        max-width: auto; */
    }

    @media (max-width: 800px) {
        #section-three-commercial {
            display: inline-block;
        }
    }
</style>