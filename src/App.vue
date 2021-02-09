<template>
  <div class="application flex flex-row w-full"> 
    <Sidebar/>

    <div class="content flex">
      <router-view></router-view>
    </div>
    
    
  </div>
</template>

<script>
import Sidebar from './components/sidebar/Sidebar'


export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    Sidebar,
  
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Rajdhani&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  font-family: 'Rajdhani', sans-serif;
}

body {
  font-size: 62.5%;
  
}

.application {
  padding: 1%;
  min-height: 100vh;
}

.content {
  width: 100%;
}


</style>
