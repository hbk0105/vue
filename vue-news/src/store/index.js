import { createStore } from 'vuex';
//import { fetchNewsList , fetchAskList , fetchJobsList } from '../api/index.js';
import { mutations } from './mutations.js';
import { actions } from './actions.js';
/* 
각 컴포넌트(dispatch) -> actions(commit) -> mutations(state) -> state -> 모든 컴포넌트에서 사용
API -> VUEX(actions > mutations > state) -> view 
*/

export const store = createStore({
    state : {

        news : [],
        ask : [],
        jobs : [],
        user : {},
        item : {},
    },
    getters : {
        fetchedAsk(state){
            return state.ask;
        },
        fetchedJobs(state){
            return state.jobs;
        },
        fetchedNews(state){
            return state.news;
        },
        fetchUsers(state){
            return state.user;
        },
        fetchItems(state){
            return state.item;
        }

    },
    mutations ,
    actions , 
});

//export default store;