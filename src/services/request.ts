import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios'
import {message} from "antd";

// axios.defaults.withCredentials = true;

const successHandler = (resp: AxiosResponse) => {
  const {data} = resp;
  if (data.status === 0) {
    return data.data;
  }
  message.error(data.message);
  throw new Error(data.message);
};

const errorHandler = (error: AxiosError) => {
  if (error.response) {
    const {data} = error.response;
    if (data && data.message) {
      message.error(data.message);
    } else {
      message.error("Server Error.")
    }
  }
  throw error
}

const horizonApi = axios.create({
  baseURL: 'http://123.57.66.63:8080/api/v1',
  // baseURL: 'http://0.0.0.0:8080/api/v1',
  timeout: 30 * 1000,
})

export default function request(config: AxiosRequestConfig) {
  const resolved = {
    successHandler,
    errorHandler,
  }
  return horizonApi(config).then(resolved.successHandler, resolved.errorHandler);
}

request.get = <T = any>(url: string, params?: any): Promise<T> => {
  return request({method: 'get', url, params});
};

request.post = <T = any>(url: string, data: any): Promise<T> => {
  return request({method: 'post', url, data});
};