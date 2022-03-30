import {useState, useEffect} from 'react';
import {getData} from './axiosAPIMethods';
import {AxiosInstance} from 'axios';

const useGetHandler = (apiClient: AxiosInstance, url: string) => {
  const [data, setData] = useState([{state: 'undefined'}]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let responseData;
    getData(apiClient, url)
      .then(response => {
        responseData = [{state: 'success'}, ...response.data];
        setData(responseData);
        setIsLoading(false);
      })
      .catch(reason => {
        responseData = [{state: 'failed'}, ...reason];
        setData(responseData);
        setIsLoading(false);
      });
  }, [apiClient, url]);
  return [data, isLoading];
};

export default useGetHandler;
