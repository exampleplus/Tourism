<template>
  <div id="app">
	  <!-- kepp-alive虽然不会重复请求数据但是在需要获取不同数据的时候-在该页面写activited生命周期函数-重新发起ajax请求> -->
	  <keep-alive>
		  <router-view/>
	  </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {

}
</style>
