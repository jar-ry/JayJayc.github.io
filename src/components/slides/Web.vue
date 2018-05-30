<template>
  <div>
    <h1>Web Development</h1>
    <!-- Drop Down for project type -->
    <div>
      <b-dropdown id="projectDropdown" text="Web Development" class="m-md-2">
        <b-dropdown-item to="/projects/web">Web Development</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item to="/projects/blockchain">Blockchain</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item to="/projects/java">Java</b-dropdown-item>
      </b-dropdown>
    </div>
    <!-- End of drop down for project type -->

    <!-- Slider cards -->
    <div class="project_card" >
      <div class="card_text">
        <div class="card_text_content">
          <div class="text_header">
            <h5 class="text-uppercase">
              {{webData[pointer].title}}
            </h5>
          </div>
          <div class="description">
            {{webData[pointer].text}}
            <br/>
            <!-- Link and extra info section -->
            <div class="links">
              <br/>
              <p>Where can you find this application?</p>
              {{webData[pointer].demo}}<br/>
              <a v-bind:href="webData[pointer].demoLink" target="_blank" v-if="webData[pointer].demoLink">{{webData[pointer].demoLink}}</a>
              <br/><span v-if="webData[pointer].demoLink"><br/></span>
              <p>{{webData[pointer].linkMessage}}</p>
              <a v-bind:href="webData[pointer].link" target="_blank" v-if="webData[pointer].link">link to github</a>
            </div>
            <!-- End of Link and extra info section -->
          </div>
        </div>
      </div>
    </div>
    <!-- end of slider card -->
    <div class="controls">
      <button id="nextBtn"class="btn controls_next" v-on:click="nextSlide">
        <span> > </span>
      </button>
    </div>
  </div>
</template>



<script>
// Create the data sets
// Web Development Data
let webData = [

  {
    id: 1,

    title: 'Single page application using vue.js',

    text: "The goal of this project was to explore the use of static single page applications. I have chosen to use Vue.js as my front end, since vue.js is a widely used Javascript UI libary. Offering high performace with a small learning curve. This application also uses the particles JS libary for the background particles.\n In this project, I successful coded and deployed the application. This application is deployed on Github Pages and is used as a portfolio page for myself. This website will be constantly updated with the latest information regarding myself.",

    demo: " You are currently on the application :)",

    linkMessage: "Sorry this code is not open source",

    link:""
  },

  {
    id: 2,

    title: 'Cryptocurrency exchange game using laravel',

    text:  "The goal of this project was to explore the use of static single page applications. I have chosen to use Vue.js as my front end, since vue.js is a widely used Javascript UI libary. Offering high performace with a small learning curve. This application also uses the particles JS libary for the background particles.\n In this project, I successful coded and deployed the application. This application is deployed on Github Pages and is used as a portfolio page for myself. This website will be constantly updated with the latest information regarding myself.",

    demo: "This application can be found at ",

    demoLink: "https://protected-mesa-49307.herokuapp.com/",

    linkMessage: "Sorry this code is not open source",

    link:""
  },

  {
    id: 3,

    title: 'News blog website using Ruby on Rails',

    text:  "The goal of this project was to explore the use of static single page applications. I have chosen to use Vue.js as my front end, since vue.js is a widely used Javascript UI libary. Offering high performace with a small learning curve. This application also uses the particles JS libary for the background particles.\n In this project, I successful coded and deployed the application. This application is deployed on Github Pages and is used as a portfolio page for myself. This website will be constantly updated with the latest information regarding myself.",

    demo: "Sorry this application is not deployed",

    linkMessage: "Please use the link below to access the source code",

    link:"https://github.com/JayJayc/RoR_News"
  },
];

// Blockchain Development Data


// Java Development Data


export default {
  name: "web",
  data(){
    return {
      webData :  webData,
      pointer : 0,
      url: 'https://github.com/JayJayc/JayJayc.github.io'

    }
  },
  methods: {
    nextSlide(event){
      if(this.pointer < webData.length-1){
        this.pointer ++;
      }else {
        this.pointer = 0;
      }

    }
  }
}

</script>



<style scoped>
.controls{
  position: absolute;
  right: 2%;
  bottom: 0;
  height: 55%;

}
.controls_next{
  height: 100px;
  padding: 20px;
  background-color: #f7f7f7;
  border-left: 1px solid #cacaca;
}
.card_text{
  background-color: #fff;

  border-radius: 5px;

  border: 1px solid #ececec;

  box-shadow: 0 1px 5px #ececec;

  opacity: 0.6;

  /* Positioning */
  position:absolute;
  width: 80%;
  /* left: 10%; */
  top: 25%;
  margin-left: 10%;

 /*this to solve "the content will not be cut when the window is smaller than the content": */
 max-width:100%;
 max-height:100%;
 overflow:auto;

}
.card_text h5 {
  margin: 5%;
  font-weight: bold;
  color: #000000;
}
.card_text{
  padding-left: 10%;
  padding-right: 10%;
  font-family: 'Corben', Georgia, Times, serif;
  text-shadow: 1px 1px 1px #ccc;
}

</style>
