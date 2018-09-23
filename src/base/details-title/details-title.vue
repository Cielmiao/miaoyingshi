<template>
	<div class="title row">
		<a href="">
			<span>按最热</span>
		</a>
		<a href="">
			<span>按最新</span>
		</a>
		<a href="">
			<span>按好评</span>
		</a>
	</div>
</template>
<script>
	
</script>
<style scoped>
	.title{
		border-bottom: 1px solid #666;
		font-size: 18px;
		margin-bottom: 30px;
	}
	.title a{
		display: inline-block;
		padding: 20px 0;
		font-size: 16px;
		margin:0 20px 0px 10px;
		color: #ccc;
	}
	
	.title a:hover{
		color: #1A9CD6;
	}
	@media (max-width: 768px){
		.title{
			font-size: 0.16rem;
			margin-bottom: 0.2rem;
		}
		.title a{
			padding: 0.15rem 0;
		}
	}
</style>