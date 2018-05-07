<template>
  <div>
    <Top>题目{{itemNum+1}}</Top>    
    <div class="content item_container">
      <div class="logo_style item_logo">
        <div class="item_list" v-if="items.length > 0">
          <header class="item_title">{{items[itemNum].topic_name}}</header>
          <ul>
            <li v-for="(answer, index) in items[itemNum].topic_answer" :class="{active: index === choosedId}" @click="choosedId = index">
              <span class="opt_prefix">{{chooseType[index]}}</span>
              <span class="opt_detail">{{answer}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="btn">
        <span class="btn_style next_btn" v-if="itemNum+1 < items.length" @click="submit"></span>
        <span class="btn_style submit_btn" v-else @click="submitAnswer"></span>
      </div>
    </div>
  </div>
</template>

<script>
import Top from '@/components/top.vue'

export default {
  name: 'item',
  components: { Top },
  data () {
    return {
      itemNum: 0, // 当前第几题
      choosedId: '', // 选中答案id
      items: [{
        "topic_id": 20,
        "topic_name": "题目一",
        "answer_id": 1,
        "topic_answer": ["答案aaaa", "正确答案", "答案cccc","答案dddd"]
      }, {
        "topic_id": 21,
        "topic_name": "题目二",
        "answer_id": 2,        
        "topic_answer": ["答案A", "答案B", "正确答案", "答案D"]
      }, {
        "topic_id": 21,
        "topic_name": "题目三",
        "answer_id": 3,        
        "topic_answer": ["测试A", "BBBBBB", "CCCCCC", "正确答案"]
      }, {
        "topic_id": 21,
        "topic_name": "题目四",
        "answer_id": 0,
        "topic_answer": ["正确答案", "A是错的", "D是对的", "C说的不对"]
      }, {
        "topic_id": 21,
        "topic_name": "题目五",
        "answer_id": 1,
        "topic_answer": ["错误答案", "正确答案", "错误答案", "错误答案"]
      }],
      chooseType: ['A', 'B', 'C', 'D'],
      answers: [],
    }
  },
  methods: {
    submit () {
      if(this.choosedId === '') {
        alert('请选择答案')
        return
      }
      this.answers.push(this.choosedId)
      this.itemNum++
      this.choosedId = ''
    },
    submitAnswer () {
      if(this.choosedId === '') {
        alert('请选择答案')
        return
      }
      this.answers.push(this.choosedId)
      let total = 0
      this.answers.forEach((item, index) => {
        if(item === this.items[index].answer_id) {
          total += 20
        }
      })
      this.$router.push('/score?s='+total)
    }
  },
}
</script>

<style lang="less" scoped>
</style>


