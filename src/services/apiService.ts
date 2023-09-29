import TOASTMSG from '@/constants/toastMessages';
import toast from '@/utils/toast';
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
      toast(TOASTMSG.pleaseCheckNetworkConnection);
    } else {
      toast(TOASTMSG.sorryUnexpectedError);
    }
    return Promise.reject(error);
  },
);

export default api;
