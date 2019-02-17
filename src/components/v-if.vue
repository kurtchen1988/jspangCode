<template>
  <div>
<h1>v-if 判断是否加载</h1>
  <hr>
  <div>
    <div v-if="isLogin">已经登录</div>
    <div v-else>并未登录</div>
    <br>
    <div v-show="isLogin">v-show加载出来的</div>
    <br>
    <!-- v-if 和v-show的区别：
    v-if： 判断是否加载，可以减轻服务器的压力，在需要时加载。
    v-show：调整css dispaly属性，可以使客户端操作更加流畅。-->
    <button @click="changeLogin">登录</button>
  </div>
  </div>
</template>

<script>
    export default {
        name: "v-if",
      data(){
          return {isLogin:false,
          }
      },
      methods:{
          changeLogin:function(){
            if (this.isLogin===false){
              this.isLogin = true;
            } else{
              this.isLogin = false;
            }
          }
      }
    }
</script>

<style scoped>

</style>
