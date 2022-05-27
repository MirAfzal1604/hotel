<template>
  <div class="carousel">
    <div class="container">
      <carousel :items-to-show="1" class="unique" :wrap-around="true">
        <slide v-for="slide in slides" :key="slide.id" class="sliderLi">
          <h1>{{ slide.mainTitle }}</h1>
          <h3>{{ slide.middleText }}</h3>
          <p>{{ slide.names }}</p>
        </slide>

        <template #addons="{ slidesCount }">
          <navigation v-if="slidesCount > 1" />
        </template>
      </carousel>
    </div>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      slides: [
        {
          mainTitle: "Testimonials",
          middleText: '"Calm, Serene, Retro – What a way to relax and enjoy"',
          names: "Mr. and Mrs. Baxter, UK",
        },
        {
          mainTitle: "FrontEnd Developer",
          middleText: "Calm, Serene, Retro – What a way to relax and enjoy",
          names: "Mirafzal Mirvosiqov",
        },
      ],
    };
  },
};
</script>

<style >
.carousel {
  margin: 90px 0;
}
.sliderLi {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #14274a;
}
.sliderLi h1 {
  font-family: Adobe Garamond Pro;
  font-size: 25px;
  font-weight: 700;
}
.sliderLi h3 {
  padding: 8px 0;
  font-size: 19px;
  font-weight: 700;
}
.carousel__prev,
.carousel__next {
  bottom: 0;
  width: 45px;
  height: 45px;
  background: #e0b973;
  border-radius: 12px;
}
.unique .carousel__next {
  left: 53%;
  transform: translate(-53%, 150%);
}
.unique .carousel__prev {
  left: 47%;
  transform: translate(-47%, 150%);
}
@media screen and (max-width: 992px) {
  .carousel__prev,
  .carousel__next {
    width: 35px;
    height: 35px;
  }
  .unique .carousel__next {
    left: 54%;
    transform: translate(-54%, 150%);
  }
  .unique .carousel__prev {
    left: 46%;
    transform: translate(-46%, 150%);
  }
}
@media screen and (max-width: 768px) {
  .unique .carousel__next {
    left: 56%;
    transform: translate(-56%, 200%);
  }
  .unique .carousel__prev {
    left: 44%;
    transform: translate(-44%, 200%);
  }
}
@media screen and (max-width: 369px) {
  .sliderLi h1 {
    font-size: 22px;
  }
  .sliderLi h3 {
    font-size: 16px;
  }
  .unique .carousel__next {
    left: 60%;
    transform: translate(-60%, 200%);
  }
  .unique .carousel__prev {
    left: 40%;
    transform: translate(-40%, 200%);
  }
}
</style>