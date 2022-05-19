import articleService from '../services/article.services';

const state = {
  articles: []
};

const getters = {
  getArticles() {
    return state.articles;
  }
};

const mutations = {
  delete(state, id) {
    const index = state.articles.findIndex((article) => article.id === id);

    if (index !== -1) {
      state.articles.splice(index, 1);
    }
  },
  create(state, article) {
    article = JSON.parse(Object.keys(article)[0]);
    article.id = state.articles[state.articles.length - 1].id + 1;
    state.articles.push(article);
  },
  getAll(state, articles) {
    state.articles = articles;
  },
};

const actions = {
  delete(context, articleId) {
    return articleService.deleteArticle(articleId)
      .then(() => {
        context.commit('delete', articleId);
      })
      .catch(() => 'Une erreur est survenue');
  },
  create(context, article) {
    return articleService.create(article)
      .then((response) => {
        context.commit('create', response.data);
      })
      .catch(() => 'Une erreur est survenue');
  },
  findAll(context) {
    return articleService.findAll()
      .then((response) => {
        context.commit('getAll', response.data);
      })
      .catch(() => 'Une erreur est survenue');
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};