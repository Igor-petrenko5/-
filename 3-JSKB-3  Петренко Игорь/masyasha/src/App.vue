<template>
  <div>
    <NavComp/>
    <router-view></router-view>
  </div>
</template>

<script> 
import NavComp from './components/Navigation.vue'

export default {
  name: 'App',
  components:{
   NavComp
  }
}
</script>

<style>

</style>

