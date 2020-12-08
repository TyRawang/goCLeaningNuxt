<template>
    <div id="section-one-residential" class="container">
        <div>
            <h2>Carpet Cleaning Clean</h2>
            <p>It is not easy to keep your clean even if you vacuum everyday. Let us clean for you &#128515;.</p>
            <h4>Hey, don't wait any longer!</h4>
            <p>At Go Cleaning we provide the best carpet cleaning service in Calgary for 
                the most reasonable rate. Let us make your carpet feel and smeel fresh again 
                with our commercial graded carpet cleaning machine and save chemicals.
            </p>    
        </div>
        <div>
            <img src="~/assets/img/Go-Cleaning-Residential-Cleaning.jpg" alt="Go Cleaning Residental Cleaning">
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheCarpetSectionOne'
}
</script>

<style scoped>
#section-one-residential {
    display: grid;
    /* grid-template-columns: repeat(2, minmax(0, 1fr)); */
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));

    justify-items: center;
    margin-top: 3rem;
    grid-gap: 2rem;

}

#section-one-residential img {
    max-width: 70%;
}

#section-one-residential h4 {
    color: var(--secondary-colour)
}

#section-one-residential p {
    color: #777777;
}

</style>