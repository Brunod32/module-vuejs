<template>
  <div id="app">
    <AppMenu />
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {
    AppMenu: () => import('@/components/AppMenu'),
  },
};
</script>

<style lang="scss">
  #app {
    display: flex;
    flex: 1;
    flex-direction: row;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
  }
</style>