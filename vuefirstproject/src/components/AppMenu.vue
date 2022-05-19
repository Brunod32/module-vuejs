<template>
  <ul id="nav-menu">
      <li>
        <router-link class="link" to="/">Accueil</router-link>
      </li>
      <li>
        <router-link class="link" to="/list-articles">Articles</router-link>
      </li>
      <li>
        <router-link class="link" to="/search">Recherche</router-link>
      </li>
      <li>
        <router-link class="link" to="/about">About</router-link>
      </li>
    </ul>
</template>
<script>
export default {
  name: 'AppMenu',
};
</script>
<style lang="scss" scoped>
  #nav-menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 10%;
    height: 100%;
    list-style-type: none;

    li {
      margin-top: 0.5rem;
    }

    .link {
      text-decoration: none;
    }
  }
</style>