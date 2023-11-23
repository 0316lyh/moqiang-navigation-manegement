<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$router.push('/admin');
  }
}
</script>

<style>

</style>
