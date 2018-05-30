<template>
  <div>
    <!-- Welcome message -->
    <h1 id="welcome" v-if="text">Hello {{text}}, Welcome to Jarry's portfolio. Would you like to see Jarry's past projects?</h1>

    <!-- Input field -->
    <div id="nameInput" >
      <input
        v-model="text"
        id="nameForm"
        placeholder="Please enter your name"
        @keyup.enter="submit"
        @focus="magic_flag = true"
        @blur="magic_flag = false"
      />
      <!-- button for name input -->
      <button id="myBtn">Enter</button>
    </div>

    <!-- Yes and No buttons for project redirection -->
    <div id="buttons" v-if = "!magic_flag">
      <!-- Yes button -->
      <router-link
        v-if="text"
        to="/projects"
        tag="button">
        Yes
      </router-link>
      <!-- No button -->
      <button
        v-if="text"
        v-on:click="noButton"
        id="noBtn">
        No
      </button>
    </div>

  </div>
</template>


<script>
export default {
  data(){
    return {
      message: 'Hello from Jarry',
      magic_flag: false,

    }
  },
  methods: {
    submit: function (event) {
      document.getElementById("nameForm").blur();
    },
    noButton: function (event){
      document.getElementById("welcome").innerHTML = "Okay, please enjoy the rest of your time on this site :)";
      var x = document.getElementById("buttons");
      if (x.style.display === "none") {
          x.style.display = "block";
      } else {
          x.style.display = "none";
      }
    }

  }
}
</script>


<style scoped>
#buttons{
  /* Positioning */
  position:absolute;
  width: 30%;
  left: 35%;
  top: 40%;

 /*this to solve "the content will not be cut when the window is smaller than the content": */
 max-width:100%;
 max-height:100%;
 overflow:auto;
}
#nameForm {
  text-align: center;
  background: transparent;
  border: none;
  border-bottom: 2px dashed black;
}
#nameInput {
  /* Positioning */
  position:absolute;
  width: 30%;
  left: 35%;
  top: 50%;

 /*this to solve "the content will not be cut when the window is smaller than the content": */
 max-width:100%;
 max-height:100%;
 overflow:auto;
}
#welcome{
  position:absolute;
  width: 80%;
  left: 10%;
  top: 20%;

 /*this to solve "the content will not be cut when the window is smaller than the content": */
 max-width:100%;
 max-height:100%;
 overflow:auto;
}
</style>
