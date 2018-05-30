<template>
  <div>
    <h1>Java</h1>
    <!-- Drop Down for project type -->
    <div>
      <b-dropdown id="projectDropdown" text="Java" class="m-md-2">
        <b-dropdown-item to="/projects/web">Web Development</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item to="/projects/blockchain">Blockchain</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item to="/projects/java">Java</b-dropdown-item>
      </b-dropdown>
    </div>
    <!-- End of drop down for project type -->

    <br/>
  </div>
</template>





<script>
export default {
  data(){
    return {
      message: 'Hello from About',

    }
  }
}
</script>



<style scoped>


</style>
