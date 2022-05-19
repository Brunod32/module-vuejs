import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

const http = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com/',
});

export default http;