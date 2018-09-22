<template>
  <div class="container">
    <div class="row">
      <div class="home">
        <div class="col-lg-6 col-md-12 col-sm-12 col-xl-7 left">
          <swiper :options="swiperOption">
            <swiper-slide v-for="slide in swiperSlides">
              <img class="swiper-img" src="../../../assets/img/1.jpg"/>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 col-xl-5 right">
          <div class="nav-icon clearfix">
            <ul>
              <li v-for="item in iconList" class="nav-item">
                <a href="" class="nav-item-a">
                  <i class="iconfont" :class="item.icon"></i>
                  <span>{{item.txt}}</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="nav-title clearfix">
            <ul>
              <li v-for="item in titleList" class="nav-title-item">
                <a href="">{{item}}</a>
              </li>
            </ul>
          </div>
          <div class="sweep">
            <img src="../../../assets/img/icon1.jpg" alt="">
            <div class="sweep-item">
              <span class="span1">扫描二维码 "手机看大片"</span>
              <span>也可以分享到朋友圈哦~</span>
              <span>http://www.miaoyingshi.com/</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>
 
<script>
  export default {
    data() {
      return {
        swiperOption: {
          notNextTick:true,
          autoplay:true,
          loop:true,
          pagination: {
            el: '.swiper-pagination'
          }
        },
        swiperSlides: [
        "/static/img/1.ccdfb69.jpg",
        "/static/img/1.ccdfb69.jpg",
        "/static/img/1.ccdfb69.jpg",
        "/static/img/1.ccdfb69.jpg", 
        "/static/img/1.ccdfb69.jpg"
        ],
        iconList:[
          {
            icon:"icon-live",
            txt:"电视直播"
          },
          {
            icon:"icon-VIP",
            txt:"抢先片源"
          },
          {
            icon:"icon-tv",
            txt:"电视剧"
          },
          {
            icon:"icon-weibiaoti--",
            txt:"会员中心"
          },
        ],
        titleList:[
          "爱情","动作","恐怖","科幻","剧情","犯罪","奇幻","战争"
        ]
      }
    }
  }
</script>
<style scoped>
  .home{
    width: 100%;
    margin-top: 0.2rem;
    padding: 0.15rem;
    background-color: rgba(0,0,0,0.8);
  }
  .swiper-img{
    width: 100%;
  }
  .nav-item{
    float: left;
    width: 25%;
    padding: 0 0.08rem 0.08rem 0.08rem;
  }
  .nav-item-a{
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(255,255,255,0.2);
    padding: 0.16rem 0;
    text-align: center;
    border-radius: 5px;
    background-color: rgba(0,0,0,0.5);
  }
  .nav-item-a i{
    font-size: 0.28rem;
    color: #1A9CD6;
    margin-bottom: 0.08rem;
  }
  .nav-item-a span{
    font-size: 0.14rem;
    color: #ccc;
  }
  .left{
      padding-top: 0.08rem;
      padding-bottom: 0.08rem;
      padding-left: 0.08rem;
      padding-right: 0.08rem;
    }
  .right{
    margin-top: 0.08rem;
    padding-left: 0;
    padding-right: 0;
  }
  
  .nav-icon{
    width: 100%;
  }
  .nav-title{
    margin: 0.2rem 0;
  }
  .nav-title-item{
    float: left;
    width: 25%;
    padding: 0 0.08rem 0.08rem 0.08rem;
  }
  .nav-title-item a{
    background-color: rgba(0,0,0,0.5);
    display: block;
    padding: 0.1rem;
    text-align: center;
    border: 1px solid rgba(255,255,255,0.2);
    font-size: 0.14rem;
    color: #ccc;
    border-radius: 5px;
  } 
  

  .sweep{
    display: flex;
    flex-direction: row;
    padding: 0.2rem;
    margin-top: 0.1rem;
    margin-left: 0.08rem;
    margin-right: 0.08rem;
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 5px;
    background-color: rgba(0,0,0,0.5);
  }
  .sweep img{
    width: 1.3rem;
    height: 1.3rem;
  }
  .sweep-item{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 0.2rem;
    padding: 0.2rem 0;
  }
  .sweep-item span{
    font-size: 0.16rem;
  }
  .sweep-item .span1{
    font-size: 0.18rem;
  }

  @media (min-width: 992px){
    .left{
      float: left; 
    }
    .right{
      float: left;
    }
  }
  @media (max-width: 1199px) and (min-width: 992px){
    .nav-title{
      display: none;
    }
  }
  @media (max-width: 992px){
    .home{
      padding: 5px;
      margin-top: 10px;
    }
    .nav-item,.nav-title-item{
      padding: 0 0.05rem 0.05rem 0.05rem;
    }
    .nav-title{
      margin: 0.05rem 0;
    }
    .sweep{
      display: none;
    }
  }
</style>