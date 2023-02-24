// https://velog.io/@katanazero86/vue3-%EB%AF%B8%EB%A6%AC-%EC%82%B4%ED%8E%B4%EB%B3%B4%EA%B8%B0
// vue3 문법
/* 
모듈을 불러올 때 import를 해주는 것처럼 해당 모듈을 다른 파일에 보내려면 export라고 명시적으로 써줘야 한다.
export 시 default를 붙인 경우 중괄호 없이 import가 가능하지만, default 없이 export한 경우, 중괄호 안에 담아 import를 해주면 된다.
만약, default 없이 export한 경우, 중괄호를 빼먹을 경우  에러가 발생한다.
*/

import { createApp } from 'vue';
import App from './App.vue';
import { router } from './routers/index.js'; // 생성한 뷰 라우터 받아오기
import { store }  from './store/index.js';

const app = createApp(App);
app.use(router);  // 라우터 사용
app.use(store);
app.mount('#app');
