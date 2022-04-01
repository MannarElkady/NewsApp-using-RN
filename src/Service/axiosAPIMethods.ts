import axios, {
  AxiosInstance,
  CancelTokenSource,
  CancelTokenStatic,
} from 'axios';

let CancelToken: CancelTokenStatic;
var cancelSource: CancelTokenSource;
const getData = async (axiosClient: AxiosInstance, url: string) => {
  CancelToken = axios.CancelToken;
  cancelSource = CancelToken.source();
  return await axiosClient.get(url, {cancelToken: cancelSource.token});
};

const postData = async (axiosClient: AxiosInstance, url: string, data: any) => {
  CancelToken = axios.CancelToken;
  cancelSource = CancelToken.source();
  return await axiosClient.post(url, data, {cancelToken: cancelSource.token});
};

export {getData, postData, cancelSource};
