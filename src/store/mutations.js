// 使用常量代替mutation事件类型
const ADD = 'ADD'
const SWITCH_SHOW = 'SWITCH_SHOW'
const NEXT_TOPIC = 'NEXT_TOPIC'
const RECORD_ANSWER = 'RECORD_ANSWER'
const COMPUTED_SCORE = 'COMPUTED_SCORE'
const RECORD_TIME = 'RECORD_TIME'

// 更改store中的状态的唯一方法是提交mutation
// 在vuex中，mutations都是同步事务 
// 处理异步操作 =》 action
export default {
    // mutations 必须是同步函数
    // 我们可以使用ES2015风格的计算属性命名功能来使用一个常量作为函数名
    [ADD] (state, payload) {
        state.count += payload.step
    },
    [SWITCH_SHOW] (state) {
        state.show = !state.show
    },

    // 进入下一题
    // nextTopic (state) {
    [NEXT_TOPIC] (state) {
        state.currId += 1
    },

    // 记录答案
    [RECORD_ANSWER] (state, id) {
        state.answerId.push(id)
    }, 

    // 计算得分
    [COMPUTED_SCORE] (state) {
        state.answerId.forEach((item, index) => {
          if(item === state.topics[index].answer_id) {
            state.total += 20
          }
        })
    },

    // 记录答题时间
    [RECORD_TIME] (state) {
        state.timer = setInterval(() => {
            state.allTime++
        }, 1000)
    }


}