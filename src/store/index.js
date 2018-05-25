import Vue from 'vue'
import Vuex from 'vuex'

import state from './state' // 引入state对象
import mutations from './mutations' // 引入mutations对象
import getters from './getters' // 引入getters对象
import actions from './actions' // 引入mutations对象


Vue.use(Vuex)

// // actions函数接受一个与store实例具有相同方法和属性的context对象
// // 因此可以调用context.commit来提交一个mutation 或者通过context.state和context.getters来获取state和getters
// const actions = {
//     increment(context) {
//         context.commit('ADD')
//     }
// }

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
})

export default store

/*

vuex 一个专为vue.js应用程序开发的状态管理模式，它采用集中式存储管理应用的所有组件的状态,并以相应的规则保证状态以一种可预测的方式发生变化

需求来源：
1.多个视图依赖统一状态（兄弟组件无法通信）
2.来自不同视图的行为需要变更同一状态

vuex 专门为vue.js设计的状态管理库，以利用vue.js的细粒度数据响应机制来进行高效的状态更新

什么情况下应该使用Vuex?
虽然Vuex可以帮助我们管理共享状态，但也附带了更多的概念和框架，这需要对短期和长期效益进行权衡

如果不打算开发大型单页应用，使用Vuex可能繁琐冗余的
如果项目足够简单，最好不要使用Vuex
*/ 