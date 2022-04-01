import {useState, useEffect} from 'react';
import {getData, cancelSource} from './axiosAPIMethods';
import {AxiosInstance} from 'axios';

const useGetHandler = (
  url: string,
  apiClient: AxiosInstance,
  successCallback?: (data: any) => void,
  failureCallback?: (error: any) => void,
) => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    getData(apiClient, url)
      .then(response => {
        let responseData = response.data;
        setData(responseData);
        setStatus('success');
        successCallback?.(responseData);
      })
      .catch(reason => {
        setData(reason?.response?.data || reason);
        setStatus('failed');
        failureCallback?.(reason);
      });

    return () => {
      cancelSource.cancel();
    };
  }, [apiClient, url]);
  return [data, status];
};

export default useGetHandler;
