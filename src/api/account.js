import Vue from 'vue'
// import { encrypt } from './utils'

export default {
  // 登录
  Login (body, op = {}) {
    return Vue.$api.xHttp.post(`/Auth/Login`, body, op)
  },
  // 获取图形验证码地址
  getVerifyImageUrl (uid) {
    return Vue.$api.xHttp.get(`/auth/login?ImgCodeToken=${uid}`, { load: false })
  },
  // 获取导航列表
  QueryUserMenus (op = {}) {
    return Vue.$api.xHttp.get(`/Platform/Menu/QueryUserMenus`, op)
  }
}
