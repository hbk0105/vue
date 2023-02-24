import { fetchNewsList , fetchAskList , fetchJobsList } from '../api/index.js';

export const actions = {
  FETCH_NEWS(context){
      fetchNewsList()
      .then(res => context.commit('SET_NEWS' , res.data))
      .catch(err => console.log(err));
  },
  FETCH_ASK(context){
      fetchAskList()
      .then(res => context.commit('SET_ASK',res.data))
      .catch(err => console.log(err));
      
  },
  FETCH_JOBS(context){
      fetchJobsList()
      .then(res => context.commit('SET_JOBS',res.data))
      .catch(err => console.log(err));
  }

}