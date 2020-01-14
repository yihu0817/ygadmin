import axiosApi from './base.js';

export const RequestManagerList = () =>{
    return axiosApi({
        url:'/api/manager/list',
        method:'get',
    })
}