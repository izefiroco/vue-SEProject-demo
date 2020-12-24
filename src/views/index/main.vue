<template>
  <div id="homepage">
    <themeground></themeground>
    <carousel></carousel>
    <downthree></downthree>
  </div>
</template>

<script>
import themeground from '../../components/home/themeground.vue'
import carousel from "../../components/home/carousel.vue"
import downthree from "../../components/home/downthree.vue";

export default {
  el: "#homepage",
  components: {
    carousel,
    themeground,
    downthree
  }
};
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

