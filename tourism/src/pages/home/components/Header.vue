<template>
	<div class="header">
		<div class="header-left">
		  <div class="iconfont back-icon">&#xe624;</div>
		</div>
		<div class="header-input">
		  <span class="iconfont">&#xe632;</span>
			输入城市/景点/游玩主题
		</div>
		<router-link to="/city">
			<div class="header-right">
					<span class="iconfont arrow-icon">{{city}}&#xe64a;</span>
			</div>
		</router-link>
	
	</div>
</template>
<script>
	export default {
		name:"HomeHeader",
		data () {
			return {
				city:this.$store.state.city
			}
		}
	}
	//// 1rem = html： font-size=50px =》 86px在2倍图设计稿里面样式要写成43px 也就是0.86rem 即在iphone6设计稿750px下 如果设置HTML的font-isze为50px，则 用设计稿的像素除以100就是rem的值
</script>
<style lang="stylus" scoped>
 @import '~styles/varibles.styl'
.header 
  display: flex
  line-height: 0.86rem
  background: $bgColor
  color: #fff
  .header-left
    width: .64rem
    float: left
    .back-icon
      text-align: center
      font-size: .4rem
  .header-input
    flex: 1
    height: .64rem
    line-height: .64rem
    margin-top: .12rem
    margin-left: .2rem
    padding-left: .2rem
    background: #fff
    border-radius: .1rem
    color: #ccc
   .header-right
    min-width: 1.04rem
    padding: 0 .1rem
    float: right
    text-align: center
    color: #fff
    .arrow-icon
      margin-left: -.04rem
      font-size: .24rem	  
  
</style>