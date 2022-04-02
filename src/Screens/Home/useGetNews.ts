import {useMemo} from 'react';
import {AxiosClient, useGetHandler} from '../../Service';
import {DomainConstants} from '../../Types';

const useGetNews = (
  successCallback?: (data: any) => void,
  failureCallback?: (error: any) => void,
) => {
  let baseURL = DomainConstants.baseURL;
  var client = useMemo(() => {
    let params = {
      domains: DomainConstants.domains,
      apiKey: DomainConstants.apiKey,
    };
    return AxiosClient(baseURL, params);
  }, [baseURL]);
  const [, status, refetch] = useGetHandler(
    DomainConstants.postsURL,
    client,
    successCallback,
    failureCallback,
  );
  return [status, refetch];
};

export default useGetNews;
