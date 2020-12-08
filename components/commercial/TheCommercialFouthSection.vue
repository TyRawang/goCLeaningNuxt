<template>
     <div id="section-four-commercial" class="container">
        <h3>Go Cleaning will present a checklist that you will find below</h3>
        <div>
            <h4><span> Work Areas, Common Areas,</span> <span>Cubicles & Private Work Areas</span> </h4>
            <ul>
                <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Dust and wipe all reachable surfaces
                </li>
                <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Wipe door handles and light switches
                </li>
                <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Wipe mirrors and glass fixtures
                </li>
                <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Removal of wastes, garbage, and recycling
                </li>
                <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Cleaning of furniture, computer areas, mirrors
                </li>
                <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Glass and wood polish and shining 
                </li>
                <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Freshen the air and removal of smells
                </li>

            </ul>
        </div>
        <div>
            <h4>Bathrooms</h4>
            <ul>
                <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Wash and sanitize toilet, shower and sink
                </li>
                <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Dust and wipe all reachable surfaces
                </li>
                <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Wipe door handles and light switches
                </li>
                <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Wipe mirrors and glass fixtures
                </li>
                <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Wipe mirrors and glass fixtures
                </li>
                <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Mop all floors
                </li>
                
                <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Take out trash and recyclables
                </li>
            </ul>
        </div>
        <div>
            <h4>Kitchen & Break Areas</h4>
            <ul>
                <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Wash and scrub sink
                </li>
                <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Wash cabinet faces and appliances
                </li>
                <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Clean inside and outside of the microwave
                </li>
                <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Clean countertops
                </li>
                <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Mop all floors
                </li>
                <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Dust and wipe all reachable surfaces
                </li>
                <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Wipe door handles and light switches
                </li>
                <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Wipe mirrors and glass fixtures
                </li>
                <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Take out trash and recyclables
                </li>
            </ul>
        </div>
        <div>
            <h4>Lobbies, Boardrooms & Reception</h4>
            <ul>
                <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Dust and wipe all reachable surfaces
                </li>
                <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Wipe door handles and light switches
                </li>
                <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Wipe mirrors and glass fixtures
                </li>
                <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Mop all floors
                </li>
                <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Take out trash and recyclables
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheCommercialFourthSection'
}
</script>

<style scoped>
    #section-four-commercial {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    justify-items: center;
    margin-top: 5rem;

    }

    #section-four-commercial h3 {
        color: var(--secondary-colour);
        font-size: 2rem;
        font-weight: 500;
        line-height: 4rem;
        text-align: center;
        grid-column-start: 1; 
        grid-column-end: 3; 
        grid-row-start: 1; 
        grid-row-end: 2; 
        
    }

    #section-four-commercial h4 {
        color: var(--secondary-colour);
        font-size: 1.5rem;
        line-height: 28px;
    }

    #section-four-commercial ul {
        padding: 1rem;   
    }

    #section-four-commercial li {
        font-size: 14px;
        line-height: 25px;
        color: #777777;
    }

    #section-four-commercial li i {
        color: #FFDE33;
        width: 7px;
        height: 13px;
        left: 23px;
        top: 77px;
    }

    #section-four-commercial div {
        padding: 1rem;
        /* background-color: aqua; */
    }

    @media (max-width: 700px) {
        #section-four-commercial {
            display: inline-block; 
        }
    }

</style>