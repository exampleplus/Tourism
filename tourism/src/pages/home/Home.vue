<template>
	<div>
		<home-header></home-header>
		<home-swiper :list="swiperList"></home-swiper>
		<home-icons :list="iconList"></home-icons>
		<home-recommend :list="recommendList"></home-recommend>
		<home-weekend :list="weekendList"></home-weekend>
	</div>
</template>
<script>
	import HomeHeader from './components/Header'
	import HomeSwiper from './components/Swiper'
	import HomeIcons from './components/Icons'
	import HomeRecommend from './components/Recommend'
	import HomeWeekend from './components/Weekend'
	import axios from 'axios'
	export default {
		name:"Home",
		components:{
			HomeHeader,
			HomeSwiper,
			HomeIcons,
			HomeRecommend,
			HomeWeekend
		},
		data () {
			return {
				  lastCity:"",
				  lastCity: '',
				  swiperList: [],
				  iconList: [],
				  recommendList: [],
				  weekendList: []
			}
		},
		computed: {
			city() {
				return this.$store.state.city
			}
		},
		methods:{
			//如果要请求本地的静态数据 json文件必须放到static文件夹下
			getHomeInfo () {
				//在config index.js做转发 当访问呢api的时候会转发到static/mock文件下
				axios.get('/static/mock/index.json?city='+this.city)
				.then(this.getHomeInfoSucc)
			},
			getHomeInfoSucc (res) {
				console.log(res)
				res = res.data;
				 if (res.ret && res.data) {
					const data = res.data
					this.swiperList = data.swiperList
					this.iconList = data.iconList
					this.recommendList = data.recommendList
					this.weekendList = data.weekendList
				  }
			}
		},
		mounted () {
			this.lastCity = this.city;
			this.getHomeInfo();
		},
		activated () {
				//当页面重新显示的时候会执行activited 不会在执行mounted
				//此方法可以解决在添加keep-alive的情况下 没有请求数据的问题
				//判断上次的城市是否和这次的城市相同，如果相同就不在请求
				if (this.lastCity !== this.city) {
					this.lastCity = this.city
					this.getHomeInfo();
				}
		}
	}
</script>
<style>
	
</style>