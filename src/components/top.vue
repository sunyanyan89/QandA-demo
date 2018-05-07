<template>
  <div class="top-tip">
      <span><slot></slot></span>
  </div>
</template>
<script>
export default {
  
}
</script>0
<style lang="less">
.top-tip {
  position: absolute;
  top: 0;
  right: 3rem;
  height: 12rem;
  width: 6rem;
  background: url('../images/WechatIMG2.png') no-repeat;
  background-size: 100px 170px;
  span {
    position: absolute;
    top: 8rem;
    left: 1.8rem;
    color: #d63706;
  }
}
</style>


