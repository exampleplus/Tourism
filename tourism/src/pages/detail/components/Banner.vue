<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_600x330_8572a930.jpg" />
      <div class="banner-info">
        <div class="banner-tittle">
			北京京奇偶啊啊是你家是你发撒放
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
        </div>
      </div>
    </div>
	<common-gallary :imgs="imgs" @closeGallary="close" v-if="isShowGallary"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from '@/common/gallary/Gallary'
// import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  components:{
	  CommonGallary
  },
  data () {
    return {
		isShowGallary:false,
		imgs:['http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_r_800x800_d6a63068.jpg','http://img1.qunarzz.com/sight/p0/1704/d2/d2a029bded2f6b4aa3.img.jpg_r_800x800_d0d2c749.jpg']
    }
  },
  methods:{
	  handleBannerClick() {
		  this.isShowGallary = true;
	  },
	  close() {
		  this.isShowGallary = false;
	  }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-tittle
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
