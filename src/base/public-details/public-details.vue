<template>
	<div>
		<category></category>
		<div class="container">
			<details-title></details-title>
			<m-details></m-details>
			<m-page></m-page>
		</div>
	</div>
</template>
<script>
	import Category from '@/base/category/category'
	import MDetails from '@/base/m-details/m-details'
	import detailsTitle from '@/base/details-title/details-title'
	import MPage from '@/base/m-page/m-page'

	export default{
		components:{
			Category,
			MDetails,
			detailsTitle,
			MPage
		}
	}
</script>
<style>
	
</style>