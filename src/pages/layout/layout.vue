<template>
	<div class="layout" :class="{hideSidebar:sidebar.opened}">
		<!-- 左边导航栏 -->
		<siderbar class='left-container'></siderbar>
		<div class="main-container">
			<!-- 头部面包屑 -->
			<navbar></navbar>
			<!-- dashboard中Index的内部表 -->
			<appmain></appmain>
		</div>
	</div>
</template>
<script>
	import Navbar from '@/pages/layout/components/Navbar'
	import Siderbar from '@/pages/layout/components/Siderbar'
	import Appmain from '@/pages/layout/components/Appmain'

	export default{
		name: 'layout',
		data(){
			return{
			}
		},
		components: {
			Navbar,
			Siderbar,
			Appmain
		},
		computed:{
			sidebar() {
				return this.$store.state.app.sidebar  // 当点击就导航栏就收缩或拉伸
			}
		}
	}
</script>
<style lang="less">
	.layout{
		width: 100%;
		height: 100%;
		position: relative;
		.left-container{
			/*这里有个bug,这里宽度不设置的话会跟main-container的宽度一样*/
			width: 200px!important;
			background-color: #304156;
			position: fixed;
			transition: .3s;
			top: 0;
			bottom: 0;
			left: 0;
			z-index: 1001;
		}
		.main-container{
			margin-left: 220px;
			transition: .3s;
		}


	}
	/*这个隐藏必须放下面*/
	.hideSidebar {
		.left-container{
			width: 40px!important;
		}

		.main-container{
			margin-left: 60px;
		}
		/*没有二级页的title,此class名在siderbar*/
		.noMinorTitle{
				padding-left: 12px!important;
				span{
					height: 0;
			        width: 0;
			        overflow: hidden;
			        visibility: hidden;
			        transition: opacity .3s cubic-bezier(.55, 0, .1, 1);
			        opacity: 0;
			        display: inline-block;
				}
				&:hover span{
					display: block;
			        border-radius: 3px;
			        z-index: 1002;
			        width: 140px;
			        height: 56px;
			        visibility: visible;
			        position: absolute;
			        right: -145px;
			        text-align: left;
			        text-indent: 20px;
			        top: 0px;
			        opacity: 1;
			        background: rgb(84, 92, 100);
			        color: #ffffff;
				}
			}
		/*有二级页的title*/
		.el-submenu__title{
			padding-left: 12px!important;
			span{
				display: none;
			}
			.el-submenu__icon-arrow {
          		display: none;
        	}
		}

		.el-menu--inline{
			display: none!important;
			/*得设置高度为0,不然到时候二级会占很大高*/
			width: 0;
			height: 0;
		}
		.hasMinorTitle:hover .el-menu--inline{
			display: block!important;
			.el-menu-item{
			        z-index: 1002;
			        width: 140px;
			        visibility: visible;
			        position: relative;
			        right: -50px;
			        text-align: left;
			        padding-left: 10px!important;
			        text-indent: 20px;
			        top: -40px;
			        opacity: 1;
			        background: rgb(84, 92, 100);
			        color: #ffffff;
				}
		}
  }
</style>
