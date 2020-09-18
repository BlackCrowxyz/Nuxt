<template>
  <div class="p-1 m-5 text-dark">
    <!-- <h6 @click="content(slug)" class="m-0" style="cursor: pointer">{{title}}</h6>
    <span class="small">From {{budget}}$ per person</span>-->
    <div class="d-flex mx-5 px-5 mt-2 justify-content-center">
      <div class="p-3">
        <span class="h7 p-2">{{name}}</span>
        <br />
        <span class="small p-1">{{days}}&nbsp;Days</span>
      </div>
      <div class="p-3" />
      <div class="p-3">
        <span class="mb-3 small">{{thingsToDo}}</span>
        <br />
        <img
          v-for="(image,i) in images"
          :key="i"
          :src="image.src"
          :alt="image.alt"
          class="p-1 col-3 img-fluid"
        />
      </div>
    </div>
    <!-- @click="content(slug)" -->
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    days: Number,
    thingsToDo: String,
    images: Array,
  },
  //   computed: {
  //     firstImages() {
  //       return this.images.splice(3);
  //     },
  //   },
};
</script>

<style>
.circle {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  display: inline-block;
}

.dot {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: white;
  display: inline-block;
  position: absolute;
  left: 50%;
  margin-left: -3px;
  top: 0;
}

.line {
  border-left: 2px solid gray;
  height: 3em;
  position: absolute;
  left: 50%;
  margin-left: -3px;
  top: 0;
}
</style>