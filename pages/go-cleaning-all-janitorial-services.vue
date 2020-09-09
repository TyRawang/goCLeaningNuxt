<template>
  <section class="go-cleaning-basic-page">
    <ThePageBannerSection :pageMaterials="bannerPageMaterials"/>

    <div class="page-section second-section">
      <TheGenericSection :reviewsOrTestimonial="false" :genericSectionContent="sectionContentOne"/>
    </div>

    <div class="page-section third-section">
      <TheGenericSection :reviewsOrTestimonial="false" :genericSectionContent="sectionContentTwo"/>
    </div>

    <div class="page-section forth-section">
      <TheGenericSection :reviewsOrTestimonial="false" :genericSectionContent="sectionContentThree"/>
    </div>

    <div class="page-section fifth-section">
      <TheGenericSection :reviewsOrTestimonial="false" :genericSectionContent="sectionContentFour"/>
      <div class="container">
        <div class="business-work-with">
          <nuxt-link to="#" class="business-link">
            <div class="business-window first-window">
              <div class="plus-sign">+</div>
            </div>
          </nuxt-link>
          <nuxt-link to="#" class="business-link">
            <div class="business-window second-window">
              <div class="plus-sign">+</div>
            </div>
          </nuxt-link>
          <nuxt-link to="#" class="business-link">
            <div class="business-window third-window">
              <div class="plus-sign">+</div>
            </div>
          </nuxt-link>
          <nuxt-link to="#" class="business-link">
            <div class="business-window forth-window">
              <div class="plus-sign">+</div>
            </div>
          </nuxt-link>
          <nuxt-link to="#" class="business-link fifth-window">
            <div class="business-window">
              <div class="plus-sign">+</div>
            </div>
          </nuxt-link>
          <nuxt-link to="#" class="business-link sixth-window">
            <div class="business-window">
              <div class="plus-sign">+</div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>

    <div class="page-section sixth-section">
      <TheGenericSection :reviewsOrTestimonial="true" :genericSectionContent="sectionContentSeven"/>
    </div>

    <div class="container page-section seventh-section">
      <div class="heading-area">

      </div>
      <div class="feature-boxes-area">
        <h2>Included For Every Client</h2>
        <hr>
        <TopImageCard class="feature-box" v-for="(feature, index) in features" :key="index" :cardContent="feature" />
        <p class="clearfix"></p>
      </div>
    </div>

    <div class="page-section eighth-section">
      <TheFaqSectionOne class="faq-section" />
    </div>


    <div class="page-section ninth-section">
      <TheGenericSection :reviewsOrTestimonial="true" :genericSectionContent="sectionContentTen"/>
    </div>
  </section>
</template>

<script>
import ThePageBannerSection from "@/components/shared/ThePageBannerSection";
import TheGenericSection from "@/components/shared/TheGenericSection";
import TopImageCard from "@/components/shared/TopImageCard";
import TheFaqSectionOne from "@/components/faq/TheFaqSectionOne";

export default {
  name: "go-cleaning-all-janitorial-services",
  components: {TheFaqSectionOne, TopImageCard, TheGenericSection, ThePageBannerSection},

  data() {
    return {
      bannerPageMaterials: {
        bannerImage: 'https://pictureperfectcleaning.ca/wp-content/uploads/2019/08/ppc-hero-services-image.jpg',
        pageTitle: 'JANITORIAL SERVICES',
        pageSubtitle: 'Perfection is Our Passion',
        hasButton: true
      },

      // The genericPage object has the following properties
      // mainHeading: { type: String, required: true }, mainParagraphs: { type: Array, required: true },
      //  displayAsParagraph: { type: Boolean, required: true }, separatorImg: { type: String, required: false },
      // hasExtendedContent: { type: Boolean, required: true }, extendedHeading: { type: String, required: false }, extendedParagraphs: { type: Array, required: false }
      // also imageRight : { type: Boolean, required: true }, if not provided all images will be in the left
      // also imagePath: {type: String, required: false }. If we want to show image, we should provide path, best would be static path or web url
      // also whether the content section should be full width or not... hence, fullWidth: {type: Boolean, required } and displaySectionBtn: { type: Boolean, required: true }
      // so lets create a pageContent object and send these values
      sectionContentOne: {
        fullWidth: true,
        mainHeading: 'What We Do For You',
        mainParagraphs: [
          'At PPC, we take a lot of pride in the work we do. Every cleaning job – no matter the size – is approached with total respect and genuine care for your business.',
          'We offer a variety of high-calibre cleaning services for our ongoing commercial clients. Regardless of the schedule required, we will carefully curate a custom janitorial program that suits your needs.',
          'Please ask for more details on our services and additional services offered to ongoing clients.'
        ],
        displayAsParagraph: true,
        displaySectionBtn: true,
        sectionBtnText: 'GET IN TOUCH WITH US'
      },

      sectionContentTwo: {
        fullWidth: true,
        mainHeading: 'We’d Love to Show You the Difference',
        mainParagraphs: [],
        displayAsParagraph: true,
        displaySectionBtn: true,
        sectionBtnText: 'REQUEST A QUOTE'
      },

      sectionContentThree: {
        fullWidth: false,
        imageRight: false,
        imagePath: 'https://pictureperfectcleaning.ca/wp-content/uploads/2019/09/mission-statement-megaphone.png',
        mainHeading: 'Our Mission Statement',
        mainParagraphs: [
          'Picture Perfect Cleaning’s mission is to provide a world class, healthy and safe, “wow,”commercial cleaning  experience to the valued businesses we serve, as well as, to our well selected custodians and management team.'
        ],
        hasExtendedContent: false,
        displaySectionBtn: false
      },

      sectionContentFour: {
        fullWidth: true,
        mainHeading: 'Some of the Businesses We Work With',
        mainParagraphs: [],
        hasExtendedContent: true,
        extendedHeading: 'Knowledge, Experience, & Solutions For Your Industry. Our Expertise Include…'
      },

      sectionContentSeven: {
        fullWidth: true,
        mainHeading: 'If You’d Like To Read More',
        firstSeparatorImg: 'https://pictureperfectcleaning.ca/wp-content/uploads/2019/08/review-stars.png',
        secondaryHeading: 'We Are Proud to Show You Our Reviews on',
        secondSeparatorImg: 'https://pictureperfectcleaning.ca/wp-content/uploads/2019/08/google.png',
        mainParagraphs: [
          ''
        ],
        displaySectionBtn: true,
        sectionBtnText: 'Visit Google Reviews'
      },

      sectionContentTen: {
        fullWidth: true,
        mainHeading: 'Testimonials',
        mainParagraphs: [
          'Erol’s Automotive has been using Picture Perfect Cleaning for approx 2.5 years, before that we went through at least a half a dozen different cleaners with no success. Picture Perfect has been a welcome reprieve from all the others. They do a great job, show up when scheduled and if there are any concerns they are remedied immediately. We would recommend Picture Perfect for anyone needing reliable, punctual cleaners.'
        ],
        thirdHeading: '– Erol’s Automotive',
        displaySectionBtn: true,
        sectionBtnText: 'Read More Testimonials'
      },


      features: [
        { legendImage: 'https://pictureperfectcleaning.ca/wp-content/uploads/2019/08/unparallel-service.png', featureHeading: 'Unparalleled Service', featureDetail: 'Picture Perfect Cleaning is incredibly proud of the culture we have built within our company. We prioritize communication and teamwork, and it shows: you’ll never be left wondering about the work we do, or how we do it.'},
        { legendImage: 'https://pictureperfectcleaning.ca/wp-content/uploads/2019/08/unparallel-service.png', featureHeading: 'Unparalleled Service', featureDetail: 'Picture Perfect Cleaning is incredibly proud of the culture we have built within our company. We prioritize communication and teamwork, and it shows: you’ll never be left wondering about the work we do, or how we do it.'},
        { legendImage: 'https://pictureperfectcleaning.ca/wp-content/uploads/2019/08/unparallel-service.png', featureHeading: 'Unparalleled Service', featureDetail: 'Picture Perfect Cleaning is incredibly proud of the culture we have built within our company. We prioritize communication and teamwork, and it shows: you’ll never be left wondering about the work we do, or how we do it.'},
        { legendImage: 'https://pictureperfectcleaning.ca/wp-content/uploads/2019/08/unparallel-service.png', featureHeading: 'Unparalleled Service', featureDetail: 'Picture Perfect Cleaning is incredibly proud of the culture we have built within our company. We prioritize communication and teamwork, and it shows: you’ll never be left wondering about the work we do, or how we do it.'},
        { legendImage: 'https://pictureperfectcleaning.ca/wp-content/uploads/2019/08/unparallel-service.png', featureHeading: 'Unparalleled Service', featureDetail: 'Picture Perfect Cleaning is incredibly proud of the culture we have built within our company. We prioritize communication and teamwork, and it shows: you’ll never be left wondering about the work we do, or how we do it.'},
        { legendImage: 'https://pictureperfectcleaning.ca/wp-content/uploads/2019/08/unparallel-service.png', featureHeading: 'Unparalleled Service', featureDetail: 'Picture Perfect Cleaning is incredibly proud of the culture we have built within our company. We prioritize communication and teamwork, and it shows: you’ll never be left wondering about the work we do, or how we do it.'},
        { legendImage: 'https://pictureperfectcleaning.ca/wp-content/uploads/2019/08/unparallel-service.png', featureHeading: 'Unparalleled Service', featureDetail: 'Picture Perfect Cleaning is incredibly proud of the culture we have built within our company. We prioritize communication and teamwork, and it shows: you’ll never be left wondering about the work we do, or how we do it.'},
        { legendImage: 'https://pictureperfectcleaning.ca/wp-content/uploads/2019/08/unparallel-service.png', featureHeading: 'Unparalleled Service', featureDetail: 'Picture Perfect Cleaning is incredibly proud of the culture we have built within our company. We prioritize communication and teamwork, and it shows: you’ll never be left wondering about the work we do, or how we do it.'}
      ]
    }
  },
}
</script>

<style scoped>

.page-section {
  padding-top: 5rem;
}

.feature-boxes-area {
  display: block;
}

.feature-boxes-area h2 {
  text-align: center;
}

.feature-boxes-area hr {
  width: 40%;
  margin: 3rem auto;
  border: 1px solid gray;

}

.feature-box {
  display: block;
  width: 46%;
  margin-right: 4%;
  margin-bottom: 2rem;
  float: left;
}

.feature-box:nth-child(even) {
  margin-right: 0;
}

.clearfix {
  clear: both;
}

.faq-section {
  padding: 0;
  margin: 0;
}

.business-work-with {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
}

.business-link {
  flex-basis: 48%;
}

.business-window {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  height: 20rem;
  margin-bottom: 2rem;
}

.first-window {
  background: url("https://pictureperfectcleaning.ca/wp-content/uploads/2019/08/office-thumbnail.jpg") no-repeat center center;
  background-size: cover;
}

.second-window {
  background: url("https://pictureperfectcleaning.ca/wp-content/uploads/2019/08/spa-thumbnail.jpg") no-repeat center center;
  background-size: cover;
}

.third-window {
  background: url("https://pictureperfectcleaning.ca/wp-content/uploads/2019/08/condos-thumbnail.jpg") no-repeat center center;
  background-size: cover;
}

.forth-window {
  background: url("https://pictureperfectcleaning.ca/wp-content/uploads/2019/08/school-thumbnail.jpg") no-repeat center center;
  background-size: cover;
}

.fifth-window {
  background: url("https://pictureperfectcleaning.ca/wp-content/uploads/2019/08/community-thumbnail.jpg") no-repeat center center;
  background-size: cover;
}

.sixth-window {
  background: url("https://pictureperfectcleaning.ca/wp-content/uploads/2019/08/dealer-thumbnail.jpg") no-repeat center center;
  background-size: cover;
}

.plus-sign {
  font-size: 2rem;
  padding: .8rem 1.6rem;
  background-color: dodgerblue;
  color: white;
}
</style>
