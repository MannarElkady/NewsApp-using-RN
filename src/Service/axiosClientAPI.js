import axios from 'axios';
const AxiosClient = baseURL => {
  return axios.create({
    baseURL: baseURL,
    timeout: 30000,
  });
};

export default AxiosClient;
