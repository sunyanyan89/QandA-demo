export default {
    submit({ commit, state, getters }, id) {
        // this.$store.commit('RECORD_ANSWER', this.choosedId)
        // this.$store.commit('NEXT_TOPIC')
        // 点击下一题，记录答案id，判断是否是最后一题，如果不是则跳转下一题
        commit('RECORD_ANSWER', id)
        if(state.currId < getters.getTopicLength) {
            commit('NEXT_TOPIC')
        }
    }    
}