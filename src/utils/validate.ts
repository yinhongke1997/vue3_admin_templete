/**
 * @description: 判断字符串是否以https/mailto:/tel: 开头
 * @param {string} path
 * @return {Boolean}
 */
export function isExternal(path: string): Boolean {
  return /^(https?:|mailto:|tel:)/.test(path)
}
