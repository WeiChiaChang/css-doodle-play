<template>
  <div id="app">
    <css-doodle>
      :doodle { 
        @grid: 25 / 100vmax; 
        background: #12152f; 
      } 
      :after { 
        font-family: devicons; 
        content: '\@hex(@rand(58894, 59050))';
        font-size: 3.6vmax; 
        color: hsla( @rand(360), 70%, 70%, @rand(.9) ); 
      }
    </css-doodle>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  #app {
    width: 100vw;
    height: 100vh;
    min-height: 380px;
    overflow: hidden;
    z-index: 2;
    position: relative;
  }
</style>
