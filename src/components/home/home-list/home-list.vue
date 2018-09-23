<template>
	<div class="home-list">
		<div class="container">
			<div>
				<div class="title">
					<span class="title-left">
						<i class="iconfont icon-VIP icon-sty"></i>
						<h3>抢先看</h3>
					</span>
					<span class="title-right">
						<span class="tv-class">
							<a href="">喜剧</a>/
							<a href="">爱情</a>/
							<a href="">动作</a>/
							<a href="">科幻</a>/
							<a href="">剧情</a>/
							<a href="">犯罪</a>/
							<a href="">奇幻</a>/
						</span>
						<span>
							<a href="">更多 ></a>
						</span>
					</span>
				</div>
				<m-details></m-details>
			</div>
		</div>
	</div>
</template>
<script>
import MDetails from '@/base/m-details/m-details'
	export default{
		components:{
			MDetails
		}
	}
</script>
<style scoped>
	.container{
		margin-bottom: 20px;
	}
	.title{
		padding-top: 20px;
		padding-bottom: 20px;
		font-size: 14px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.icon-sty{
		font-size: 30px;
		color: #1A9CD6;
	}
	.title-left{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.title-left h3{
		font-size: 20px;
		margin-left: 10px;
	}
	.title-right a{
		padding: 15px;
		color: #ccc;
	}
	.title-right a:hover{
		color: #1A9CD6;
	}
	
	
	@media (max-width: 576px){
		.home-list{
			margin-bottom: 60px;
		}
		.container{
			padding-left: 0.08rem;
			padding-right: 0.08rem;
		}
		.icon-sty{
			font-size: 0.24rem;
		}
		.title-left h3{
			font-size: 0.16rem;
		}
	}
	@media (max-width: 992px){
		.tv-class{
			display: none;
		}
	}
	
</style>