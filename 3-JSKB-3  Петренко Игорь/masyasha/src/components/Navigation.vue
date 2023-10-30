<template>
    <div class="component">
        <nav>
            <router-link to="/"><img src="./Img/logo-3266214_1280.png" alt="" class="logo"></router-link>   
            <router-link to="/chat" style='text-decoration: none; color: rgb(69, 69, 69);'>Chat</router-link>
            <router-link to="/api" style='text-decoration: none; color: rgb(69, 69, 69);'>Api</router-link>
            <router-link to="/hello" style='text-decoration: none; color: rgb(69, 69, 69);'>Score</router-link>
            <router-link to="/ricroll" style='text-decoration: none; color: rgb(69, 69, 69);'>RickRoll</router-link>
            <router-link to="/cal" style='text-decoration: none; color: rgb(69, 69, 69);'>Calculator</router-link>
            <div class="time"><TimerSrs/></div>        
        </nav>
         
    </div>
</template>


<script>
import TimerSrs from './Time.vue'
export default{
    name:'NavComp',
    components:{TimerSrs,}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Signika+Negative:wght@600&display=swap');
.component{
   background-color: rgb(195, 195, 195);  
   height: 70px;
   border-radius: 7px;
}
.time{
    @import url('https://fonts.googleapis.com/css2?family=Signika+Negative:wght@600&display=swap');    
    font-family: 'Signika Negative', sans-serif;
    margin-left: 100px;
    margin-right: 10px;
    color: rgb(69, 69, 69);
}
nav{
    @import url('https://fonts.googleapis.com/css2?family=Signika+Negative:wght@600&display=swap');    
    font-family: 'Signika Negative', sans-serif;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 30px;
    color: rgb(69, 69, 69);
    
}
.logo{
    height: 65px;
    width: 93px;
}
</style>
