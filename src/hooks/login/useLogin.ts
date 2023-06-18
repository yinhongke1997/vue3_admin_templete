import type { IUserInfo } from '@/views/login/index'
import { reactive, ref, computed } from 'vue'
import { validatePassword } from '@/views/login/validate'
export function useLogin() {
  // 用户的登录数据源
  const loginForm = reactive<IUserInfo>({
    username: 'super-admin',
    password: '123456'
  })
  //用户信息验证规则
  const loginRules = reactive({
    username: [
      {
        required: true,
        trigger: 'blur',
        message: '用户名为必填项'
      }
    ],
    password: [
      {
        required: true,
        trigger: 'blur',
        validator: validatePassword
      }
    ]
  })
  const passwordIcon = ref(false)
  const changePasswrodIcon = () => {
    passwordIcon.value = !passwordIcon.value
  }
  const watchIcon = computed(() => (passwordIcon.value ? 'text' : 'password'))
  return {
    loginForm,
    loginRules,
    passwordIcon,
    changePasswrodIcon,
    watchIcon
  }
}
