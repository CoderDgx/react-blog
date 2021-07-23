import React from 'react'
import { Icon } from '@ant-design/compatible'
import SvgIcon from '@/components/SvgIcon'

import Href from '@/components/Href'
import MyInfo from '@/views/web/about/MyInfo'
import { FastBackwardFilled } from '@ant-design/icons'

// API_BASE_URL
export const SERVER_URL = 'http://47.100.138.185'
// export const SERVER_URL = 'http://127.0.0.1'
export const API_BASE_URL = SERVER_URL + ':6060'
// export const API_BASE_URL = 'http://127.0.0.1:6060'
// project config
export const HEADER_BLOG_NAME = 'Coder Uaena' // header title 显示的名字

// === sidebar
export const SIDEBAR = {
  avatar: require('@/assets/images/avatar.jpeg'), // 侧边栏头像
  title: 'dlwlrma', // 标题
  subTitle: '码的是热爱，追的是生活~', // 子标题
  // 个人主页
  homepages: {
    github: {
      link: 'https://github.com/CoderDgx',
      icon: <Icon type='github' theme='filled' className='homepage-icon' />
    },
    juejin: {
      link: 'https://juejin.cn/user/817692384432718',
      icon: <SvgIcon type='iconjuejin' className='homepage-icon' />
    }
  },
  friendslink: {
    // lizi: {
    //   link: 'http://blog.liziyang.co/',
    //   img: 'http://blog.liziyang.co/images/pikachu.jpg',
    // },
    // wizchen: {
    //   link: 'http://blog.wizchen.com',
    //   img: 'https://cdn.jsdelivr.net/gh/wizcheu/content1@main/img/header.gif'
    // }
  }
}

// === discuss avatar
export const DISCUSS_AVATAR = SIDEBAR.avatar // 评论框博主头像

/**
 * github config
 */
export const GITHUB = {
  enable: true, // github 第三方授权开关
  client_id: '7341f35ce845e54be6d6', // Setting > Developer setting > OAuth applications => client_id
  url: 'https://github.com/login/oauth/authorize' // 跳转的登录的地址
}

export const ABOUT = {
  avatar: SIDEBAR.avatar,
  describe: SIDEBAR.subTitle,
  discuss: true, // 关于页面是否开启讨论
  renderMyInfo: <MyInfo /> // 我的介绍 自定义组件 => src/views/web/about/MyInfo.jsx
}

// 公告 announcement
export const ANNOUNCEMENT = {
  enable: false, // 是否开启
  content: (
    <>
      个人笔记网站，请访问
      <Href href='https://www.yuque.com/zhongcaidexiaopengyou/kb'> panyunyi's note</Href>
    </>
  )
}
