import ListView from './ListView.vue';
import { h } from 'vue';
export default function createListView(name) {
    return {
        name : name, // High Order Component의 이름
        created(){
            this.$store.dispatch('FETCH_LIST',this.$route.name);
        },
        render(){
            // vue2 , vue3 차이 
            // https://vuejs.org/guide/introduction.html#still-got-questions
            // https://sambitsahoo.com/blog/introduction-to-render-functions-in-vue-3.html
            return h(ListView);
        }  
    };
  }