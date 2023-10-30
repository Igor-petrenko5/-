<template>
    <div id="app" class="bod">
    <div class="bodd"></div>
    <div >
    <button @click="counter++" class="butt">+1</button>               <button @click="counter--" class="butt">-1</button>
    </div>
    <h1 style="color: rgb(196, 196, 196);">{{counter}}</h1>
    <button @click="greet" class="butt">Показать сколько нащелкал</button>

    
    </div>

</template>
<script>

export default {
  name: 'HelloWorld',
  el:'#app',
         data(){
          return{
        counter:0
      }
      },
    methods:{



        greet(e){
            alert('Ты нащелкал ' + this.counter);
            console.log(e);
        },
    }
}
</script>

<style scoped>

.butt{
  background: #51A3B8;
            font-size: 20px;
            color: white;
            border-radius: 7px;
            box-shadow: 0 7px 0px #387796;
            display: inline-block;
            transition: all .2s;
            position: relative;
            padding: 20px 25px;
            position: relative;
            top: 0;
            cursor: pointer;
  margin:0 20px;
}
.butt:active{
  top: 3px;
  box-shadow: 0 2px 0px #387796;
  transition: all .2s;
}
.bod{
  height: 10000px;
  text-align: center;
  background-color: #302828;
  margin-left: 40px;
}
.bodd{
  height: 50px;
}
</style>
