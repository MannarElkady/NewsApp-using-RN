import axios from 'axios';
const AxiosClient = (baseURL: string) => {
  return axios.create({
    baseURL: baseURL,
    timeout: 30000,
  });
};

export default AxiosClient;
