import { createStore } from 'vuex';
//import { fetchNewsList , fetchAskList , fetchJobsList } from '../api/index.js';
import { mutations } from './mutations.js';
import { actions } from './actions.js';

// API -> VUEX(actions > mutations > state) -> view

export const store = createStore({
    state : {

        news : [],
        ask : [],
        jobs : [],
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
        }

    },
    mutations ,
    actions , 
});

//export default store;