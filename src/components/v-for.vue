<template>
  <div>
    <h1>v-for以及排序</h1>
    <hr>
    <ul>
      <li v-for="item in sortItem">
        {{item}}
      </li>
    </ul>
    <h1>对象循环输出</h1>
    <hr>
    <ul>
      <li v-for="student in sortStudent">
        {{student.name}} - {{student.age}}
      </li>
    </ul>
    <!-- v-for指令是循环渲染一组data中的数组，
    v-for 指令需要以 item in items 形式的特殊语法，items 是源数据数组并且item是数组元素迭代的别名。-->
  </div>
</template>

<script>
    export default {
        name: "v-for",
      data(){
          return {items:[20,23,18,65,32,19,54,56,41],
            students:[
              {name:'jspang',age:32},
              {name:'Panda',age:30},
              {name:'PanPaN',age:21},
              {name:'King',age:45}
            ]
          }
      },
      computed:{
          sortItem:function(){
            // 这里后面的排序非常重要，常用，要记住
            return this.items.sort(this.sortNumber)
          },
          sortStudent:function(){
            return this.sortByKey(this.students,'age')
          }
      },
      methods:{
        sortNumber:function (a,b) {
          return a-b
        },
        sortByKey:function(array, key){
          return array.sort(function(a,b) {
            var x = a[key];
            var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
          });
        }
      }
    }
</script>

<style scoped>

</style>
