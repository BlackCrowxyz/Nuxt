<template>
  <div class="p-3 mt-1 border rounded text-dark">
    <h6 @click="content(slug)" class="m-0" style="cursor: pointer">{{title}}</h6>
    <span class="small">From {{budget}}$ per person</span>
    <div class="row mx-0 mt-2">
      <img
        v-for="(image, i) in images"
        :key="i"
        :src="image.src"
        :alt="image.alt"
        @click="content(slug)"
        class="p-0 pr-1 col-3 img-fluid"
      />
      <button @click="detailPage(slug)" class="p-0 pr-1 col-3 btn btn-sm btn-dark text-light">. . .</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    budget: Number,
    images: Array,
    slug: String,
  },
  methods: {
    detailPage(slug) {
      this.$router.push("detail/" + slug);
    },
    content(slug) {
      this.$emit("selectedSlug", slug);
    },
  },
};
</script>

<style>
</style>