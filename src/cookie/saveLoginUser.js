import cookie from 'js-cookie'


let USER_KEY = "SAVE-LOGIN-USER"
/**
 * cookie存储登录用户信息
 * @param {*} loginUser 
 */
export const sava_LoginUser = (loginUser) => {
    cookie.set(USER_KEY, loginUser);
}
/**
 * 获取cookie存储用户信息
 */
export const get_LoginUser = () => {
    // console.log(">>" + typeof (cookie.get(USER_KEY)));
    return cookie.get(USER_KEY) != undefined
        ? JSON.parse(cookie.get(USER_KEY))
        : null;
}
/**
 * 清除cookie存储的用户登录信息
 */
export const clear_LoginUser = () => {
    cookie.remove(USER_KEY);
}