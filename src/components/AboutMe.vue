<template>
  <div>
    <div class="card_text">
      <div class="card_text_content">
        <div class="text_header">
          <h5 class="text-uppercase">
            About Jarry
          </h5>
        </div>
        <div class="description">
          <!-- Toggle -->
          <div >
            <b-form-group>
              <b-form-radio-group v-model="selected"
                                  :options="options"
                                  name="radioInline">
              </b-form-radio-group>
            </b-form-group>
          </div>
          <!-- End of Toggle -->
          <!-- Overview -->
          <div v-if="selected=='first'">
            <p>
            Hey there! My name is Jarry Chen and I am "computer scientist".
          </p>
          <p>
            I have a few successful projects of experience, designing and
            and implementing applications, some of which can be found under
            the projects tab of the website.
          </p>
          <p>
            I am completing my bachelor degree in computer science
            from RMIT this year. I am a perssitant and outgoing team player, that enjoys to have
            deep debates with peers on challenging and though provoking
            tasks.
          </p>
          <p>
             I am passionate about constantly improving
            myself and learning new things, especially if it is out of
            my comfort zone.
          </p>
          </div>
          <!-- End Overview -->
          <!-- Interests and hobbies -->
          <div v-if="selected=='second'">
          <p>
            As a previous software engineering student and a current computer
            science student, I enjoy learning new coding lanuages and
            frameworks. I find it very rewarding to be able to start
            using a new skill that I have just learnt.
          </p>
          <p>
            When I'm not coding, I enjoy gaming and trading. Gaming means
            alot to me as it was the hobby, that ignited my interest in
            computers. As for trading it's a bit of a curve ball but
            I have been trading tradition stocks since 2015.
            After receieving over 20% return on my investment
            within the first 6 months, I became motivated to study and
            learn how to trade better.
          </p>
          <p>
             As of August 2017, I have moved on
            from tradition asset and started trading crypto assets or as
            they are better known "Cryptocurrency". This was natural move
            for me as I enjoyed trading and learning about economics and
            the markets. But also as a developer I was able to connect with
            tech and vision behind alot of these Cryptocurrency projects.
          </p>
          </div>
          <!-- End Interests and hobbies -->

          <!-- Education and skills page-->
          <div v-if="selected=='third'">
            <!-- Education -->
            <h5>
              Education
            </h5>
            <h6>
              VCE (Victorian Certificate of Education) :
            </h6>
            <p>
              Completed : 2015 at Brighton Secondary College
            </p>
            <br/>
            <h6>
              Bachelor of Software Engineering :
            </h6>
            <p>
              Incomplete : Transferred to the Bachelor of computer science,
              which follows the exact same program structure but excludes the
              an one year internship, therefore shortening the the program by
              one year
            </p>
            <p>
              Reason : Decided graduating and entering a graduate position
              would be more benefitical to my development than an one
              year long internship.
            </p>
            <br/>
            <h6>
              Bachelor of Computer Science :
            </h6>
            <p>
              Ongoing: Expected completion end of 2018.
            </p>
            <!-- Skills -->
            <h5>
              Skills
            </h5>
            <p class="small_text">
              *Note : knowledge of programming lanuages will be under the
               'skills' tab in the navigation bar
            </p>
            <h6>
              Hard skills :
            </h6>
            <p>
              - Lanuages: Fluent in Mardarin, ShangHainese and English
            </p>
            <p>
              - Typing speed: 59 WPM (273 CPM) with an accuracy of 95%. (third attempt)
            </p>
            <p>
              - Proficient in spreadsheets
            </p>
            <br/>
            <h6>
              Top 3 Soft skills :
            </h6>
            <p>
              - Interpersonal skills:
            </p>
            <p>
              - Leadership:
            </p>
            <p>
              - Problem solving abilities:
            </p>

          </div>
          <!-- End Education and skills -->
          <br/>
        </div>
      </div>
    </div>
  <!-- end of slider card -->
    <br/>
  </div>
</template>





<script>
export default {
  data () {
      return {
        selected: 'first',
        options: [
          { text: 'Overview', value: 'first' },
          { text: 'Interests and hobbies', value: 'second' },
          { text: 'Education and skills', value: 'third' }
        ]
      }
    }
}
</script>



<style scoped>
.card_text{
  background-color: #fff;

  border-radius: 5px;

  border: 1px solid #ececec;

  box-shadow: 0 1px 5px #ececec;

  opacity: 0.9;

  /* Positioning */
  position:absolute;
  width: 60%;
  /* left: 10%; */
  top: 18%;
  margin-left: 20%;

 /*this to solve "the content will not be cut when the window is smaller than the content": */
 max-width:100%;
 max-height:70%;
 overflow:auto;

}
.card_text h6 {
  font-weight: bold;
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
  text-shadow: 2px 2px 2px #ccc;
}
.small_text{
  font-size: 12px;
}
</style>
