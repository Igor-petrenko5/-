<template>
  <div>

      <div v-if="!isAut" class="login-field" >
        <div class="login-background">
            <div class="login-title">
                <span>Sign In</span>
              </div>
          <button v-on:click="changeFormView()" class="buttt" >{{resetTextInButton()}}</button>
          <div v-if="isLogIn" class="Forma">
              <input type="text" id="username" name="username" class="textPl" placeholder="Введите ник" v-model="DataUserForLogIn.userName">
              <input type="password" id="password" name="password" class="textPl" placeholder="Введите пароль" v-model="DataUserForLogIn.password">
              <div v-if="resolteVerification2!=''">
                  Неверный логин или пароль
              </div>
              <button v-on:click="logIn" class="butt">Войти</button>
              
          </div>
          <div v-else class="Forma">
              <input type="text" placeholder="Придумайте ник" class="textPl" v-model="DataUserForPost.newUserName">
              <input type="password" placeholder="Придумайте пароль" class="textPl" v-model="DataUserForPost.newPassword">
              <input type="password" placeholder="Повторите пароль" class="textPl" v-model="DataUserForPost.repNewPassword">
              <div v-if="isNotSingUp == '1'">
                  {{ resolteVerification }}
              </div>
              <button v-on:click="verification1" class="butt" type="button">Зарегестрироваться</button>
          </div>
      </div>
    </div>
      <div v-else class="hello">
          Привет, {{ USERName }}
          <button v-on:click="logOut" class="butt">
              <div class="content-in-button">
              Выйти 
          </div>
      </button>
      </div>
  </div>
  
  
  </template>
  
  <script>
  export default{
      name: "HomeComponent",
      data: function(){
          return{
              resolteVerification2:"",
  
              isLogIn:true,
              
              user: JSON.parse(localStorage.getItem("USER")),
  
              dataUsers:JSON.parse(JSON.stringify(JSON.parse(localStorage.getItem('USERS')))),
  
              isAut: JSON.parse(localStorage.getItem("isAut")),
  
              isNotSingUp: "0",
  
              resolteVerification:"",
  
              DataUserForLogIn:{
                  userName: "",
                  password: "",
              },
              
              DataUserForPost:{
                  newPassword:"", 
                  repNewPassword:"",
                  newUserName:"",
                  passwordMatch:false, 
                  userId: new Date().getTime()
              }, 
  
              USERName: JSON.parse(localStorage.getItem("USERName")),
  
              USERS: JSON.parse(localStorage.getItem('USERS')),
          }
      }, 
      methods:{
          changeFormView(){
              this.isLogIn = !this.isLogIn
          },
          resetTextInButton(){
              if (this.isLogIn == true){
                  return "Регистрация"
              }else{
                  return "Вход"
              }
          },
          verification1(){
              if (this.DataUserForPost.newUserName == ""){
                  this.isNotSingUp = "1"
                  this.resolteVerification = "Введите имя пользователя"
              }else if(this.DataUserForPost.newPassword != this.DataUserForPost.repNewPassword){
                  this.isNotSingUp = "1"
                  this.resolteVerification = "Пароли не совпадают"
              }else if(this.DataUserForPost.newPassword == ""){
                  this.isNotSingUp = "1"
                  this.resolteVerification = "Введите пароль"
              }else{
                  this.isNotSingUp = "0"
                  this.DataUserForPost.passwordMatch = true
                  this.USERS = JSON.parse(localStorage.getItem('USERS'))
                  this.USERS.push(this.DataUserForPost)
                  localStorage.setItem('USERS', JSON.stringify(this.USERS))
                  this.SingUp()
                  window.location.reload();
                  alert('Вы зарегистрированы')
              }
          },
  
          SingUp(){
              if(this.DataUserForPost.newUserName != "" && this.DataUserForPost.passwordMatch == true){
                  localStorage.setItem("USERS", JSON.stringify(this.USERS))
              }
          }, 
          
          logIn(){
              if (this.dataUsers != null){
                  this.dataUsers.map((el)=>{
                      if (this.DataUserForLogIn.userName == el.newUserName && this.DataUserForLogIn.password == el.newPassword) {
                          this.isAut = true
                          localStorage.setItem("isAut", true)
                          localStorage.setItem("USERName",  JSON.stringify(el.newUserName))
                          location.reload()
                      }else{
                          this.resolteVerification2 = "Неверный логин или пароль"
                      }
                  })
                  
              }else{
                  location.reload()
                  alert("Что-то пошло не так, попробуй ещё раз")
              }
          },
          logOut(){
              localStorage.setItem("isAut", false)
              localStorage.removeItem("USERName")
              this.isAut = false
          },
      },
  
      created(){
          if(!localStorage.getItem('USERS')) {
              localStorage.setItem('USERS', JSON.stringify([]))
          }
          if (localStorage.getItem("isAut") == null){
              localStorage.setItem("isAut", false)
              this.dataUsers = JSON.parse(localStorage.getItem('USERS'))
          }
      }, 
      
  }
  
  
  </script>
  
  <style >
  div{
    color:#fff;
  }
  body{
    background-color: #302828;
  }

      .Forma{
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
          margin-top: 70px;
          height: 400px;
      }
  
      .hello{
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          align-items: center;
          height: 100px;
          font-size: 25px;
          margin-top: 100px;
      }
    .login-field{
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .login-background{
        background: #fff;
        min-height: 600px;
        min-width: 400px;
        background: linear-gradient(to right bottom,
                rgba(255, 255, 255, 0.2),
                rgba(255, 255, 255, 0.1));
        backdrop-filter: blur(20px);
        border-radius: 10px;
        z-index: 5;
        display: flex;
        flex-flow:column;
        box-shadow: 0 0 5px 0 rgba(22, 22, 22, 0.1);
    }
    .login-title{
        position: relative;
        color: #fff;
        text-align: center;
        margin-top: 50px;
        padding: 10px;
        border-top: 5px solid rgba(255, 255, 255, 0.1);
        border-bottom: 5px solid rgba(255, 255, 255, 0.1);
    }
    .login-title span{
        font-size: 30px;
        letter-spacing: 3px;
    }
    .login-form{
        display: flex;
        justify-content: center;
        align-items:center;
        min-height: 100%;
        flex-grow: 1;
        border-bottom-left-radius: 30px;
        border-bottom-right-radius: 30px;
    }
    .login-form .field{
        margin: 50px 0;
        text-align: center;
    }
    .login-form .field label{
        display: block;
        font-size: 20px;
        margin-bottom: 5px;
        letter-spacing: 2px;
    }
    .login-form .field input{
        font-family: Quicksand;
        border: 0px;
        padding: 20px 60px;
        border-radius: 10px;
        outline: none;
        text-align: center;
        box-shadow: 0 2px 5px 0 rgba(50, 50, 50, 0.2);
        background: linear-gradient(to right bottom,
                rgba(255, 255, 255, 0.8),
                rgba(255, 255, 255, 0.7));
        backdrop-filter: blur(10px);
        color: #111;
        font-size: 16px;
    }
    ::placeholder{
        color: #666;
        letter-spacing: 2px;
      }
    .login-field .button-field{
        display: flex;
        flex-flow: column;
    }
    .login-form .field button{
        font-family: Quicksand;
        flex-grow: 1;
        border: 0px;
        padding: 15px 50px;
        outline: none;
        text-align: center;
        cursor: pointer;
        margin: 10px;
        transition: 1s;
        box-shadow: 0 2px 5px 0 rgba(50, 50, 50, 0.2);
        font-size: 16px;
        border-radius: 10px;
    }
    .login-form .field button:hover{
        transform: translateY(-3px);
        transition: 1s;
    }
    .login-form .button-login{
        background: linear-gradient(to right bottom,
        rgb(223, 55, 153),
        rgb(202, 44, 128));
        color: #fff;
    }
    .square{
        height: 100vh;
        width: 50vw;
        display: table;
        position: absolute;
        background: rgba(255, 255, 255, 0.1);
        transform: rotate(45deg);
    }
    .square.square-tl{
        top: -80%;
        left: -10%;
        animation: bounce 6s infinite ease-in-out;
        background: rgb(34, 34, 34, 0.1);
        z-index: 50;
    }
    .square.square-tr{
        top: 0%;
        right: -30%;
        animation: bounce 5s infinite ease-in-out;
    }
    .square.square-bl{
        bottom: -70%;
        left: -15%;
        animation: bounce 4s infinite ease-in-out;
    }
    .square.square-br{
        bottom: 0%;
        right: -40%;
        animation: bounce 3s infinite ease-in-out;
        background: rgb(34, 34, 34, 0.1);
    }
    @keyframes bounce{
        0%{
            transform: translateY(0px) rotate(45deg);
        }
        50%{
            transform: translateY(20px) rotate(45deg); 
            border-radius: 50px;
        }
        100%{
            transform: translateY(0px) rotate(45deg);
        }
    }
    @keyframes sweep{
        100%{
            bottom: 120%; left: 120%; transform: rotate(360deg);
        }
    }
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
        margin-bottom: 100px;
      }
      .butt:active{
        top: 3px;
        box-shadow: 0 2px 0px #387796;
        transition: all .2s;
    }
    .buttt{
        background: #51A3B8;
                  font-size: 15px;
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
        width: 300px;
        margin-left: 50px;
        margin-top: 10px;
      }
      .buttt:active{
        top: 3px;
        box-shadow: 0 2px 0px #387796;
        transition: all .2s;
    }
    .textPl{
        height: 30px;
        width: 200px;
        border-radius: 5px;
        border-color: aqua;
    }
  </style>