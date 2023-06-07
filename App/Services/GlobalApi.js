import axios from "axios";

const BASE_URL='http://192.168.0.113:3000/api/bardapi' //Replace with System PC IP address

const getBardApi=(userMsg)=>axios.get(BASE_URL+"?ques="+userMsg);

export default{
    getBardApi
}