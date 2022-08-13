<template>
  <div id="app">
    <h1>state</h1>
    <div>
      Name: {{ name }}
      <button @click="changeName">edit</button>
      <button @click="resetName">reset</button>
    </div>
    <div>Age: {{ age }}</div>

    <h1>getter</h1>
    <div>nameWithAge: {{ nameWithAge }}</div>

    <h1>action</h1>
    <div>
      acitonState: {{ acitonState }}
      <button @click="changeActionValue">add</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      name: (state) => state.name,
    }),
    ...mapState(["age", "acitonState"]),
    ...mapGetters({
      nameWithAge: "nameWithAge",
    }),
  },
  mounted() {
    console.log("this.$store:", this.$store);
  },
  methods: {
    ...mapMutations(["setName"]),
    ...mapActions(["addValue"]),
    changeName() {
      this.setName("wjj2");
    },
    resetName() {
      // this.$store.commit("setName", "wjj");
      this.$store.commit("setName", "wjj");
    },
    changeActionValue() {
      this.addValue();
    },
  },
};
</script>

<style lang="less"></style>
