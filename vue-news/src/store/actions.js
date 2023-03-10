import { fetchNewsList , 
        fetchAskList , 
        fetchJobsList , 
        fetchUserInfo ,
        fetchItem , 
        fetchList } from '../api/index.js';

export const actions = {
    // https://joshua1988.github.io/vue-camp/es6+/destructuring.html#%E1%84%87%E1%85%B2%E1%84%8B%E1%85%A6%E1%86%A8%E1%84%89%E1%85%B3%E1%84%8B%E1%85%A6-%E1%84%8C%E1%85%A5%E1%86%A8%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%92%E1%85%A1%E1%84%82%E1%85%B3%E1%86%AB-%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A9-%E1%84%87%E1%85%AE%E1%86%AB%E1%84%92%E1%85%A2-%E1%84%86%E1%85%AE%E1%86%AB%E1%84%87%E1%85%A5%E1%86%B8-1
   async FETCH_NEWS({ commit }){
        // fetchNewsList()
        // .then(res => commit('SET_NEWS' , res.data))
        // .catch(err => console.log(err));
        const response = await fetchNewsList();
        commit('SET_NEWS',response.data);
        return response;
    },
    async FETCH_ASK({ commit }){
        // fetchAskList()
        // .then(res => commit('SET_ASK',res.data))
        // .catch(err => console.log(err));
       const response =  await fetchAskList();
       commit('SET_ASK',response.data);
       return response;
        
    },
    async FETCH_JOBS({ commit }){
        // fetchJobsList()
        // .then(res => commit('SET_JOBS',res.data))
        // .catch(err => console.log(err));
        const response = await fetchJobsList();
        commit('SET_JOBS',response.data);
        return response;
    },
    async FETCH_USER({ commit } , userName){
        // fetchUserInfo(userName)
        // .then(res => commit('SET_USER',res.data))
        // .catch(err => console.log(err));
        const response = await fetchUserInfo(userName);
        commit('SET_USER', response.data);
        return response;
    },
    async FETCH_ITEM({commit} , id){
        fetchItem(id)
        // .then(({data}) => {
        //     commit('SET_ITEM', data)
        // }).catch(err => console.log(err));
        const response = await fetchItem(id);
        commit('SET_ITEM', response.data);
        return response;
    },
    async FETCH_LIST({commit} , pageName){
        fetchList(pageName)
        // .then(({data}) => {
        //     commit('SET_LIST', data)
        // }).catch(err => console.log(err));
        const response = await fetchList(pageName);
        commit('SET_LIST', response.data);
        return response;
    }

}