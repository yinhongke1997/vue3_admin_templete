<template>
  <div @click="btn">登录页</div>
</template>
<script setup>
import { login } from '@/api/user/login'
import md5 from 'md5'
const btn = async () => {
  const res = await login({
    username: 'admin',
    password: md5('123456')
  })
  console.log(res)
}
</script>
<style lang="scss" scoped></style>
