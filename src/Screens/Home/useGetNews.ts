import {useMemo} from 'react';
import {setNews} from '../../Redux/Slicers/NewsListReducer';
import {useAppDispatch} from '../../Redux/store';
import {AxiosClient, useGetHandler} from '../../Service';
import {DomainConstants} from '../../Types';

const useGetNews = () => {
  let dispatch = useAppDispatch();
  //save news data to redux
  const successCallback = (data: any) => {
    dispatch(setNews(data.articles));
  };

  let baseURL = DomainConstants.baseURL;
  var client = useMemo(() => {
    let params = {
      domains: DomainConstants.domains,
      apiKey: DomainConstants.apiKey,
    };
    return AxiosClient(baseURL, params);
  }, [baseURL]);
  const [, status] = useGetHandler(
    DomainConstants.postsURL,
    client,
    successCallback,
  );
  return [status];
};

export default useGetNews;
