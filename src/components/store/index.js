import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import router from "@/router";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        userState:{
            userId:null,
            userName:null,
            Token:null,
            refreshToken:null,
            isLogin:false
        }
    },
    getters:{
        getUser(state){
            return state.userState;
        }
    },
    mutations:{
        setUser(state, {userId, userName}){
            state.userState.userId = userId;
            state.userState.userName = userName;
        }
    },
    actions:{
        // eslint-disable-next-line no-unused-vars
        isLogin({state, commit}, obj){
            let {id, password} = obj;
            axios.post('/login',`username=${id}&password=${password}`)
            .then(({data})=>{
                commit('setUser', data.response.user)
            })
        }
    },
    modules:{},
    plugins:[createPersistedState()]
});