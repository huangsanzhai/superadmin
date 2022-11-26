(function() {
	var myChart = echarts.init(document.getElementById("widget-chart-box-1"));
	var myChart2 = echarts.init(document.getElementById("widget-chart-box-2"));

	var labelTop = {

		normal: {
			label: {
				show: true,
				position: 'center',
				formatter: '{b}',
				textStyle: {
					baseline: 'bottom'
				}
			},
			labelLine: {
				show: false
			}

		}
	};
	var labelFromatter = {
		normal: {
			label: {
				formatter: function(params) {
					return 100 - params.value + '%'
				},
				textStyle: {
					baseline: 'center'
				}
			}
		},
	}
	var labelBottom = {
		normal: {
			color: '#ccc',
			label: {
				show: true,
				position: 'center'
			},
			labelLine: {
				show: false
			}
		},
		emphasis: {
			color: '#ccc'
		}
	};
	var radius = [40, 35];
	option = {



		legend: {
			x: 'center',
			y: 'center',

		},

		grid: {
			x: 0,
			y: 0,
			x2: 0,
			y2: 0
		},

		toolbox: {
			show: true,
			feature: {
				magicType: {
					show: true,
					type: ['pie', 'funnel'],
					option: {
						funnel: {
							width: '20%',
							height: '30%',
							itemStyle: {
								normal: {
									label: {
										formatter: function(params) {
											return 'other\n' + params.value + '%\n'
										},
										textStyle: {
											baseline: 'middle'
										}
									}
								},
							}
						}
					}
				}

			}
		},
		series: [{
				type: 'pie',

				radius: radius,
				x: '0%', // for funnel
				itemStyle: labelFromatter,
				data: [{
						name: 'other',
						value: 46,
						itemStyle: labelBottom
					},
					{
						name: '',
						value: 54,
						itemStyle: labelTop
					}
				]
			}

		],
		animation: false
	};


	myChart.setOption(option);
	myChart2.setOption(option);
})();




(function() {
	var myChart = echarts.init(document.getElementById("index-pie-1"));

	option = {
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			orient: 'vertical',
			x: 'left',
			// data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
			data: ['直接访问', '社区推广', '微信链接', '搜索引擎', '好友推荐']
		},
		toolbox: {
			show: true,
			feature: {
				mark: {
					show: true
				},
				dataView: {
					show: true,
					readOnly: false
				},
				magicType: {
					show: true,
					type: ['pie', 'funnel'],
					option: {
						funnel: {
							x: '25%',
							width: '50%',
							funnelAlign: 'center',
							max: 1548
						}
					}
				},
				restore: {
					show: true
				},
				saveAsImage: {
					show: true
				}
			}
		},
		calculable: true,
		series: [{
			name: '访问来源',
			type: 'pie',
			radius: ['50%', '70%'],
			itemStyle: {
				normal: {
					label: {
						show: false
					},
					labelLine: {
						show: false
					}
				},
				emphasis: {
					label: {
						show: true,
						position: 'center',
						textStyle: {
							fontSize: '10',
							fontWeight: 'bold'
						}
					}
				}
			},
			data: [{
					value: 335,
					name: '直接访问'
				},
				{
					value: 310,
					name: '社区推广'
				},
				{
					value: 234,
					name: '微信链接'
				},
				{
					value: 1358,
					name: '搜索引擎'
				},
				{
					value: 154,
					name: '好友推荐'
				}
			]
		}]
	};



	myChart.setOption(option);
})();



(function() {
	var myChart = echarts.init(document.getElementById("index-bar-1"));

	option = {
		color: ['#3398DB'],
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
			axisTick: {
				alignWithLabel: true
			}
		}],
		yAxis: [{
			type: 'value'
		}],
		series: [{
			name: '直接访问',
			type: 'bar',
			barWidth: '60%',
			data: [10, 52, 200, 334, 390, 330, 220]
		}]
	};




	myChart.setOption(option);
})();



(function() {
	var myChart = echarts.init(document.getElementById("index-line-1"));

	option = {

		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data: ['需求增加量', '捐赠增加量'],
			x: "right"
		},

		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
		},
		yAxis: {
			type: 'value',
			axisLabel: {
				formatter: '{value}'
			}
		},
		series: [{
				name: '需求量',
				type: 'line',
				data: [20, 16, 18, 20, 23, 18, 19],
				markPoint: {
					data: [{
							type: 'max',
							name: '最大值'
						},
						{
							type: 'min',
							name: '最小值'
						}
					]
				},
				markLine: {
					data: [{
						type: 'average',
						name: '平均值'
					}]
				}
			},
			{
				name: '捐赠量',
				type: 'line',
				data: [7, 10, 5, 7, 10, 8, 9],
				markPoint: {
					data: [{
						name: '周捐赠',
						value: -2,
						xAxis: 1,
						yAxis: -1.5
					}]
				},
				markLine: {
					data: [{
							type: 'average',
							name: '平均值'
						},
						[{
							symbol: 'none',
							x: '90%',
							yAxis: 'max'
						}, {
							symbol: 'circle',
							label: {
								normal: {
									position: 'start',
									formatter: '最大值'
								}
							},
							type: 'max',
							name: '最高点'
						}]
					]
				}
			}
		]
	};





	myChart.setOption(option);
})();
