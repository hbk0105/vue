
// https://dana-study-log.tistory.com/entry/Vue3-%EB%9D%BC%EC%9A%B0%ED%84%B0-%EC%84%A4%EC%B9%98-%EB%B0%8F-%EC%82%AC%EC%9A%A9-vue-router
import { createRouter, createWebHistory } from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView  from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';



export const router = new createRouter({
    //mode : history, // url # 붙는거 방지
    history: createWebHistory(),
    routes : [
        {
            path : '/', // url 주소
            redirect : '/news', // 리다이렉트 url
            meta : { transition: 'slide-fade' },
        },
        {
            path : '/news', // url 주소
            component : NewsView, // url 주소로 갔을 때 표시될 컴포넌트
            meta: { transition: 'slide-fade' },
        },
        {
            path : '/ask',
            component :AskView,
            meta: { transition: 'slide-fade' },
        },
        {
            path : '/jobs',
            component : JobsView,
            meta: { transition: 'slide-fade' },
        },
        {
            path : '/user/:id',
            component : UserView,
            meta: { transition: 'slide-fade' },
        },
        {
            path : '/item/:id',
            component : ItemView,
            meta: { transition: 'slide-fade' },
            
        },
    ]
});

// 라우터 default 이름을 router 로 지정!
//export router;