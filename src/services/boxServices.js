import axios from 'axios';
const baseURL = process.env.REACT_APP_PUBLIC_URL;

const MY_SERVICE = axios.create({baseURL});

const BOX_SERVICE={
    getBalance:async()=>{
        
        return await MY_SERVICE.get("/cashier/balance",{
            headers:{
                Authorization:`Bearer ${process.env.REACT_APP_VALUE}`
            }});
    }
}

export default BOX_SERVICE;