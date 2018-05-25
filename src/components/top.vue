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
  right: -.5rem;
  height: 1.5rem;
  width: 2rem;
  background: url('../images/WechatIMG2.png') no-repeat;
  background-size: 50% 100%;
  span {
    position: relative;
    top: 1.1rem;
    left: -.5rem;
    color: #d63706;
  }
}
</style>


