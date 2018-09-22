import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/home'
import Movie from 'components/movie/movie'
import Tv from 'components/tv/tv'
import Variety from 'components/variety/variety'
import Animation from 'components/animation/animation'
import Message from 'components/message/message'
import Member from 'components/member/member'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
     {
      path: '/Movie',
      name: 'Movie',
      component: Movie
    },
     {
      path: '/Tv',
      name: 'Tv',
      component: Tv
    },
     {
      path: '/Animation',
      name: 'Animation',
      component: Animation
    },
     {
      path: '/Variety',
      name: 'Variety',
      component: Variety
    },
     {
      path: '/Message',
      name: 'Message',
      component: Message
    },
    {
      path: '/Member',
      name: 'Member',
      component: Member
    }
  ]
})
