<template>
	<div class="header">
		<div class="container">
			<div class="row">
			<div>
				<a href="" class="image">
					<img src="" alt="">
				</a>
				<nav class="nav-class">
					<ul>
						<router-link tag="li" class="link" to="/Home">
							<span class="tab-link">首页</span>
						</router-link>
						<router-link tag="li" class="link" to="/Movie">
							<span class="tab-link">电影</span>
						</router-link>
						<router-link tag="li" class="link" to="/Tv">
							<span class="tab-link">电视剧</span>
						</router-link>
						<router-link tag="li" class="link" to="/Animation">
							<span class="tab-link">动漫</span>
						</router-link>
						<router-link tag="li" class="link" to="/Variety">
							<span class="tab-link">综艺</span>
						</router-link>
						<router-link tag="li" class="link" to="/Message">
							<span class="tab-link">求片留言板</span>
						</router-link>
					</ul>
				</nav>
				</div>
					<form class="search" action="" >
						<input class="form-control" type="text" placeholder="请输入影片关键词">
						<a href="">
							<i class="iconfont icon-search"></i>
						</a>
					</form>
			</div>
		</div>
	</div>
</template>

<script>
	export default{}
</script>

<style scoped>
	.header{
		width: 100%;
		background-color:rgba(0,0,0,0.8); 
	}
	
	
	.image{
		float: left;
		display: inline-block;
		width: 1.2rem;
		height: 0.64rem;
		background-color: red;
	}
	
	.nav-class{
		float: left;
		margin-left: 0.5rem;
		height: 0.64rem;
		line-height: 0.64rem;
		font-size: 16px;
	}
	.link{
		display: inline-block;
		height: 0.64rem;
		margin-right: 0.3rem;
		font-size:0.16rem;
	}
	.link:hover{
		color: #428bca;
		cursor: pointer;
	}
	.router-link-active{
		color: #428bca;
		border-bottom: 0.02rem solid #428bca;
	}
	.search{
		position: relative;
		margin-top: 11px;
	}
	
 	.form-control{
		width: 2.5rem;
		height: 0.2rem;
		float: right;
		font-size: 0.14rem;
		padding: 0.2rem 0.2rem;
		border-radius: 5px;
	}
	.form-control:focus{
		box-shadow: 0 0 0 0.02rem rgba(0,123,255,.25);
	}
	.icon-search{
		position: absolute;
		right: 22px;
		top: 12px;
	}
	@media (max-width: 992px){
		.nav{
			margin-left: 0.2rem;
		}
		.link{
			margin-right: 0.15rem;
		}
		.form-control{
			width: 2rem;
		}
	}
	@media (max-width: 767px){
		.image,.nav-class{
			display: none;
		}
		.search{
			width: 100%;
			padding-left: 10px;
			padding-right: 10px;
		}
		.form-control{
			width: 100%;
		}
		.icon-search{
			top: 12px;
			right: 20px;
		}
	}
</style>