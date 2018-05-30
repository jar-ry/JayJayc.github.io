<template>
  <div>
    <h1>Projects</h1>
    *note: many university projects are not included
    <div>
      <b-dropdown id="projectDropdown" text="Type of project" class="m-md-2">
        <b-dropdown-item to="/projects/web">Web Development</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item to="/projects/blockchain">Blockchain</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item to="/projects/java">Java</b-dropdown-item>
      </b-dropdown>
    </div>
    <a v-bind:href="url">link to github</a>
  </div>
</template>





<script>
export default {
  data(){
    return {
      message: 'Hello from Project',
      url: 'https://github.com/JayJayc/'
    }
  }
}
</script>



<style scoped>


</style>
