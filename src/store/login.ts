import { defineStore } from 'pinia'
import { TOKEN } from '@/constant/index'
import { setItem, getItem } from '@/utils/storage'
export const useUserLogin = defineStore('userId', {
  state: () => {
    return {
      token: getItem(TOKEN) || ''
    }
  },
  actions: {
    setToken(token: string): void {
      this.token = token
      setItem(TOKEN, token)
    }
  }
})
