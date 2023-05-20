import TOASTMSG from '@/constants/global/toastMessages';
import toast from '@/functions/global/toast';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mobit.iran.liara.run/api',
});

// add slash to end of URL
api.interceptors.request.use((config: any) => {
  config.url = `${config.url}/`;
  return config;
});

// show toast after request connection fail
api.interceptors.response.use(
  (response: any) => response,
  (error: any) => {
    if (!error.response) {
      toast(TOASTMSG.routes.global.pleaseCheckNetworkConnection);
    } else {
      toast(TOASTMSG.routes.global.sorryUnexpectedError);
    }
    return Promise.reject(error);
  },
);

export default api;
