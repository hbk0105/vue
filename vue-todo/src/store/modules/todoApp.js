const storage = {
    fetch(){
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    // console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    },
}

const state = {
    headerText : 'TODO IT2',
    todoItems : storage.fetch(),
}

const getters = {
    storeTodoItems(state){
        return state.todoItems;
    },
    headerText(state){
        return state.headerText;
    }
}

const mutations = {
    addTodoItem(state , todoItem){
        const obj = { completed: false, item: todoItem };
        localStorage.setItem(todoItem, JSON.stringify(obj));
        state.todoItems.push(obj);
    },
     removeOneItem(state , obj){
        localStorage.removeItem(obj.todoItem.item);
        state.todoItems.splice(obj.index, 1);
    },  
     toggleOneItem(state , obj){
        state.todoItems[obj.index].completed = !state.todoItems[obj.index].completed;
        localStorage.removeItem(obj.todoItem.item);
        localStorage.setItem(obj.todoItem.item, JSON.stringify(obj.todoItem));
    },
    clearAll(state){
        localStorage.clear();
        state.todoItems = [];
    }
}

export default{
    state,
    getters,
    mutations,
}