import axios from 'axios';

export const BASEURL = 'http://www.warmtel.com:8088';   //生产环境
// export const BASEURL = 'http://192.168.0.100:8088';  //测试环境
const axiosApi = axios.create({
  baseURL: BASEURL,   
  timeout: 5000 //超时间
})

/**
 * 请求拦截处理
 */
axiosApi.interceptors.request.use(config => {
  //拦截处理
  console.log('请求拦截处理>>>>');
  return config;
}, err => {
  return Promise.reject(err);
});

/**
 * 响应拦截处理
 */
axiosApi.interceptors.response.use(response => {
  return response;
}, err => {
  return Promise.reject(err);
});

export default axiosApi;
