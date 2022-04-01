import {useMemo} from 'react';
import {AxiosClient, useGetHandler} from '../../Service';
import {DomainConstants} from '../../Types';

const useGetNews = () => {
  let baseURL = DomainConstants.baseURL;
  var client = useMemo(() => {
    let params = {
      domains: 'wsj.com',
      apiKey: 'ee54174d1e7247639fd4ef02e93634bd',
    };
    return AxiosClient(baseURL, params);
  }, [baseURL]);
  const [data, isLoading] = useGetHandler(DomainConstants.postsURL, client);
  return [data, isLoading];
};

export default useGetNews;
