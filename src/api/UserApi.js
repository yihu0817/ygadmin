import axiosApi from './base.js';
import Sha256 from "js-sha256";

/**
 * 用户登录接口
 * @param {}} username 
 * @param {*} password 
 */
export const RequestLogin = (username, psw) => {
    let password = Sha256(psw.trim()); //trim()去空格
    return axiosApi({
        url: '/api/login',
        method: 'POST',
        data: { username, password }
    })
}

/**
 * 用户退出
 */
export const RequestLogout = () => {
    return axiosApi({
        url: '/api/logout',
        method: 'get'
    });
}
/**
 * 用户列表
 */
export const RequestUserList = () => {
    return axiosApi({
        url: '/api/list',
        method: 'get'
    })
}

/**
 * 用户列表分页
 */
export const RequestUserListPage = (currentNo) => {
    return axiosApi({
        url: '/api/list_page?pageNo=' + currentNo,
        method: 'get'
    })
}

/**
 * 文件上传
 */
export const RequestUploadHeader = (formdata) => {
    return axiosApi({
        url: '/api/uploadFile',
        method: 'post',
        headers: { 'content-type': 'multipart/form-data' },
        data: formdata
    })
}
/**
 * 添加用户，包括头像
 * @param {*} formdata 
 */
export const RequestUserAdd = (formdata) => {
    return axiosApi({
        url: '/api/add',
        method: 'post',
        headers: { 'content-type': 'multipart/form-data' },
        data: formdata
    })
}

/**
 * 注册
 */
export const RequestRegister = (formdata) => {
    return axiosApi({
        url: '/api/add',
        method: 'post',
        headers: { 'content-type': 'multipart/form-data' },
        data: formdata
    })
}

/**
 * 删除
 */
export const RequestDeleteUser = (uid) => {
    return axiosApi({
        url: '/api/delete?uid=' + uid,
        method: 'get',
    })
}

/**
 * 动态菜单
 */
export const RequestSysMenu = () => {
    return axiosApi.get('/api/sysmenu').then(res => res.data);
}