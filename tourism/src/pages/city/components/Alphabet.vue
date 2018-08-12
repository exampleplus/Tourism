<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letter"
      :key="item"
			:ref="item"
			 @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
			@click="handleLetterClick"
    >
      {{item}}
    </li>
		</ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
	props:{
		cities:Object
	},
	data() {
		return {
			touchStatus:false,
			startY:0,
			timer:null
		}
	},
	computed:{
		letter () {
			const letters = [];
			for(let i in this.cities) {
				//console.log(i)
				letters.push(i)
			}
			return letters;
		}
		//[A,B,C,D,.......]
	},
	updated:function(){
		 this.startY = this.$refs['A'][0].offsetTop
	},
	methods:{
		handleLetterClick(e){
			//通过传递给父组件City 再有父组件传递给list 让其滚动到点击的字母对应的区域
			this.$emit("change",e.target.innerText)
			// console.log(e.target.innerText)
		},
		handleTouchStart () {
      this.touchStatus = true
    },
		handleTouchMove(e) {

			if(this.touchStatus){
				if(this.timer){
					clearTimeout(this.timer)
				}
				this.timer = setTimeout(() => {
					//计算出A 距离顶部的距离
// 					const startY = this.$refs["A"][0].offsetTop
// 					console.log(startY)
					//开始滑动的位置减去A距离顶部的高度，就是开始滑动的地方距离A的高度
					const touchY = e.touches[0].clientY - 79;
					const index = Math.floor((touchY - this.startY) / 20)
					console.log(index)
					if(index >= 0 && index < this.letter.length ){
						this.$emit("change",this.letter[index])
					}
				},16)
			}
		},
		handleTouchEnd() {
			this.touchStatus = false
		}
	}
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
