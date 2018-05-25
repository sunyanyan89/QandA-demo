<template>
  <div>
    <Top>题目{{currId}}</Top>    
    <div class="content item_container">
      <div class="logo_style item_logo">
        <div class="item_list">
          <header class="item_title">{{getCurrTopic.topic_name}}</header>
          <ul>
            <li v-for="(answer, index) in getCurrTopic.topic_answer" :class="{active: index === choosedId}" @click="choosedId = index">
              <span class="opt_prefix">{{chooseType[index]}}</span>
              <span class="opt_detail">{{answer}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="btn">
        <span class="btn_style next_btn" v-if="currId < getTopicLength" @click="nextItem"></span>
        <span class="btn_style submit_btn" v-else @click="submitAnswer"></span>
      </div>
    </div>
  </div>
</template>

<script>
import Top from '@/components/top.vue'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'item',
  components: { Top },
  created() {
    this.$store.commit('RECORD_TIME')
  },
  data () {
    return {
      choosedId: '', // 选中答案id
      chooseType: ['A', 'B', 'C', 'D'],
    }
  },
  computed: {
    ...mapState([ 'currId', 'timer' ]),
    ...mapGetters([ 'getCurrTopic', 'getTopicLength' ]),
  },
  methods: {
    ...mapActions([
      'submit'
    ]),
    nextItem () {
      if(this.choosedId === '') {
        alert('请选择答案')
        return
      }
      // 触发进入下一题
      // this.$store.commit('RECORD_ANSWER', this.choosedId)
      // this.$store.commit('NEXT_TOPIC')
      this.submit(this.choosedId)
      this.choosedId = ''
    },
    submitAnswer () {
      if(this.choosedId === '') {
        alert('请选择答案')
        return
      }
      // this.$store.commit('RECORD_ANSWER', this.choosedId)
      this.submit(this.choosedId)
      clearInterval(this.timer)
      this.$router.push('/score')
    }
  },
}
</script>

<style lang="less" scoped>
</style>


