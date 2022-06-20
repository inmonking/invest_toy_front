import axios from "axios";
import store from "../store";

axios.defaults.baseURL = 'http://localhost:8080/';

axios.interceptors.request.use(
    (config)=>{
        let {Token, isLogin} = store.state.userState;
        // eslint-disable-next-line no-empty
        if(config.url.indexOf('/login')>-1){

        }else if(isLogin&&Token!=null){
            config.headers = {
                Authorization: `Bearer ${Token}`
            }
        }

        return config;
    },
    (error)=>{
        return Promise.reject(error);
    }
)

export default axios;