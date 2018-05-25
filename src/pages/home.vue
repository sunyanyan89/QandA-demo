<template>
  <div>
    <Top>第一周</Top>   
    <div class="content home_container">
      <div class='pra'>
        <!-- <button>{{home}}--{{count}}--{{title}}--{{countPlusLocalState}}--{{doneTodosCount}}</button><br> -->
        <!-- <button @click="$store.commit('SWITCH_SHOW')">show:{{show}}</button><br> -->
        <!-- <button @click='toAdd'>add</button> -->
      </div>
      
      <div class="logo_style home_logo"></div>
      <div class="btn">
        <router-link to="/item" class="btn_style home_btn"></router-link>
      </div>
    </div>     
  </div>
</template>

<script>
import Top from '@/components/top.vue'
// 当一个组件需要获取多个状态时，将这些状态都声明为计算属性会有些重复和冗余。
// 为了解决这个问题，我们可以使用 mapState 辅助函数帮助我们生成计算属性
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'home',
  components: { Top },
  // 当映射的计算属性名称与state的子节点名称相同时，我们也可以给 mapState 传一个字符串数组
  // computed: mapState([ 'count', 'title', 'currentId' ]),
  computed: {
    home () {
      return this.localCount *10
    },
    // 使用对象展开运算符将此对象混入到外部对象中
    ...mapState({
      count: state => state.count,    
      title: 'title',
      show: 'show',
      // 为了能够使用 this 获取局部状态 必须使用常规函数
      countPlusLocalState(state) {
        return state.count + this.localCount
      },
      countPlus(state) {
        return state.currentId + this.localCount
      }
    }),
    // 将store中的getter映射到局部计算属性
    ...mapGetters([ 
      'doneTodosCount',
      'getTodoById'
     ]),
  },
  // computed: {
  //   // 从store实例中读取状态最简单的方法就是在计算属性中返回某个状态
  //   count() {
  //     return this.$store.state.count
  //   }
  // },
  methods: {
    toAdd() {
      console.log('fsd')
      // 通过提交mutation的方式 ，而非直接改变 store.state.count 这样可以更明确的追踪到状态的变化
      // 可以向 store.commit 传入额外的参数 即 mutation 的载荷（payload）
      // 在大多数情况下，载荷应该是一个对象，这样可以包含多个字段并且记录的mutation会更易读
      this.$store.commit('ADD', { 
        step: 2,
        extra: 'hahah' 
      })
    }
  },
  data() {
    return {
      localCount: 3,
    } 
  } 
}
</script>

<style lang="less" scoped>
.content {
  padding: .5rem;
  .pra {
    button {
      width: 2rem;
      line-height: .5rem;
      margin-bottom: .2rem;
    }
  }
  .btn {
    margin: .2rem;
  }
}
</style>


