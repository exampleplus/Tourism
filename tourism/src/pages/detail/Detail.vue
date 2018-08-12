<template>
	<div>
		推荐项目详情页
		{{id}}
	</div>
</template>
<script>
	export default {
		data () {
			return {
				id:this.$route.query.id
			}
		}
	}
</script>
<style>
	
</style>