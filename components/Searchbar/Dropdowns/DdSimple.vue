<template>
  <div class="dropdown">
    <button class="btn btn-sm btn-light" type="button" data-toggle="dropdown">ALL weeks</button>
    <div class="dropdown-menu float-left">
      <label class="dropdown-item checkbox-inline small p-0" @click.stop>
        <input class="m-2" type="checkbox" />Option 1
      </label>
      <label class="dropdown-item checkbox-inline small p-0" @click.stop>
        <input class="m-2" type="checkbox" value />Option 2
      </label>
      <label class="dropdown-item checkbox-inline small p-0" @click.stop>
        <input class="m-2" type="checkbox" value />Option 3
      </label>
      <div class="text-right p-2">
        <button class="btn btn-sm btn-primary" type="button">apply</button>
        <button class="btn btn-sm btn-secondary" type="button">cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>