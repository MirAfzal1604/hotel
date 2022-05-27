<template>
  <div class="main">
    <img :src="require(`@/./assets/${img}`)" alt="" />
    <div class="mainPageIn">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h3>{{ FirstText }}</h3>
            <h1>{{ SecondText }}</h1>
            <h3>{{ ThirdText }}</h3>
            <p v-html="pText"></p>
          </div>
        </div>

        <div class="mainBtn pulse">
          <button class="button">
            <router-link :to="{ name: 'allPage' }"> BOOK NOW </router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
    },
    FirstText: {
      type: String,
    },
    SecondText: {
      type: String,
    },
    ThirdText: {
      type: String,
    },
    pText: {
      type: String,
    },
  },
};
</script>

<style >
.main {
  width: 100%;
  height: 100vh;
  position: relative;
}
.main img {
  width: 100%;
  height: 100vh;
  background-attachment: scroll;
  background-size: auto;
  background-attachment: fixed !important;
  position: relative;
  object-fit: cover;
}
.mainPageIn {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  color: #fff;
  font-family: Adobe Garamond Pro;
}
.mainPageIn h3 {
  font-size: 40px;
  line-height: 55px;
}
.mainPageIn h1 {
  font-weight: 700;
  font-size: 80px;
  line-height: 80px;
}
.mainPageIn p {
  font-size: 22px;
  letter-spacing: 8%;
}
.mainBtn {
  width: 100%;
  text-align: center;
  margin: 60px 0 0 0;
}
.button {
  padding: 12px 20px;
  background: #e0b973;
  border: none;
  outline: none;
  border-radius: 15px;
  transition: all 0.5s ease;
}
.button a {
  font-size: 18px;
  color: #fff;
}
.button:hover a {
  color: #fff;
}

.button:hover {
  background: #2a705e;
  animation: pulse 1s;
  box-shadow: 0 0 0 2em transparent;
  transform: translateY(-10px);
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 #efe26e;
  }
}

@media screen and (max-width: 992px) {
  .mainPageIn h3 {
    font-size: 30px;
    line-height: 45px;
  }
  .mainPageIn h1 {
    font-size: 60px;
  }
  .mainPageIn p {
    font-size: 20px;
  }
  .mainBtn {
    margin: 60px 0 0 0;
  }

  .button a {
    font-size: 16px;
  }
}

@media screen and (max-width: 430px) {
  .mainPageIn h3 {
    font-size: 23px;
  }
  .mainPageIn h1 {
    font-size: 40px;
  }
  .mainPageIn p {
    font-size: 18px;
  }
  .mainBtn {
    margin: 20px 0 0 0;
  }

  .button a {
    font-size: 14px;
  }
}
</style>