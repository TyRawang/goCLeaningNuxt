<template>
    <div id="section-one-residential" class="container">
        <div>
            <h2>House Cleaning</h2>
            <p>Dreaming of having a home that will always be clean as a whistle when you arrive home?</p>
            <h4>Well, you can stop dreaming!</h4>
            <p>Go Cleaning is a professional and affordable Residential cleaning services Calgary based company that hires professional and dedicated cleaners who will ensure that your house will be spotless by the time you arrive home.</p>    
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
    grid-template-columns: repeat(2, minmax(0, 1fr));
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