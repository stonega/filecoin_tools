<template>
  <div
    class="row"
    v-bind:style="{
      justifyContent: jContent || 'start',
      flexDirection: reverse ? 'row-reverse' : 'row'
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "Row",
  props: {
    jContent: String,
    jItems: String,
    reverse: Boolean
  },
};
</script>

<style scoped>
.row {
  margin-top: 1em;
  display: flex;
  justify-items: center;
  flex-wrap: wrap;
}
</style>

