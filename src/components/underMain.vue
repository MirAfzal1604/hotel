<template>
  <div class="underMain">
    <div class="container">
      <p class="underMainText">
        All our room types are including complementary breakfast
      </p>

      <div class="rooms">
        <div class="room">
          <div class="row align-items-center">
            <div class="col-12 col-lg-6 roomBorder">
              <div class="room_texts">
                <h1>Luxury redefined</h1>
                <p>
                  Our rooms are designed to transport <br />
                  you into an environment made for leisure.<br />
                  Take your mind off the day-to-day of home <br />
                  life and find a private paradise for yourself.
                </p>

                <div class="mainBtn">
                  <button class="button">
                    <router-link :to="{ name: 'allPage' }">
                      EXPLORE</router-link
                    >
                  </button>
                </div>
              </div>
            </div>

            <div class="col-12 col-lg-6">
              <div class="room_img">
                <img src="@/./assets/roomBgImg1.jpg" alt="rooms" />
              </div>
            </div>
          </div>
        </div>

        <div class="room">
          <div class="row align-items-center">
            <div class="col-12 col-lg-6 roomBorder">
              <div class="room_texts">
                <h1>Leave your worries in the sand</h1>
                <p>
                  We love life at the beach. Being close <br />
                  to the ocean with access to endless sandy <br />
                  beach ensures a relaxed state of mind. It <br />
                  seems like time stands still watching the <br />
                  ocean.
                </p>

                <div class="mainBtn">
                  <button class="button">
                    <router-link :to="{ name: 'allPage' }">
                      EXPLORE</router-link
                    >
                  </button>
                </div>
              </div>
            </div>

            <div class="col-12 col-lg-6">
              <div class="room_img">
                <img src="@/./assets/roomBgImg2.jpg" alt="rooms" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.underMainText {
  text-align: center;
  font-size: 25px;
  margin: 83px 0 20px 0;
}
.mainBtn {
  margin: 30px 0 0 0;
}
.mainBtn button {
  float: left;
  padding: 10px 30px;
}

.room {
  margin: 0 0 50px 0;
}
.roomBorder {
  border-left: 1px solid #000;
  padding: 0 0 0 48px;
}
.room_texts h1 {
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 2px;
  font-family: Adobe Garamond Pro;
}
.room_texts p {
  font-size: 18px;
  margin: 15px 0 0 0;
}
.room_img img {
  width: 100%;
}

@media screen and (max-width: 1200px) {
  .underMainText {
    font-size: 22px;
    margin: 60px 0 15px 0;
  }
  .mainBtn {
    margin: 25px 0 0 0;
  }
  .mainBtn button {
    padding: 8px 25px;
  }
  .mainBtn a {
    font-size: 14px;
  }

  .roomBorder {
    padding: 0 0 0 25px;
  }
  .room_texts h1 {
    font-size: 30px;
  }
  .room_texts p {
    font-size: 16px;
  }
}

@media screen and (max-width: 992px) {
  .underMainText {
    font-size: 20px;
  }
  .mainBtn {
    margin: 25px 0 0 0;
  }
  .mainBtn button {
    padding: 8px 20px;
  }
  .roomBorder {
    border: 0;
    padding: 0 0 0 13px;
    margin: 0 0 20px 0;
  }
  .room_texts h1 {
    font-size: 26px;
  }
}
</style>