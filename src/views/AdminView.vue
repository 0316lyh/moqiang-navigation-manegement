<template>
  <div>
    AdminView
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AdminView",
  mounted() {
    this.getAll();
  },
  methods: {
    getAll() {
      axios.get('/website/getTopByLiked/').then((res) => {
        console.log(res.data.data);
      })
    }
  }
}
</script>

<style scoped>

</style>
