<template>






  <div>

    <b-card-group class="viewSoft">
    
    <b-card header="SoftSkills" class="text-center">
    
     <b-card-text>Team Work</b-card-text>
    <b-progress :value="value" :max="max" class="mb-3"></b-progress>
     <b-card-text>Leadership</b-card-text>
    <b-progress :value="value" :max="max" class="mb-3"></b-progress>
     <b-card-text>Active Listening</b-card-text>
    <b-progress :value="value" :max="max" class="mb-3"></b-progress>
    </b-card>

    </b-card-group>


  </div>
</template>

<script>
  export default {
      name:"SoftSkills",
    data() {
      return {
        value: 33.333333333,
        max: 50
      }
    }
  }
</script>

<style >
  .viewSoft {
    width: 400px;
    max-width: 100%;
    display: inline-block;
    vertical-align: top;
    overflow: auto;
    border: 1px solid rgba(#000, .12);
    margin: auto; position: absolute; left: 1020px; right: 0px; 
  }


</style>