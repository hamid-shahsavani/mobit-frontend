import axios from 'axios';

axios.defaults.baseURL = 'https://mobit.iran.liara.run/api';

const api = {
  get: axios.get,
  post: axios.post,
};

export default api;
