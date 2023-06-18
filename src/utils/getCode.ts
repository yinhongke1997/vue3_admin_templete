/*
 * @Author: 殷红科 yhk1392293436@163.com
 * @Date: 2023-05-16 16:17:59
 * @LastEditors: 殷红科 yhk1392293436@163.com
 * @LastEditTime: 2023-06-15 23:07:56
 * @FilePath: \任务1：TypeScript代码资料d:\Downloads\vue3-element-admin\vue3_admin\src\utils\getCode.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import md5 from 'md5'

export function getTestICode() {
  let num: number = Date.now()
  const now = parseInt((num / 1000).toString())
  const code = now + 'LGD_Sunday-1991-12-30'
  return {
    icode: md5(code),
    time: now
  }
}
