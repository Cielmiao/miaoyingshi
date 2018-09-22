<template>
	<div class="layout">
		<router-link tag="div" class="link" to="/Member">
			<i class="iconfont icon-weibiaoti--"></i>
		</router-link>
		<router-link tag="div" class="link" to="/Message">
			<i class="iconfont icon-qiu"></i>
		</router-link>
		<div class="link">
			<i class="iconfont icon-lishijilu"></i>
		</div>
		<div class="link">
			<i class="iconfont icon-top"></i>
		</div>
	</div>
</template>
<script>
	
</script>
<style scoped>
	.layout{
		position: fixed;
		right: 60px;
		bottom: 70px;
		z-index: 10;
	}
	.link{
		width: 50px;
		height: 50px;
		line-height: 50px;
		text-align: center;
		font-size: 28px;
		background-color: rgba(0,0,0,0.6);
		margin-top: 20px;
		border-radius: 8px;
		cursor: pointer;
	}
	.link i{
		font-size: 24px;
	}
	@media (max-width: 992px){
		.layout{
			visibility: hidden;
		}
	}
</style>