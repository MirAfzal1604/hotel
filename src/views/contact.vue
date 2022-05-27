<template>
  <div>
    <div class="contactTitle">CONTACT-US</div>
    <div class="contact">
      <div class="container">
        <div class="contact_text">
          <h1>WE ARE HERE FOR YOU</h1>
          <p>
            At Luxury Hotels, we take our customers seriously. Do you have any
            enquiries, compaints or requests, please forward it to our support
            desk and we will get back to you as soon as possible.
          </p>
        </div>

        <form @submit.prevent="addContact" class="form">
          <div class="inputBlock">
            <label>Name:</label><br />
            <input type="text" v-model="name" required />
          </div>
          <div class="inputBlock">
            <label>Gmail:</label><br />
            <input type="text" v-model="gmail" required />
          </div>
          <div class="inputBlock">
            <label>Message:</label><br />
            <textarea v-model="message" required></textarea>
          </div>

          <button class="button" type="submit">
            <router-link :to="{ name: 'contact' }"> Submit</router-link>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import db from "../firebaseinit.js";

export default {
  data() {
    return {
      name: "",
      gmail: "",
      message: "",
    };
  },
  methods: {
    addContact() {
      db.collection("hotel")
        .add({
          name: this.name,
          gmail: this.gmail,
          message: this.message,
        })
        .catch((error) => console.log(error));
      this.name = "";
      this.gmail = "";
      this.message = "";
    },
  },
};
</script>

<style  scoped>
.contactTitle {
  font-weight: 700;
  color: #fff;
  font-size: 30px;
  background: #14274a;
  padding: 170px 0;
  text-align: center;
  width: 100%;
}
.contact {
  margin: 120px 0 160px 0;
}
.contact_text h1 {
  font-family: Adobe Garamond Pro;
  font-size: 35px;
  font-weight: 700;
  padding: 0 0 5px 0;
}
.contact_text p {
  padding: 20px 0 0 0;
  font-size: 20px;
}
.form {
  width: 50%;
}
.inputBlock {
  margin: 30px 0;
}
.inputBlock input,
.inputBlock textarea {
  width: 100%;
  height: 45px;
  padding: 0 5px;
}
.inputBlock textarea {
  height: 200px;
  resize: none;
}
.button {
  float: right;
}

@media screen and (max-width: 769px) {
  .contactTitle {
    padding: 150px 0;
  }
  .contact {
    margin: 110px 0 140px 0;
  }
  .contact_text h1 {
    font-size: 30px;
  }
  .contact_text p {
    padding: 18px 0 0 0;
    font-size: 18px;
  }
  .form {
    width: 100%;
  }
}
</style>