<template>
  <div>
    <Top>第一周</Top>   
    <div class="content home_container">
      <div class="logo_style home_logo"></div>
      <div class="btn">
        <router-link to="/item" class="btn_style home_btn"></router-link>
      </div>
    </div>     
  </div>
</template>

<script>
import Top from '@/components/top.vue'

export default {
  name: 'home',
  components: { Top }    
}
</script>

<style lang="less" scoped>

</style>


