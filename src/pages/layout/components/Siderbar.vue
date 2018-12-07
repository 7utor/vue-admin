<template>
    <el-menu class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      :default-active="$route.path"
      active-text-color="#ffd04b" :collapse="isCollapse" mode="vertical" >
    	<template v-for="item in routes"  v-if="!item.hidden&&item.children">
    		<!-- 去除掉登陆，留没有二级页的首页，用户管理 -->
    		<router-link v-if="item.children.length===1 && !item.children[0].children" :to="item.path+'/'+item.children[0].path" :key="item.children[0].name">
	        <el-menu-item :index="item.path+'/'+item.children[0].path" class='noMinorTitle'>
	        	<svg-icon v-if="item.children[0].meta&&item.children[0].meta.icon" :icon-class="item.children[0].meta.icon"></svg-icon>
	          <span v-if="item.children[0].meta&&item.children[0].meta.title">{{item.children[0].meta.title}}</span>
	        </el-menu-item>
	      </router-link>
	      <!-- 这个是遍历有二级页的,index为标识如1-2,1-2-1 -->
	      <el-submenu v-if="!(item.children.length === 1 && item.children[0])" :index="item.name||item.path" :key="item.name" class='hasMinorTitle'>
	      	<!-- 一级页标题 -->
	        <template slot="title" class="theMinorTitle">
	        	<svg-icon v-if="item.meta&&item.meta.icon" :icon-class="item.meta.icon"></svg-icon>
	          <span v-if="item.meta&&item.meta.title">{{item.meta.title}}</span>
	        </template>
	        <!-- 二级页标题 -->
	        <template v-for="child in item.children" v-if="!child.hidden">
	        	<!-- 下面的if是确认二级下面没有三级 -->
	          <router-link v-if="!child.children" :to="item.path+'/'+child.path" :key="child.name">
	            <el-menu-item :index="item.path+'/'+child.path" class='main-item theMinorContent'>
	            	<svg-icon v-if="child.meta&&child.meta.icon" :icon-class="child.meta.icon"></svg-icon>
	              <span v-if="child.meta&&child.meta.title">{{child.meta.title}}</span>
	            </el-menu-item>
	          </router-link>
	        </template>
	      </el-submenu>
    	</template>
    </el-menu>
</template>
<script>
	import { mapGetters } from 'vuex'
	export default{
		data(){
			return{
			}
		},
		computed: {
			...mapGetters([
      			'sidebar'
    		]),
			routes() {
				console.log(this.$router.options.routes)
				return this.$router.options.routes
			},
			// 隐藏侧边时后再次打开,弹出时候会有最先弹出,所以要让在隐藏侧边栏前收起菜单,所以设置下面这个
			isCollapse() {
      			return this.sidebar.opened
    		}
		},
	}
</script>
<style lang="less" scoped>
	/*这里的样式在调用layout那里设置*/


</style>
