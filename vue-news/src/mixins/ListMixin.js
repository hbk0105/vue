export default {
    // 재 사용할 컴포넌트 옵션
    created(){
        this.$store.dispatch('FETCH_LIST',this.$route.name);
    },
}