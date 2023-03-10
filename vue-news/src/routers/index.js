
// https://dana-study-log.tistory.com/entry/Vue3-%EB%9D%BC%EC%9A%B0%ED%84%B0-%EC%84%A4%EC%B9%98-%EB%B0%8F-%EC%82%AC%EC%9A%A9-vue-router
import { createRouter, createWebHistory } from 'vue-router';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import { store }  from '../store/index.js';
import createListView from '../views/CreateListVue.js';

 const router = new createRouter({
    //mode : history, // url # 붙는거 방지
    history: createWebHistory(),
    routes : [
        {
            path : '/', // url 주소
            redirect : '/news', // 리다이렉트 url
        },
        {
            path : '/news', // url 주소
            name : 'news',
            //component : NewsView, // url 주소로 갔을 때 표시될 컴포넌트
            component : createListView('NewsView'),
            //beforeEnter(to, from, next) {
                // 인증 값 검증 로직 추가
                // to : 이동할 url
                // from : 현재 url
                // next : to에서 지정한 url로 이동하기 위해 꼭 호출해야 하는 함수
                // console.log(to);
                // store.commit('START_SPINNER');
                // setTimeout(() => {
                //     next();
                // }, 100);
            //},
        },
        {
            path : '/ask',
            name : 'ask',
            //component :AskView,
            component : createListView('AskView')
        },
        {
            path : '/jobs',
            name : 'jobs',
            //component : JobsView,
            component : createListView('JobsView')
        },
        {
            path : '/user/:id',
            component : UserView,
        },
        {
            path : '/item/:id',
            component : ItemView,
            
        },
    ]
});
// vue2 - 이벤트 버스
// vue3 - mitt를 이용

// https://pjs21s.github.io/spinner-vuejs/ 
// https://v3.router.vuejs.org/kr/guide/advanced/navigation-guards.html
// https://joshua1988.github.io/web-development/vuejs/vue-router-navigation-guards/
// https://joshua1988.github.io/vue-camp/advanced/navigation-guard.html#%E1%84%82%E1%85%A6%E1%84%87%E1%85%B5%E1%84%80%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%89%E1%85%A7%E1%86%AB-%E1%84%80%E1%85%A1%E1%84%83%E1%85%B3-%E1%84%8C%E1%85%A9%E1%86%BC%E1%84%85%E1%85%B2
router.beforeEach((to, from, next) => {
    store.commit('START_SPINNER');
    setTimeout(() => {
        next();
    }, 10);
})

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
    store.commit('END_SPINNER');
});


// 라우터 default 이름을 router 로 지정!
export default router;