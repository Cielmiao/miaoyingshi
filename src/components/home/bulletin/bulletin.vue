<template>
	<div class="bulletin">
		<div class="container bulletin-box">
			<i class="iconfont icon-gonggao"></i>
			<p class="txt">欢迎光临喵影视，全网VIP视频免费观看，赶快分享给你的朋友吧！ 如果有特殊影片需求，欢迎到“求片留言板”留下您的意见！</p>
		</div>
	</div>
</template>
<script>
	export default{}
</script>
<style scoped>
	.bulletin{
		margin: 0.2rem 0;
	}
	.bulletin-box{
		display: flex;
		flex-direction: row;
		align-items: center;
		background-color: rgba(0,0,0,0.8);
		padding-top: 20px;
		padding-bottom: 20px;
	}
	.icon-gonggao{
		font-size: 20px;
	}
	.txt{
		font-size: 14px;
		font-weight: bold;
		margin-left: 10px;
	}
	@media (max-width: 767px){
		.bulletin{
			display: none;
		}
	}
</style>