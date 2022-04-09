import {useState, useEffect} from 'react';
import {getData, cancelSource} from './axiosAPIMethods';
import {AxiosInstance} from 'axios';

// this layer for any error handling domain mapping
const useGetHandler = (
  url: string,
  apiClient: AxiosInstance,
  successCallback?: (data: any) => void,
  failureCallback?: (error: any) => void,
) => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('loading');
  const [refetchCounter, setRefetchCounter] = useState(0);

  const refetch = () => {
    setRefetchCounter(counter => counter + 1);
  };

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetchCounter, apiClient, url]);

  return [data, status, refetch];
};

export default useGetHandler;
