
// https://dana-study-log.tistory.com/entry/Vue3-%EB%9D%BC%EC%9A%B0%ED%84%B0-%EC%84%A4%EC%B9%98-%EB%B0%8F-%EC%82%AC%EC%9A%A9-vue-router
import { createRouter, createWebHistory } from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView  from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';



const router = new createRouter({
    mode : history, // url # 붙는거 방지
    history: createWebHistory(),
    routes : [
        {
            path : '/', // url 주소
            redirect : '/news' // 리다이렉트 url
        },
        {
            path : '/news', // url 주소
            component : NewsView // url 주소로 갔을 때 표시될 컴포넌트
        },
        {
            path : '/ask',
            component :AskView
        },
        {
            path : '/jobs',
            component : JobsView
        },
        {
            path : '/user',
            component : UserView
        },
        {
            path : '/item',
            component : ItemView
        },
    ]
})

// 라우터 default 이름을 router 로 지정!
export default router;