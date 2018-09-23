<template>
	<div class="pages">
		<nav aria-label="Page navigation">
		  <ul class="pagination">
		    <li>
		      <a href="#" aria-label="Previous">
		        <span aria-hidden="true">&laquo;</span>
		      </a>
		    </li>
		    <li><a href="#">1</a></li>
		    <li><a href="#">2</a></li>
		    <li><a href="#">3</a></li>
		    <li><a href="#">4</a></li>
		    <li><a href="#">5</a></li>
		    <li>
		      <a href="#" aria-label="Next">
		        <span aria-hidden="true">&raquo;</span>
		      </a>
		    </li>
		  </ul>
		</nav>

	</div>
</template>
<script>
	
</script>
<style scoped>
	nav{
		font-size: 18px;
		text-align: center;
	}
	.pagination>li>a, 
	.pagination>li>span{
		background-color: #333;
	}
	@media (max-width: 767px){
		.pages{
			padding-bottom: 60px; 
		}
	}
</style>