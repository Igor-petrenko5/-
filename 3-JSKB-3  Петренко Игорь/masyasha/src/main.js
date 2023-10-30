import { createApp } from 'vue'
import {createRouter,createWebHistory} from 'vue-router'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
import HomeComp from './components/Home.vue'
import ChatGP from './components/Chat.vue'
import MasApi from './components/MasApi.vue'
import RickRoll from './components/RickRollTransitional.vue'
import CalculatorUser from './components/Calculator.vue'



const routes = [
    {path:'/',name:'Home', component:HomeComp},
    {path:'/hello',name:'Hello', component:HelloWorld},
    {path:'/chat',name:'Chat', component:ChatGP},
    {path:'/api',name:'MasApi', component:MasApi},
    {path:'/ricroll',name:'Rick', component:RickRoll},
    {path:'/cal', name:'Cal', component:CalculatorUser}
];

const router = createRouter({
    history:createWebHistory(),
    routes,
});

const app=createApp(App)
app.use(router)
app.mount('#app')
