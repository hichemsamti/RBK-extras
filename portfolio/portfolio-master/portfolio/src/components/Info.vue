<template>
  <div>
    <div class="viewport">
      <md-toolbar :md-elevation="1">
        <h2 class=" title" >  Hichem Samti</h2>
      </md-toolbar>

      <div class="md-list-item-text">
            <h2>Sotfware engeneer</h2>
           
          </div>

      <md-list class="md-double-line">
        <md-subheader>Phone</md-subheader>

        <md-list-item>
          <md-icon class="md-primary">phone</md-icon>

          <div class="md-list-item-text">
            <span>(744) 555-1234</span>
            <span>Mobile</span>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon>sms</md-icon>
          </md-button>
        </md-list-item>

        <md-list-item class="md-inset">
          <div class="md-list-item-text">
            <span>(650) 555-1234</span>
            <span>Mobile</span>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon>sms</md-icon>
          </md-button>
        </md-list-item>

        <md-divider></md-divider>
        <md-subheader>Email</md-subheader>

        <md-list-item>
          <md-icon class="md-primary">email</md-icon>

          <div class="md-list-item-text">
            <span>hichem@example.com</span>
            <span>Personal</span>
          </div>
        </md-list-item>

        <md-list-item class="md-inset">
          <div class="md-list-item-text">
            <span>hichem1@example.com</span>
            <span>Work</span>
          </div>
        </md-list-item>
      </md-list>
    </div>
    </div>
  
</template>

<script>
  export default {
    name: 'Info'
  }
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Material+Icons");
  .viewport {
    width: 520px;
    max-width: 100%;
    display: inline-block;
    vertical-align: top;
    overflow: auto;
    border: 1px solid rgba(#000, .12);
    margin: auto; position: absolute; left: 0px; right: 1100px; 
  }
  .title{
    text-align: center
  }
</style>
