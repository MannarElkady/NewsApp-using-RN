import {AxiosInstance} from 'axios';

const getData = async (axiosClient: AxiosInstance, url: string) =>
  await axiosClient.get(url);

const postData = async (axiosClient: AxiosInstance, url: string, data: any) =>
  await axiosClient.post(url, data);

export {getData, postData};
