<template>
     <div class="bod">
     <div>Команды</div>
     <div v-if="isLoad">Загрузка...</div>
     <div v-else>
        <div v-for="el in teamData" :key='el.id'>
         {{ el.id }}. {{el.abbreviation}} {{ el.city }}
         <img src="./Img/kisspng-american-red-cross-british-red-cross-clip-art-drug-free-clipart-5aa96992587175.9711769615210520503623.jpg" class="i" @click="removeTeam(el.id)">
        </div>
     </div>
     </div>
    
</template>
<script>
export default{
    name:'MasApi',
    data() {
        return {
            teamData:[],
            isLoad:true
        }
    },
    mounted(){
        const url = 'https://free-nba.p.rapidapi.com/teams?page=0';
        const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '745a0bf1b5msh29f676cc453d5e1p1d7ae8jsn67644d1e1d61',
		'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
	}
};
fetch(url,options)
.then((res) => res.json())
.then((res) =>{
    console.log(res.data);
 this.teamData = res.data;
 this.isLoad = false;
})

    },
    methods:{
        removeTeam(id){
            this.teamData = this.teamData.filter((el) => el.id !== id)
        }
    }
}
</script>
<style>
.i{
    height: 15px;
    width: 15px;
}
.bod{
    background-color: #302828;
    color: white;
    font-size: 20px;
    margin-top: 100px;
    align-items: center;
    margin-left: 600px;
}
</style>
