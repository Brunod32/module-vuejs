<template>
  <div>
    <h1>Listes des articles</h1>
    <button @click="createArticle()">+</button>
    <ul>
      <AppArticleElement v-for="article in articles" :key="article.id" :article="article" />
    </ul>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ListArticlesView',
  data() {
    return {
      newArticle: {
        title: 'Mon premier article',
        body: `Cet article est le premier d'une longue série...`,
        userId: 1
      }
    }
  },
  components: {
    AppArticleElement: () => import('@/components/AppArticleElement'),
  },
  computed: {
    ...mapGetters({
      articles: 'article/getArticles',
    }),
  },
  watch: {
    '$route.path': {
      handler() {
        this.findAll();
      },
      immediate: true,
    },
  },
  methods: {
    createArticle: function() {
      this.create(this.newArticle);
    },
    ...mapActions({
      findAll: 'article/findAll',
      create: 'article/create'
    }),
  },
};
</script>
<style lang="scss" scoped>
  div {
    width: 100%;
    background-color: lightgreen;
  }
</style>