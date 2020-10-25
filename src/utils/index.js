import marked from 'marked'
import { COLOR_LIST } from '@/utils/config'
import xss from 'xss'
import { clear, get } from '@/utils/storage'
import * as React from 'react'
import * as ReactMarkdown from 'react-markdown'
import MathJax from '@matejmazur/react-mathjax'
import * as RemarkMathPlugin from 'remark-math'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'

export const MarkdownRender = props => {
  const newProps = {
    ...props,
    plugins: [
      RemarkMathPlugin,
    ],
    renderers: {
      ...props.renderers,
      code: ({language, value}) =>
        <SyntaxHighlighter style={dark} language={language} children={value} />,
      math: props =>
        <MathJax.Node>{props.value}</MathJax.Node>,
      inlineMath: props =>
        <MathJax.Node inline>{props.value}</MathJax.Node>,
    }

  }
  return (
    <MathJax.Context input='tex'>
      <ReactMarkdown {...newProps} allowDangerousHtml />
    </MathJax.Context>
  )
}

// 转化 md 语法为 React Node

export const translateMarkdown = (plainText, isGuardXss = false) => {
  console.log(plainText)
  return (<MarkdownRender source={plainText}/>)
}

// 转化md 为html
export const translateMarkdown2html = (plainText, isGuardXss = false) => {
  console.log(plainText)
  return marked(isGuardXss ? xss(plainText) : plainText, {
    renderer: new marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: true,
    smartypants: true,
    highlight: function(code) {
      /*eslint no-undef: "off"*/
      return hljs.highlightAuto(code).value
    }
  })
}

// 获取 url query 参数
export const decodeQuery = url => {
  const params = {}
  const paramsStr = url.replace(/\.*\?/, '') // a=1&b=2&c=&d=xxx&e
  paramsStr.split('&').forEach(v => {
    const d = v.split('=')
    if (d[1] && d[0]) params[d[0]] = d[1]
  })
  return params
}

// 计算 评论数
export const calcCommentsCount = commentList => {
  let count = commentList.length
  commentList.forEach(item => {
    count += item.replies.length
  })
  return count
}

// 取数组中的随机数
export const randomIndex = arr => Math.floor(Math.random() * arr.length)

/**
 * 对数组进行分组
 * @param {Array} arr - 分组对象
 * @param {Function} f
 * @returns 数组分组后的新数组
 */
export const groupBy = (arr, f) => {
  const groups = {}
  arr.forEach(item => {
    const group = JSON.stringify(f(item))
    groups[group] = groups[group] || []
    groups[group].push(item)
  })
  return Object.keys(groups).map(group => groups[group])
}

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:|http:)/.test(path)
}

// 获取 token
export function getToken() {
  let token = ''
  const userInfo = get('userInfo')

  if (userInfo && userInfo.token) {
    token = 'Bearer ' + userInfo.token
  }

  return token
}

/**
 * 生成随机 ID
 * @param {Number} len - 长度
 */
export function RandomId(len) {
  return Math.random()
    .toString(36)
    .substr(3, len)
}

/**
 * debounce
 */
export function debounce(func, wait) {
  let timer = null
  return function () {
    const context = this
    const args = arguments
    clearTimeout(timer)
    timer = setTimeout(function () {
      func.apply(context, args)
    }, wait)
  }
}

// 生成 color
export function genertorColor(list = [], colorList = COLOR_LIST) {
  const _list = [...list]
  _list.forEach((l, i) => {
    l.color = colorList[i] || colorList[randomIndex(colorList)]
  })
  return _list
}
