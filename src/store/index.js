import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 0,
}

const mutations = {
    add (state, param = 1) {
        state.count += param
    }
}

const store = new Vuex.Store({
    state,
    mutations,
})

export default store

/*

vuex 一个专为vue.js应用程序开发的状态管理模式，它采用集中式存储管理应用的所有组件的状态,并以相应的规则保证状态以一种可预测的方式发生变化

需求来源：
1.多个视图依赖统一状态（兄弟组件无法通信）
2.来自不同视图的行为需要变更同一状态

vuex 专门为vue.js设计的状态管理库，以利用vue.js的细粒度数据响应机制来进行高效的状态更新
*/ 