import axios from 'axios';
const baseURL = process.env.BASEURL;

const MY_SERVICE = axios.create({baseURL,withCredentials:true});

const BOX_SERVICE={
    getBalance:async()=>{
        return await MY_SERVICE.get("/cashier/balance",{Authorization:process.env.VALUE});
    }
}

export default BOX_SERVICE;