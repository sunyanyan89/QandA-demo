<template>
  <div class="score_container">
    <div class="showScore">
      <span class="finalScore">{{score}}&nbsp;分！</span>
      <p>{{scoreTip}}</p>
    </div>
    <div class="btn">
        <span class="btn_style share_btn share"></span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'score',
  created () {
    this.score = this.$route.query.s
  },
  data () {
    return {
      score: '',
      scoreTipsArr:['你说，是不是把知识都还给小学老师了？','还不错，但还需要继续加油哦！','不要嘚瑟还有进步的空间！','智商离爆表只差一步了！','你也太聪明！'],
    }
  },
  computed: {
    scoreTip: function(){
      var num = parseInt(this.score), tip = ''
      if(num <= 20) tip = this.scoreTipsArr[0]
      else if(num <= 40) tip = this.scoreTipsArr[1]
      else if(num <= 60) tip = this.scoreTipsArr[2]
      else if(num <= 80) tip = this.scoreTipsArr[3]
      else if(num <= 100) tip = this.scoreTipsArr[4]
      return tip
    }
  }
}
</script>

<style lang="less">
body {
  background: url(../images/4-1.jpg) no-repeat;
}
</style>


