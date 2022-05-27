<template>
  <mainPage
    img="bgMainImg3.jpg"
    FirstText="Welcome to"
    SecondText="LUXURY"
    ThirdText="Hotels"
    pText="Book your stay and enjoy Luxury <br /> redefined at the most affordable rates"
  ></mainPage>

  <div class="rooms">
    <div class="container">
      <div class="room_text">
        <h1>ROOMS AND RATES</h1>

        <p>
          Each of our bright, light-flooded rooms come with everything you could
          possibly need for a comfortable stay. And yes, comfort isn’t our only
          objective, we also value good design, sleek contemporary furnishing
          complemented by the rich tones of nature’s palette as visible from our
          rooms’ sea-view windows and terraces.
        </p>
      </div>

      <div class="room_img">
        <div class="room_box" v-for="room in rooms" :key="room.id">
          <carousel class="delete" :items-to-show="1" :wrap-around="true">
            <slide v-for="roomImg in roomImgs" :key="roomImg.id" class="imgLi">
              <img :src="require(`@/./assets/${roomImg.img}`)" alt="" />
            </slide>

            <template #addons="{ slidesCount }">
              <navigation v-if="slidesCount > 1" class="navigation" />
            </template>
          </carousel>
          <div class="roomType">
            <p>{{ room.roomText }}</p>
          </div>
          <div class="roomPrice">
            <div class="viewRoom" @click="openBox()">
              <img :src="require(`@/./assets/${room.icon}`)" alt="bgImg" />
              <p>{{ room.textIcon }}</p>
            </div>

            <button class="button">
              <router-link :to="{ name: 'contact' }">
                {{ room.buttonText }}</router-link
              >
            </button>
          </div>
        </div>
      </div>

      <transition name="opening">
        <div class="room_carousel" v-show="isOpen">
          <carousel class="forOpenBox" :items-to-show="1" :wrap-around="true">
            <slide
              v-for="roomImg in roomImgs"
              :key="roomImg.id"
              class="appearImg"
            >
              <img :src="require(`@/./assets/${roomImg.img}`)" alt="" />
            </slide>

            <template #addons="{ slidesCount }">
              <navigation v-if="slidesCount > 1" class="buttons" />
            </template>
          </carousel>
          <div class="closeBtn" @click="openBox()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              class="bi bi-x-circle"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
              />
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        </div>
      </transition>
    </div>
  </div>

  <slider></slider>
</template> 

<script>
import mainPage from "../components/mainPage.vue";
import slider from "../components/slider.vue";

import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  components: {
    mainPage,
    Carousel,
    Slide,
    Navigation,
    slider,
  },
  data() {
    return {
      roomImgs: [
        { img: "room1.jpg" },
        { img: "room2.jpg" },
        { img: "room3.jpg" },
      ],
      rooms: [
        {
          id: 1,
          roomText: "SINGLE ROOM",
          icon: "icon.jpg",
          textIcon: "VIEW ROOM DETAILS",
          buttonText: "$147  Avg/night",
        },
        {
          id: 2,
          roomText: "DOUBLE ROOM",
          icon: "icon.jpg",
          textIcon: "VIEW ROOM DETAILS",
          buttonText: "$155  Avg/night",
        },
        {
          id: 3,
          roomText: "TWIN ROOM",
          icon: "icon.jpg",
          textIcon: "VIEW ROOM DETAILS",
          buttonText: "$175  Avg/night",
        },
      ],
      isOpen: false,
    };
  },
  methods: {
    openBox() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style >
.opening-enter-active,
.opening-leave-active {
  transition: opacity 0.5s ease;
}

.opening-enter-from,
.opening-leave-to {
  opacity: 0;
}
.room_carousel {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background: rgba(20, 39, 74, 0.8);
  display: grid;
  place-items: center;
}
.appearImg img {
  width: 60%;
  height: auto;
}
.buttons {
  transform: translate(0, 0);
}
.forOpenBox {
  margin: 0 !important;
}
.forOpenBox > .carousel__prev {
  left: 30px !important;
}
.forOpenBox > .carousel__next {
  right: 30px !important;
}
.closeBtn {
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 101;
  color: #fff;
  cursor: pointer;
}

.rooms {
  padding: 80px 0 0 0;
}
.room_text {
  text-align: center;
}
.room_text h1 {
  padding: 0 0 20px 0;
  font-size: 22px;
  font-weight: 700;
}
.room_text p {
  padding: 0 25px;
}
.room_img {
  position: relative;
}
.room_box {
  margin: 90px 0;
  border: 2px solid #14274a;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
.imgLi {
  position: relative;
  width: 100%;
  height: auto;
}
.imgLi img {
  height: auto;
  width: 100%;
}
.room_box:hover .navigation {
  opacity: 1;
}
.navigation {
  transition: all 0.5s ease;
  opacity: 0;
}
.delete .carousel__next {
  left: 53%;
  transform: translate(-53%, 150%);
}
.delete .carousel__prev {
  left: 47%;
  transform: translate(-47%, 150%);
}
.roomType {
  width: 100%;
  margin: -1px 0 0 0;
  padding: 41px 0;
  color: #fff;
  text-align: center;
  background: #14274a;
}
.roomType p {
  font-size: 25px;
  font-weight: 700;
}
.delete {
  margin: 0 !important;
}
.roomPrice {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 41px 0;
}
.viewRoom {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.viewRoom img {
  margin: 0 20px 0 0;
}

@media screen and (max-width: 769px) {
  .rooms {
    padding: 60px 0 0 0;
  }
  .room_text h1 {
    padding: 0 0 15px 0;
    font-size: 20px;
  }
  .room_box {
    margin: 70px 0;
  }
  .roomType {
    padding: 32px 0;
  }
  .roomType p {
    font-size: 20px;
  }
  .roomPrice {
    padding: 35px 0;
  }
  .viewRoom img {
    margin: 0 15px 0 0;
    width: 35px;
  }
}
@media screen and (max-width: 500px) {
  .rooms {
    padding: 50px 0 0 0;
  }
  .room_box {
    margin: 50px 0;
  }
  .roomType {
    padding: 26px 0;
  }
  .roomPrice {
    padding: 26px 0;
    flex-direction: column;
  }
  .viewRoom {
    margin: 0 0 30px 0;
  }
  .viewRoom img {
    margin: 0 15px 0 0;
    width: 35px;
  }
}
</style>