<template>
<div>
    
  <b-card no-body class="overflow-hidden Proj" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="Blog Sample">
          <b-card-text>
          <h3> Senior phase in Rbk</h3>
          <a href="https://www.w3schools.com">Visit Medium</a>
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
  <b-card no-body class="overflow-hidden Proj1" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="Blog Sample">
          <b-card-text>
      <h3>Worries and concerns</h3>
          <a href="https://medium.com/p/b56e2940a36c/edit">Visit Medium</a>
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div>


</template>

<script>
export default {
 name:"Projects"
    
}
</script>


<style lang="scss" scoped>
  .Proj {
    width: 500px;
    
    margin: 4px;
    
    
     margin: auto; position: absolute; left: 00px; right: 500px; top:1240px;
  };
   .Proj1 {
    width: 500px;
    
    margin: 4px;
    
    
     margin: auto; position: absolute; left: 500px; right: 0px; top:1240px;
  };

  


</style>