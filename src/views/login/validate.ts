/**
 * @description: 验证表单中的密码
 * @param {any} rule 表单验证规则
 * @param {any} value 表单输入项
 * @param {any} callback 表单验证后的回调函数
 */
export function validatePassword(rule: any, value: any, callback: any) {
  if (!value) {
    return callback(new Error('请输入密码'))
  } else if (value.length < 5 || value.length > 16) {
    return callback(new Error('请输入5-16位密码'))
  } else {
    return callback()
  }
}
