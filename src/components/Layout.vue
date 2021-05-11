<template>
  <div class="increasing" @click="increment()">
    increasing
  </div>
</template>

<script>
export default {
  name: "Layout",
  props: {
    methods: {
      increment() {
        this.$store.commit("setCount");
        console.log(this.$store.state.count);
      },
    },
  },
};
</script>
<style scoped></style>
