export default {
    state: {
        comments:[
            {comment:{
                id:1, title:"Колизей",body:"Хорошая гостиница",stars:4,author:"Tom"
            }}
        ],
    },
    getters: {
        allComments(state) {
            return state.comments
        }

    },
    mutations: {
        createComment(state, newComment){ //Мутация создания комментария
            state.comments.push(newComment)
        }
    },
    actions: {
    },
    modules: {
    }
}