<template>
  <div class="home">
    <div class="bg-header header d-flex ai-center">
      <img class="ml-5" alt="Vue logo" src="../../assets/logo.png" @click="goHome"/>
      <input class="searchinput ml-4 mr-2 text-white" />
      <div
        class="choice text-white d-flex jc-center fs-l"
        v-for="item in headerData"
        :key="item.index"
        @click="onClick(item)"
      >
        {{ item.title }}
      </div>
    </div>

    <router-view />
    <div class="down bg-header d-flex ai-center text-white">
      <div class="fs-l ml-5">
        加入我们！一起交流，一起学习，思维碰撞，去找到一些有趣的东西！
      </div>
      <div class="fs-m" style="margin-left:400px;">
        联系我们：+86 13588347013
      </div>
      <div class="fs-m" style="margin-left:100px;">
0        邮箱：31801324@stu.zucc.edu.cn
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerData: [
        {
          code: 1,
          title: "比赛",
          path:"contest",
        },
        {
          code: 2,
          title: "排位",
          path:"ranking",
        },
        {
          code: 3,
          title: "悬赏",
          path:"reward",
        },
        {
          code: 4,
          title: "练习",
          path:"practice",
        }
      ]
    };
  },
  methods:{
    onClick(item){
      this.$router.push(item.path)
    },
    goHome(){
      this.$router.push("index")
    }
  }
};
</script>

<style scoped >
.header {
  height: 65px;
  width: 100%;
}
img {
  width: 26px;
  height: 26px;
}
.choice {
  width: 70px;
}
.searchinput {
  border-style: solid;
  border-color: rgb(153, 153, 153);
  border-width: 1px;
  border-radius: 5px;
  height: 20px;
  background: rgba(36, 41, 46, 0.9);
}
.down {
  height: 86px;
  width: 100%;
}
</style>
