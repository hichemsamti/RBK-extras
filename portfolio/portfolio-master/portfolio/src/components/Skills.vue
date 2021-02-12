<template>






  <div>

    <b-card-group class="viewport">
    
    <b-card header="Default" class="text-center">
    <h5>No label</h5>
     <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
    <b-progress :value="value" :max="max" class="mb-3"></b-progress>
     <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
    <b-progress :value="value" :max="max" class="mb-3"></b-progress>
     <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
    <b-progress :value="value" :max="max" class="mb-3"></b-progress>
     <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
    <b-progress :value="value" :max="max" class="mb-3"></b-progress>

    </b-card>

    </b-card-group>


  </div>
</template>

<script>
  export default {
      name:"Skills",
    data() {
      return {
        value: 33.333333333,
        max: 50
      }
    }
  }
</script>

<style >
  .viewport {
    width: 400px;
    max-width: 100%;
    display: inline-block;
    vertical-align: top;
    overflow: auto;
    border: 1px solid rgba(#000, .12);
    margin: auto; position: absolute; left: 50px; right: 0px; 
  }


</style>



