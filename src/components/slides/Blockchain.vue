<template>
  <div>
    <h1>Blockchain</h1>

    <!-- Drop Down for project type -->
    <div>
      <b-dropdown id="projectDropdown" text="Blockchain" class="m-md-2">
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

}
</script>



<style scoped>


</style>
