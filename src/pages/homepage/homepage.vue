<template>
	<div class="homepage">
		<div id="echarts">

		</div>
	</div>
</template>
<script>
	import Echarts from 'echarts';
export default{
	mounted(){
		var myChart = Echarts.init(document.getElementById('echarts'));
			// 绘制图表
			myChart.setOption({
			    title: { text: 'ECharts 入门示例' },
			    tooltip: {},
			    xAxis: {
			        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
			    },
			    yAxis: {},
			    series: [{
			        name: '销量',
			        type: 'bar',
			        data: [5, 20, 36, 10, 10, 20]
			    }]
			});
	},
	data(){
		return{

		}
	},
	methods:{
		// async initEcharts() {
		// 	var myChart = Echarts.init(document.getElementsByTagName('echarts'));
		// 	// 绘制图表
		// 	myChart.setOption({
		// 		title:{
		// 			text:'月流量统计'
		// 		},
		// 		tooltip: {
		//             trigger: 'axis',
		//             axisPointer: {
		//                 type: 'cross',
		//                 label: {
		//                     backgroundColor: '#6a7985'
		//                 }
		//             }
  //         		},
  //         		legend: {
  //           		data: ['新增用户', '新增管理员', '新增店铺', '新增订单', '用户访问量','接口调用次数']
  //         		},
  //         		grid: {
		//             left: '3%',
		//             right: '4%',
		//             bottom: '3%',
		//             containLabel: true
		//         },

		// 	})
		// }
	}
}
</script>
<style lang="less" scoped>
	.homepage{
		#echarts{
			width: 60%;
			height: 550px;
		}
	}
</style>
