import axios from 'axios';
const AxiosClient = (baseURL: string, params: {} = {}, timeout = 30000) => {
  return axios.create({
    baseURL: baseURL,
    timeout: timeout,
    params: {
      ...params,
    },
  });
};

export default AxiosClient;
