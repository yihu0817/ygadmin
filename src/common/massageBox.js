import { Message } from 'element-ui';
/**
 *  消息提示框
  */
export const showMassage = (content, type = "error") => {
    Message({
        showClose: true,
        type: type,
        message: content,
        duration: 1000
    });
}