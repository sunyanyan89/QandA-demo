<template>
  <div class="score_container">
    <div class="showScore">
      <div class="info">
        <p class='time'>共计耗时{{allTime}}秒</p>
        <span class="finalScore">{{getScore}}&nbsp;分！</span>
        <p class='tip'>{{getTip}}</p>
      </div> 
    </div>
    <div class="btn">
        <span class="btn_style share_btn share"></span>
      </div>
  </div>
</template>

<script>
import { mapState, mapGetters  } from 'vuex'
export default {
  name: 'score',
  computed: {
    ...mapState([ 'allTime' ]),
    ...mapGetters([ 'getScore', 'getTip' ]),
  }
}
</script>

<style lang="less">

</style>


