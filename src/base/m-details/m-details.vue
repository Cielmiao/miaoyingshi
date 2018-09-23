<template>
	<div>
		<div class="row">
			<div class="clearfix">
				<div class="items col-lg-2 col-xs-4 col-sm-3">
					<div class="item-img">
						<a href="">
							<img src="../../assets/img/1.jpg" alt="">
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
							<img src="../../assets/img/1.jpg" alt="">
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
							<img src="../../assets/img/1.jpg" alt="">
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
							<img src="../../assets/img/1.jpg" alt="">
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
							<img src="../../assets/img/1.jpg" alt="">
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
							<img src="../../assets/img/1.jpg" alt="">
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
							<img src="../../assets/img/1.jpg" alt="">
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
</template>
<script>
	
</script>
<style scoped>
	.row{
		margin-left: -8px;
		margin-right: -8px;
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
		.list-name{
			text-align: center;
		}
		.subname{
			display: none;
		}
	}
</style>