<template>
  <mainPage
    img="bgMainImg2.jpg"
    FirstText="Welcome to"
    SecondText="LUXURY"
    ThirdText="Hotels"
    pText="Book your stay and enjoy Luxury <br /> redefined at the most affordable rates"
  >
  </mainPage>

  <div class="facility">
    <div class="container">
      <div class="texts">
        <div class="boxText">FACILITIES</div>
        <div class="boxSubtitle">
          We want your stay at our lush hotel to be truly unforgettable. That is
          why we give special attention to all of your needs so that we can
          ensure an experience quite uniquw. Luxury hotels offers the perfect
          setting with stunning views for leisure and our modern luxury resort
          facilities will help you enjoy the best of all.
        </div>
      </div>

      <div class="facility_box">
        <div class="box" v-for="(all, index) in imgText" :key="index">
          <img :src="require(`@/./assets/${all.bgImg}`)" alt="bgImg" />
          <p>
            {{ all.title }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <slider></slider>
</template>

<script>
import mainPage from "../components/mainPage.vue";
import slider from "../components/slider.vue";

export default {
  components: {
    mainPage,
    slider,
  },
  data() {
    return {
      imgText: [
        { bgImg: "gym.jpg", title: "THE GYM" },
        { bgImg: "pool.jpg", title: "POOLSIDE BAR" },
        { bgImg: "spa.jpg", title: "THE SPA" },
        { bgImg: "outPool.jpg", title: "SWIMMING POOL" },
        { bgImg: "laundry.jpg", title: "LAUNDRY" },
      ],
    };
  },
};
</script>

<style  scoped>
.texts {
  text-align: center;
  margin: 82px 0;
}
.boxText {
  font-size: 22px;
  font-weight: 700;
  padding: 0 0 20px 0;
}
.boxSubtitle {
  padding: 0 25px;
}
.box {
  position: relative;
  margin: 80px 0;
}

.box img {
  width: 100%;
  height: auto;
  user-select: none;
}

.box p {
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 40%;
  background: #fff;
  height: 55px;
  transform: translate(-50%, 0);
  font-size: 30px;
  font-weight: 700;
  display: grid;
  place-items: center;
}

@media screen and (max-width: 576px) {
  .texts {
    margin: 70px 0;
  }
  .boxText {
    font-size: 18px;
  }
  .boxSubtitle {
    padding: 0 20px;
  }
  .box {
    position: relative;
    margin: 65px 0;
  }
  .box p {
    width: 55%;
    font-size: 18px;
  }
}

@media screen and (max-width: 369px) {
  .box p {
    width: 60%;
    font-size: 16px;
    height: 40px;
  }
}
</style>