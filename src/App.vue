<template>
  <div id="app">
    <m-header></m-header>
    <router-view></router-view>
    <m-footer></m-footer>
    <layout></layout>
  </div>
</template>

<script>
import MHeader from "components/m-header/m-header"
import Layout from "components/layout/layout"
import MFooter from "components/m-footer/m-footer"
export default {
  components:{
    MHeader,
    Layout,
    MFooter
  }
}
</script>

<style>
  #app{
    background-color: rgba(0,0,0,0.3);
  }
</style>
