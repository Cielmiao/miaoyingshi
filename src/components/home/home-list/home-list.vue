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
				<div class="list-box">
					<div class="list clearfix">
						
						<div class="items col-lg-2 col-xs-4 col-sm-3">
							<div class="item-img">
								<a href="">
									<img src="../../../assets/img/1.jpg" alt="">
								</a>
								<span class="img-subtitle">网友求片</span>
							</div>
							<div class="list-name">
								<a href="">与神同行</a>
							</div>
							<div class="subname">主演:刘昊然，你好</div>
						</div>
						<div class="items col-lg-2 col-xs-4 col-sm-3">
							<div class="item-img">
								<a href="">
									<img src="../../../assets/img/1.jpg" alt="">
								</a>
								<span class="img-subtitle">网友求片</span>
							</div>
							<div class="list-name">
								<a href="">与神同行</a>
							</div>
							<div class="subname">主演:刘昊然，你好</div>
						</div>
						<div class="items col-lg-2 col-xs-4 col-sm-3">
							<div class="item-img">
								<a href="">
									<img src="../../../assets/img/1.jpg" alt="">
								</a>
								<span class="img-subtitle">网友求片</span>
							</div>
							<div class="list-name">
								<a href="">与神同行</a>
							</div>
							<div class="subname">主演:刘昊然，你好</div>
						</div>
						<div class="items col-lg-2 col-xs-4 col-sm-3">
							<div class="item-img">
								<a href="">
									<img src="../../../assets/img/1.jpg" alt="">
								</a>
								<span class="img-subtitle">网友求片</span>
							</div>
							<div class="list-name">
								<a href="">与神同行</a>
							</div>
							<div class="subname">主演:刘昊然，你好</div>
						</div>
						<div class="items col-lg-2 col-xs-4 col-sm-3">
							<div class="item-img">
								<a href="">
									<img src="../../../assets/img/1.jpg" alt="">
								</a>
								<span class="img-subtitle">网友求片</span>
							</div>
							<div class="list-name">
								<a href="">与神同行</a>
							</div>
							<div class="subname">主演:刘昊然，你好</div>
						</div>
						<div class="items col-lg-2 col-xs-4 col-sm-3">
							<div class="item-img">
								<a href="">
									<img src="../../../assets/img/1.jpg" alt="">
								</a>
								<span class="img-subtitle">网友求片</span>
							</div>
							<div class="list-name">
								<a href="">与神同行</a>
							</div>
							<div class="subname">主演:刘昊然，你好</div>
						</div>
						<div class="items col-lg-2 col-xs-4 col-sm-3">
							<div class="item-img">
								<a href="">
									<img src="../../../assets/img/1.jpg" alt="">
								</a>
								<span class="img-subtitle">网友求片</span>
							</div>
							<div class="list-name">
								<a href="">与神同行</a>
							</div>
							<div class="subname">主演:刘昊然，你好</div>
						</div>
						
						
						
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{}
</script>
<style scoped>
	.container{
		background-color: rgba(0,0,0,0.8);
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
	
	.items{
		padding: 8px;
		float: left;
		font-size: 16px;
	}
	.item-img{
		position: relative;
	}
	.img-subtitle{
		padding: 5px;
		background-color: #1A9CD6;
		font-size: 12px;
		color: #fff;
		position: absolute;
		top: 5px;
		left: -5px;
	}
	.img-subtitle:before{
		content: "";
		border-top: 4px solid #09BB07;
    	border-left: 4px solid transparent;
    	position: absolute;
    	left: 1px;
    	bottom: -4px;
	}

	.item-img img{
		width: 100%;
		height: 200px;
	}
	.list-name{
		margin-top: 12px;
		margin-bottom: 8px;
	}
	.list-name a{
		font-size: 14px;
		color: #ccc;
	}
	.list-name a:hover{
		color: #1A9CD6;
	}
	.subname{
		font-size: 12px;
	}
	@media (max-width: 576px){
		.col-xs-4{
			width: 33.3333%;
		}
		.items{
			padding:0.05rem;
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
		.list-name{
			text-align: center;
		}
		.subname{
			display: none;
		}
	}
	@media (max-width: 992px){
		.tv-class{
			display: none;
		}
	}
	
</style>