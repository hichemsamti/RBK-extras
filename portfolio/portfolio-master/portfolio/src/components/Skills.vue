<template>






  <div>

    <b-card-group class="viewport">
    
    <b-card header="Skills" class="text-center">
    
     <b-card-text>Vue</b-card-text>
    <b-progress :value="value" :max="max" class="mb-3"></b-progress>
     <b-card-text>React</b-card-text>
    <b-progress :value="value1" :max="max1" class="mb-3"></b-progress>
     <b-card-text>MongoDB</b-card-text>
    <b-progress :value="value2" :max="max2" class="mb-3"></b-progress>
     <b-card-text>Mysql</b-card-text>
    <b-progress :value="value3" :max="max3" class="mb-3"></b-progress>

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
        max: 50,
        value1: 20.333333333,
        max1: 50,
        value2: 33.333333333,
        max2: 50,
        value3: 10.333333333,
        max3: 50
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



