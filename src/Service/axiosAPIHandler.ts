import {useState, useEffect} from 'react';
import {getData} from './axiosAPIMethods';
import {AxiosInstance} from 'axios';

const useGetHandler = (url: string, apiClient: AxiosInstance) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getStatus = (status: Number) =>
    status === 200 ? 'success' : 'failure';

  useEffect(() => {
    getData(apiClient, url)
      .then(response => {
        const status = getStatus(response.status);
        const responseData = Object.assign({status: status}, response.data);
        setData(responseData);
        setIsLoading(false);
      })
      .catch(reason => {
        const responseData = Object.assign({status: 'failure'}, reason);
        setData(responseData);
        setIsLoading(false);
      });
  }, [apiClient, url]);
  return [data, isLoading];
};

export default useGetHandler;
