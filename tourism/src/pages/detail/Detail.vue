<template>
  <div>
    <detail-banner></detail-banner>
	<detail-header></detail-header>
	<detail-list :list="list"></detail-list>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
	DetailHeader,
	DetailList
  },
  data () {
    return {
		list:[
			{
				title:"成人票",
				children:[{
					title:'成人三管联票',
					children:[{
						title:"成人三管联票-上海销售"
					}]
				},{
					title:'成人5人联票'
				}]
			},
			{title:"学生票"},
			{title:"儿童票"}
		]
    }
  }

}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
