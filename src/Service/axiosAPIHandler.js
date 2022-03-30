import {useState, useEffect} from 'react';
import {getData} from './axiosAPIMethods';

const useGetHandler = (apiClient, url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData(apiClient, url)
      .then(response => {
        let data = [{state: 'success'}, ...response.data];
        setData(data);
        setIsLoading(false);
      })
      .catch(reason => {
        let data = [{state: 'failed'}, ...reason];
        setData(data);
        setIsLoading(false);
      });
  }, [apiClient, url]);
  return [data, isLoading];
};

export default useGetHandler;
