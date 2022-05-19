<template>
  <div id="article-container">
    <p>Article n°{{article.id}} : {{article.title}}</p>
    <div id="delete-container">
      <button @click="deleteArticle(article.id)">Supprimer l'article</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppArticleElement',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteArticle: function (articleId) {
      this.$store.dispatch('article/delete', articleId);
    }
  }
}
</script>
<style lang="scss" scoped>
  #article-container {
    display: flex;
    flex-direction: row;
    border-bottom: 2px solid ;
    border-bottom-color: lightslategray;
    align-items: flex-start;
    justify-content: flex-start;
  }

  #delete-container {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
  }
</style>