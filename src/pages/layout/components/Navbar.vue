<template>
	<div class="navbar">
		<hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
		<!-- 面包屑 -->
		<el-breadcrumb class="breadcrumb" separator="/">
			<!-- 面包屑动画 -->
		    <transition-group name="breadcrumb">
		      <el-breadcrumb-item v-for="(item,index)  in levelList" :key="item.path" v-if="item.meta.title">
		        <router-link v-if="!(index==levelList.length-1)" :to="item.redirect||item.path">{{item.meta.title}}</router-link>
		        <span v-if="index==levelList.length-1" class="no-redirect">{{item.meta.title}}</span>
		      </el-breadcrumb-item>
		    </transition-group>
  		</el-breadcrumb>
	</div>
</template>
<script>
	import { mapGetters } from 'vuex'
	import Hamburger from '@/components/Hamburger'
	export default{
		created(){
			this.getBreadcrumb()
		},
		data(){
			return{
				levelList: null,
				xuanzhuan:false
			}
		},
		 computed: {
		    ...mapGetters([
		      'sidebar',
		    ])
		  },
		watch:{
			// 这个是监听.当路由变化的时候触发事件
			$route(){
				this.getBreadcrumb()
			}
		},
		methods:{
			getBreadcrumb(){
				let matched = this.$route.matched.filter(item => item.name)
				const first = matched[0]
				// 插入首页面包屑
				if(first && first.name !== 'homepage') {
					matched = [{ path: 'homepage', meta: { title: '首页' }}].concat(matched)
				}
				this.levelList = matched
				console.log(this.levelList)
			},
			toggleSideBar(){
				this.$store.dispatch('ToggleSideBar')
			}
		},
		components: {
    		Hamburger
  		}
	}
</script>
<style lang="less" scoped>
	.navbar{
		height: 50px;
		line-height: 50px;
		border-bottom: 1px solid #dddddd;
		position: relative;
		padding: 0;
		margin: 0;
		.hamburger-container{
			line-height: 58px;
		    height: 50px;
		    float: left;
		    padding: 0 10px;
		}
		.breadcrumb{
			line-height: 50px;
		}
	}

.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all .5s;
}

.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-move {
  transition: all .5s;
}

.breadcrumb-leave-active {
  position: absolute;
}
</style>
