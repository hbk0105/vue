import { fetchNewsList , 
        fetchAskList , 
        fetchJobsList , 
        fetchUserInfo ,
        fetchItem } from '../api/index.js';

export const actions = {
    FETCH_NEWS({ commit }){
        fetchNewsList()
        .then(res => commit('SET_NEWS' , res.data))
        .catch(err => console.log(err));
    },
    FETCH_ASK({ commit }){
        fetchAskList()
        .then(res => commit('SET_ASK',res.data))
        .catch(err => console.log(err));
        
    },
    FETCH_JOBS({ commit }){
        fetchJobsList()
        .then(res => commit('SET_JOBS',res.data))
        .catch(err => console.log(err));
    },
    FETCH_USER({ commit } , userName){
        fetchUserInfo(userName)
        .then(res => commit('SET_USER',res.data))
        .catch(err => console.log(err));
    },
    FETCH_ITEM({commit} , id){
        fetchItem(id)
        .then(({data}) => {
            commit('SET_ITEM', data)
        }).catch(err => console.log(err));
    }

}