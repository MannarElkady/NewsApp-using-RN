import axios from 'axios';
const AxiosClient = (baseURL: string, params: {} = {}) => {
  return axios.create({
    baseURL: baseURL,
    timeout: 30000,
    params: {
      ...params,
    },
  });
};

export default AxiosClient;
