export default {
		changeCity (state,city) {
			state.city = city;
			//防止刷新页面地址又回到了默认值
			localStorage.city = city;
		}
}