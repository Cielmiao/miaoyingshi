<template>
	<div class="footer">
		<router-link tag="div" class="link" to="/Home">
			<i class="iconfont icon-shouye-copy-copy-copy"></i>
			<span class="tab-link">首页</span>
		</router-link>
		<router-link tag="div" class="link" to="/Movie">
			<i class="iconfont icon-dianying"></i>
			<span class="tab-link">电影</span>
		</router-link>
		<router-link tag="div" class="link" to="/Tv">
			<i class="iconfont icon-TV"></i>
			<span class="tab-link">电视剧</span>
		</router-link>
		<router-link tag="div" class="link" to="/Animation">
			<i class="iconfont icon-dongman"></i>
			<span class="tab-link">动漫</span>
		</router-link>
		<router-link tag="div" class="link" to="/Variety">
			<i class="iconfont icon-shipin"></i>
			<span class="tab-link">综艺</span>
		</router-link>
	</div>
</template>
<script>
	
</script>
<style scoped>
	.footer{
		visibility: hidden;
		position: fixed;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 10;
		display: flex;
	}
	.link{
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 12px;
		background-color: #000;
		cursor: pointer;
		padding: 10px 0;
	}
	.link i{
		font-size: 20px;
		margin-bottom: 8px;
	}
	@media (max-width: 767px){
		.footer{
			visibility: visible;
		}
	}
</style>
