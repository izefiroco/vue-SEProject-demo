<template>
  <div id="three" class="down">
    <div class="left">
      <div class="leftup">
        hhh
      </div>
      <div class="leftdown">
        hhh
      </div>
    </div>
    <div class="right">
      <ranking></ranking>
    </div>
  </div>
</template>

<script>
import ranking from "../../components/home/ranking.vue";
// import daypractice from "../../components/home/daypractice.vue";
// import recomdroom from "../../components/home/recomdroom.vue";

export default {
  el: "#three",
  components: {
    ranking
    // daypractice,
    // recomdroom
  }
};
</script>

<style scope>
.left {
  margin: 2%;
  float: left;
  width: 60%;
  height: 1200px;
  background-color: yellow;
}
.leftup {
  margin: 2%;
  width: 96%;
  height: 46%;
  background-color: blue;
}
.leftdown {
  margin: 2%;
  width: 96%;
  height: 46%;
  background-color: green;
}
.right {
  margin: 2%;
  float: left;
  width: 32%;
  height: 1200px;
  background-color: red;
}
</style>

