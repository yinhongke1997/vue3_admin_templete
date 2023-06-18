import { ElLoading } from 'element-plus'

export const loadingStart = () => {
  ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)'
  })
}
export const loadingEnd = () => {
  ElLoading.service().close()
}
