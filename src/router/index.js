import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/login.vue'
import Layout from '@/pages/layout/layout.vue'
import homePage from '@/pages/homepage/homepage.vue'
import userInfo from '@/pages/user/userinfo.vue'
import shopInfo from '@/pages/shop/shopinfo.vue'
import addShop from '@/pages/shop/addshop.vue'
import editShop from '@/pages/shop/editshop.vue'


Vue.use(Router)

export default new Router({
  routes: [
	{
		path:'/login',
		component:Login,
		hidden:true
	},
	{
		path: '',
		component: Layout,
		redirect:'/homepage',
		children:[{
			path: 'homepage',
			name: '首页',
			component:homePage,
			meta: {
				title:'首页',
				icon: 'home'
				}
			}]
	},
	{
		path:'/user',
		component: Layout,
		name: 'user',
		meta: {
			title: '用户管理',
			icon: 'user'
		},
		children: [{
			path: 'userinfo',
			name: 'userinfo',
			component: userInfo,
			meta: {
				title: '用户列表',
				icon: 'user'
			}
		}]
	},
	{
		path: '/shop',
		component: Layout,
		name: 'shop',
		meta: {
			title: '店铺管理',
			icon: 'store'
		},
		children: [{
			path: 'shopinfo',
			name: 'shopinfo',
			component: shopInfo,
			meta: {
				title: '店铺列表',
				icon: 'table'
			}
		},
		{
			path: 'addshop',
			name: 'addshop',
			component: addShop,
			meta: {
				title: '新增店铺',
				icon: 'add'
			}
		},
		{
			path: 'editshop/:id',
			name: 'editshop',
			component: editShop,
			meta: {
				title: '编辑店铺',
				icon: 'edit'
			}
		}]
	},

  ]
})
