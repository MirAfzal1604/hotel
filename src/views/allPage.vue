<template>
  <div>
    <mainPage
      img="bgMainImg.jpg"
      FirstText="Welcome to"
      SecondText="LUXURY"
      ThirdText="Hotels"
      pText="Book your stay and enjoy Luxury <br /> redefined at the most affordable rates"
    >
    </mainPage>
    <underMain></underMain>
    <slider></slider>
  </div>
</template>

<script>
import mainPage from "../components/mainPage.vue";
import underMain from "../components/underMain.vue";
import slider from "../components/slider.vue";

export default {
  components: {
    mainPage,
    underMain,
    slider,
  },
};
</script>

<style  scoped>
</style> 