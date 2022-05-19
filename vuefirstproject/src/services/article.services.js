import http from '../helpers/http';

const findAll = () => {
  return http.get('/posts/');
};

const create = (article) => http.post('/posts/', JSON.stringify(article));

const deleteArticle = (articleId) => http.delete(`/posts/${articleId}`);

const articleService = {
  findAll,
  create,
  deleteArticle,
};

export default articleService;