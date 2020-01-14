import axiosApi from './base.js';

/**
 * 日志列表
 * @param {}} username 
 * @param {*} password 
 */
export const RequestLogTestList = () =>{
    return axiosApi({
        url:'/api/log',
        method: 'post',
     
    })
}
