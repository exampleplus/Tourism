<template>
  <div class="container" @click="handleGallaryClick">
		 <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide
          v-for="(item, index) in imgs"
          :key="index"
        >
          <img class="gallary-img" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
	props:{
		imgs:{
			type:Array
		}
	},
  data () {
    return {
      swiperOptions:{
				pagination: '.swiper-pagination',
        paginationType: 'fraction',  //数字格式
        observeParents: true,//当父容器发生改变时,自动计算宽度
        observer: true
			}
    }
  },
	methods:{
		handleGallaryClick () {
			this.$emit("closeGallary")
		}
	}
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container   //解决scoped不能修改别的组件的样式的问题
    overflow: inherit
  .container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    .wrapper
      height: 0
      width: 100%
      padding-bottom: 100%
      .gallary-img
        width: 100%
      .swiper-pagination
        color: #fff
        bottom: -1rem
</style>
