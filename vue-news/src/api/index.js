import axios from "axios";
// https://jess2.xyz/vue/vue-tip/#2-router--%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%84%A4%EA%B3%84
// https://inpa.tistory.com/entry/AXIOS-%F0%9F%93%9A-%EC%84%A4%EC%B9%98-%EC%82%AC%EC%9A%A9
// HTTP Request & Response 와 관련된 기본 설정
const config = {
    baseUrl : 'https://api.hnpwa.com/v0',
};

function fetchNewsList(){
    // return axios.get(config.baseUrl + '/news/1.json');
    return axios.get(`${config.baseUrl}/news/1.json`);
}

function fetchJobsList(){
    // return axios.get(config.baseUrl + '/jobs/1.json');
    return axios.get(`${config.baseUrl}/jobs/1.json`);
}

function fetchAskList(){
    // return axios.get(config.baseUrl + '/ask/1.json');
    return axios.get(`${config.baseUrl}/ask/1.json`);
}

function fetchUserInfo(userName){
    return  axios.get(`${config.baseUrl}/user/${userName}.json`);
}

function fetchItem(id){
    return axios.get(`${config.baseUrl}/item/${id}.json`);
}

function fetchList(pageName){
    console.log(`${config.baseUrl}/${pageName}/1.json`)
    return axios.get(`${config.baseUrl}/${pageName}/1.json`);
}

export {
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
    fetchUserInfo,
    fetchItem,
    fetchList,
}