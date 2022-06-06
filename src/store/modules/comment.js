export default {
    state: {
        comments:[
            {id:1, title:"Колизей",body:"Хорошая гостиница",stars:4,author:"Tom"}
        ],
    },
    getters: {
        validComments(state) {
            return state.comments.filter(p=>{
                return p.title && p.body && p.stars && p.author
            })
        },
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