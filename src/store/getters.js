// getters => 从 store 的 state 中派生出一些状态，相当于store的computed属性 
// 接受 state 作为第一个参数
const getters = {
    doneTodos: state => {
        return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
        return getters.doneTodos.length
    },
    getTodoById: state => id => {
        return state.todos.find(todo => todo.id === id)
    },
    getCurrTopic: state => {
        return state.topics.find(topic => topic.topic_id === state.currId)
    },
    getTopicLength: state => {
        return state.topics.length
    },
    getScore: state => {
        let total = 0
        state.answerId.forEach((item, index) => {
            if(item === state.topics[index].answer_id) {
              total += 20
            }
        })
        return total
    },
    getTip: (state, getters) => {
        let num = getters.getScore, tip = ''
        if(num <= 20) tip = state.scoreTipsArr[0]
        else if(num <= 40) tip = state.scoreTipsArr[1]
        else if(num <= 60) tip = state.scoreTipsArr[2]
        else if(num <= 80) tip = state.scoreTipsArr[3]
        else if(num <= 100) tip = state.scoreTipsArr[4]
        return tip
    }
}

export default getters
