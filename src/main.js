// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'

import '@/icons' // icon
Vue.use(ElementUI, {
  locale
})

// language:"zh-cn",
// //自定义语言
// i18n{
//     //specify your language here
//     "zh-cn":{
//       "align": "对齐方式",
//       "image": "图片",
//       "list": "列表",
//       "link": "链接",
//       "unlink": "去除链接",
//       "table": "表格",
//       "font": "文字",
//       "full screen": "全屏",
//       "text": "排版",
//       "eraser": "格式清除",
//       "info": "关于",
//       "color": "颜色",
//       "please enter a url": "请输入地址",
//       "create link": "创建链接",
//       "bold": "加粗",
//       "italic": "倾斜",
//       "underline": "下划线",
//       "strike through": "删除线",
//       "subscript": "上标",
//       "superscript": "下标",
//       "heading": "标题",
//       "font name": "字体",
//       "font size": "文字大小",
//       "left justify": "左对齐",
//       "center justify": "居中",
//       "right justify": "右对齐",
//       "ordered list": "有序列表",
//       "unordered list": "无序列表",
//       "fore color": "前景色",
//       "background color": "背景色",
//       "row count": "行数",
//       "column count": "列数",
//       "save": "确定",
//       "upload": "上传",
//       "progress": "进度",
//       "unknown": "未知",
//       "please wait": "请稍等",
//       "error": "错误",
//       "abort": "中断",
//       "reset": "重置"
//     }
//   },


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
