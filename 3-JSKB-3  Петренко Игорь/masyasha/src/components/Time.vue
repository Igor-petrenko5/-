<template>
    <div class="time">
    {{ timestamp }}
    </div>
</template>

<script>
export default{
    name:'TimerSrs',
    data(){
        return{
      timestamp: ""  
    }
    
            },
    created() {
                setInterval(this.getNow, 1000);
            },
    methods:{
        getNow: function() {
                    const today = new Date();
                    const time = today.getHours() + ":" + today.getMinutes();
                    const dateTime = time;
                    this.timestamp = dateTime;

} 
}
}

</script>
<style>
</style>