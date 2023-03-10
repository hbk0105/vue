import axios from "axios";
// https://jess2.xyz/vue/vue-tip/#2-router--%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%84%A4%EA%B3%84
// https://inpa.tistory.com/entry/AXIOS-%F0%9F%93%9A-%EC%84%A4%EC%B9%98-%EC%82%AC%EC%9A%A9
// HTTP Request & Response 와 관련된 기본 설정
const config = {
    baseUrl : 'https://api.hnpwa.com/v0',
};

async function fetchNewsList(){
    try{
        // return axios.get(config.baseUrl + '/news/1.json');
        const response =  await axios.get(`${config.baseUrl}/news/1.json`);
        return response;
    }catch(error){
        console.log(error);
    }
}

async function fetchJobsList(){
    try{
        // return axios.get(config.baseUrl + '/jobs/1.json');
        return await axios.get(`${config.baseUrl}/jobs/1.json`);
    }catch(err){
        console.log(err);
    }
}

async function fetchAskList(){
    try {
        // return axios.get(config.baseUrl + '/ask/1.json');
        return await axios.get(`${config.baseUrl}/ask/1.json`);
    } catch (error) {
        console.log(error);
    }
}

async function fetchUserInfo(userName){
    try {
        return await axios.get(`${config.baseUrl}/user/${userName}.json`);
    } catch (error) {
        console.log(error);
    }
}

async function fetchItem(id){
    try {
        return await axios.get(`${config.baseUrl}/item/${id}.json`);
    } catch (error) {
        console.log(error);
    }
}

async function fetchList(pageName){
    try {
        return await axios.get(`${config.baseUrl}/${pageName}/1.json`);
    } catch (error) {
        console.log(error);
    }
}

export {
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
    fetchUserInfo,
    fetchItem,
    fetchList,
}