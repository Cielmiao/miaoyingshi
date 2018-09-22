<template>
	<div class="home">
		<swiper></swiper>
		<bulletin></bulletin>
		<home-list></home-list>
	</div>
</template>

<script>
	import Swiper from './swiper/swiper'
	import Bulletin from './bulletin/bulletin'
	import homeList from './home-list/home-list'

	export default {
		components:{
			Swiper,
			Bulletin,
			homeList
		}
	}
</script>

<style>
	
</style>