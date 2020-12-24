<template>
  <div id="themegrd">
    <div id="blank" class="background_img">
      <div id="blank_div" class=""></div>
      <div
        id="blank_text"
        class="text "
        style="display:none; visibility: hidden"
      >
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "themegrd"
};
</script>

<style scoped>
#blank_div {
  width: 100%;
  height: 500px;
  background: inherit;
  background-color: rgba(36, 41, 46, 1);
  border-radius: 0px;
}

#blank {
  top: 65px;
  width: 100%;
  height: 500px;
  opacity: 0.86;
}
</style>