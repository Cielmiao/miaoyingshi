<template>
	<div class="category">
		<div>
			<div class="container">
				<div class="row">
					<div class="col-sm-4 category-item">
						<h3 class="title">按剧情</h3>
						<div class="kalss">
							<a href="">全部</a>
							<a href="">喜剧</a>
							<a href="">爱情</a>
							<a href="">动作</a>
							<a href="">恐怖</a>
							<a href="">科幻</a>
							<a href="">剧情</a>
							<a href="">伦理</a>
							<a href="">文艺</a>
						</div>
					</div>
					<div class="col-sm-4 category-item">
						<h3 class="title">按剧情</h3>
						<div class="kalss">
							<a href="">全部</a>
							<a href="">喜剧</a>
							<a href="">爱情</a>
							<a href="">动作</a>
							<a href="">恐怖</a>
							<a href="">科幻</a>
							<a href="">剧情</a>
							<a href="">伦理</a>
							<a href="">文艺</a>
						</div>
					</div>
					<div class="col-sm-4 category-item">
						<h3 class="title">按剧情</h3>
						<div class="kalss">
							<a href="">全部</a>
							<a href="">喜剧</a>
							<a href="">爱情</a>
							<a href="">动作</a>
							<a href="">恐怖</a>
							<a href="">科幻</a>
							<a href="">剧情</a>
							<a href="">伦理</a>
							<a href="">文艺</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	
</script>
<style scoped>
	.category{
		margin: 20px 0;
	}
	.category-item{
		padding: 20px;
	}
	.title{
		font-size: 16px;
	}
	.kalss{
		font-size: 14px;
	}
	.kalss a{
		display: inline-block;
		width: 13%;
		padding-top: 10px;
		color: #ccc;
	}
	.kalss a:hover{
		color: #1A9CD6;
	}
	@media (max-width: 768px){
		.kalss{
		font-size: 14px;
		overflow:hidden;
		overflow-x: scroll;
		white-space: nowrap; 
		}
		.category-item{
			padding: 0.1rem;
		}
		.kalss a{
		padding-bottom: 0.1rem;
		
	}

	}

</style>