<template>

    <div v-if="Islogin" class="chat">
        <div class="title">
            Чат для пользователей сайта
        </div>

        <div class="messages" >
            <div v-for="i in ListMSG" :key="i"  class="message">
                <div>
                <div class="userName">
                    {{ i.user }}:
                </div>
                <div class="textMessage">
                    {{i.Message}}
                </div>
            </div>
            </div>
            
        </div>

        <div class="inputMessage">
            <input type="text" placeholder="Введите сообщение" v-model="infoMsg.Message" class="lineMSG">
            <button @click="sendMSG">Отправить</button>
            <button @click="deleteMSG" class="buttonDeleter">Удалить</button>
        </div>

    </div>

    <div v-else>
        <h1 style="margin-top: 100px; margin-left:700px;">Ты Кто?</h1> 
    </div>
</template>

<script>
    export default{
        name: "ChatPage", 
        data(){
            return{
                Islogin: JSON.parse(localStorage.getItem("isAut")),
                infoMsg: {
                    user: JSON.parse(localStorage.getItem("USERName")), 
                    Message:"", 
                },
                ListMSG: JSON.parse(localStorage.getItem("MSG")) || [], 
            }
        },
        methods:{
            isLogIn(){
                if (localStorage.getItem("isAut") == true){
                    this.Islogin = true
                }
            }, 
            sendMSG(){
                if (this.infoMsg.Message != ""){
                    this.ListMSG.push(this.infoMsg)
                    localStorage.setItem("MSG", JSON.stringify(this.ListMSG))
                    this.ListMSG = JSON.parse(localStorage.getItem("MSG"))
                    this.infoMsg.Message = ""
                }
            }, 
            deleteMSG(){
                localStorage.removeItem("MSG")
                localStorage.setItem("MSG", JSON.stringify([])) 
                this.ListMSG = JSON.parse(localStorage.getItem("MSG"))
            }
        }, 
        created(){
            if(!localStorage.getItem("MSG")){
                localStorage.setItem("MSG", JSON.stringify([]))
                
            }
        },
    }
</script>
<style scoped>
    .title{
        font-size: 23px;
    }
    .chat{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .messages{
        min-height: 600px;
        width:900px;
        margin-top: 30px;
        max-height: 100px;

        overflow-y: auto;
    }
    .message{
        background-color: rgb(84, 153, 158);

        max-width: 500px;
        min-width: 200px;
        width: fit-content;
        height: fit-content;
        margin-top: 30px;
        border-radius: 10px;
    }
    .userName{
        margin-left: 10px;
        padding-bottom: 5px;
        padding-top: 5px;
        font-size: 20px;
    }
    .textMessage{
        margin-top: 0.375rem;
        margin-left: 10px;
        max-width: 500px;
        width: fit-content;
        height: fit-content;
        padding-right: 10px;
        padding-bottom: 10px;
        font-size: 19px;

        overflow-wrap: break-word;
    }
    .inputMessage{
        width:900px;
        height: 30px;
        margin-top: 40px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .buttonDeleter{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .trash{
        padding-right: 8.5px;
    }
    input{
        padding:10px;
        width: 90%;
        height: 40px;
        font-size: 20px;
        border-radius: 10px;
        border: 0;
    }
    input:active, :hover, :focus {
        outline: 0;
        outline-offset: 0;
    }
    img{
        height: 40px;
    }
    button{
        background: #51A3B8;
        font-size: 20px;
        color: white;
        border-radius: 10px;
        box-shadow: 0 7px 0px #387796;
        display: inline-block;
        transition: all .2s;
        position: relative;
        padding: 20px 25px;
        position: relative;
        top: 0;
        cursor: pointer;
    }
    button:active{
        top: 3px;
        box-shadow: 0 2px 0px #387796;
        transition: all .2s;
    }
</style>