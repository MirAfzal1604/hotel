<template>
  <transition name="loading">
    <div class="loading" v-if="isLoading">
      <img src="@/./assets/mainLogo.png" alt="logo" />
    </div>
  </transition>

  <div class="navLinks">
    <div :class="{ isClicked: clicked }">
      <div class="container">
        <div class="nav">
          <router-link :to="{ name: 'allPage' }" class="deleteBg">
            <img src="@/./assets/mainLogo.png" alt="logo" />
          </router-link>
          <ul class="navUl" v-show="!mobile">
            <li v-for="navLink in navLinks" :key="navLink.id">
              <router-link :to="{ path: navLink.href }">
                {{ navLink.title }}
              </router-link>
            </li>
          </ul>

          <div id="navIcon" @click="toggleMobileDev" v-show="mobile">
            <div class="line line1"></div>
            <div class="line line2"></div>
            <div class="line line3"></div>
          </div>

          <transition name="mobileTransition">
            <div class="mobileNav" v-show="mobileNav">
              <ul class="navUl">
                <li v-for="navLink in navLinks" :key="navLink.id">
                  <router-link
                    :to="{ path: navLink.href }"
                    @click="toggleMobileDev"
                  >
                    {{ navLink.title }}
                  </router-link>
                </li>
              </ul>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>

  <router-view />

  <footer-v></footer-v>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import footer from "../src/components/footer.vue";

export default {
  components: {
    "footer-v": footer,
  },
  mounted() {
    setTimeout(() => (this.isLoading = false), 1500);
  },
  data() {
    return {
      navLinks: [
        { title: "Home", href: "/" },
        { title: "Facilities", href: "/facilities" },
        { title: "Rooms", href: "/room" },
        { title: "Contact-us", href: "/contact" },
      ],
      mobile: null,
      mobileNav: null,
      windowWidth: null,
      clicked: false,
      isActive: false,
      isLoading: true,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    toggleActive() {
      if (this.isActive == false) this.isActive = true;
      else this.isActive = false;
    },

    toggleMobileDev() {
      this.mobileNav = !this.mobileNav;

      this.clicked = !this.clicked;
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 992) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
};
</script>

<style scoped>
body {
  background: #e5e5e5;
}
.loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background: #14274a;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
}
.loading img {
  animation: loading 1s infinite;
}
@keyframes loading {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
.loading-enter-active,
.loading-leave-active {
  transition: opacity 0.5s ease;
}

.loading-enter-from,
.loading-leave-to {
  opacity: 0;
}

.navLinks {
  position: absolute;
  top: 0;

  z-index: 2;
  width: 100%;
}
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
}
.nav img {
  height: 130px;
}
.navUl {
  display: flex;
  align-items: center;
}
.navUl > li:not(:last-child) {
  margin: 0 50px 0 0;
}
.navUl > li > a {
  color: #fff;
  position: relative;
  font-weight: 700;
}
.navUl > li > a::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 4px;
  border-radius: 4px;
  background-color: #ffffff;
  bottom: -50%;
  left: 0;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}
.navUl > li > a:hover::before {
  transform-origin: left;
  transform: scaleX(1);
}
.deleteBg {
  background: transparent !important;
}
.router-link-active {
  background-color: #ff0000;
}
.line {
  width: 30px;
  height: 3px;
  background: #fff;
  margin: 5px 0;
}
#navIcon {
  cursor: pointer;
}
.line1,
.line2,
.line3 {
  transition: all 0.5s ease;
}
.isClicked .line1 {
  -webkit-transform: rotate(-45deg) translate(-6px, 7px);
  transform: rotate(-45deg) translate(-6px, 7px);
  background-color: #000;
}
.isClicked .line2 {
  opacity: 0;
}
.isClicked .line3 {
  -webkit-transform: rotate(45deg) translate(-5px, -5px);
  transform: rotate(45deg) translate(-5px, -5px);
  background-color: #000;
}
.isClicked #navIcon {
  z-index: 100;
}
.mobileNav {
  width: 100%;
  min-height: 100%;
  background: #f8f9fa;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 99;
}
.mobileTransition-enter-active,
.mobileTransition-leave-active {
  transition: all 0.7s ease;
}
.mobileTransition-enter-from,
.mobileTransition-leave-to {
  transform: translateX(-100%);
}
@media screen and (max-width: 992px) {
  .nav img {
    height: 100px;
  }
  .navUl {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
  .navUl > li {
    padding: 15px 0;
  }
  .navUl > li > a {
    color: #000;
  }
  .navUl > li:not(:last-child) {
    margin: 0 0px 0 0;
  }
  .navUl > li > a::before {
    background-color: #000;
  }
}
@media screen and (max-width: 500px) {
  .nav img {
    height: 70px;
  }
}
</style>
