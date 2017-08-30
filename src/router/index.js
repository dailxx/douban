import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/home'
import Movie from 'components/movie/movie'
import Book from 'components/book/book'
import Broadcast from 'components/broadcast/broadcast'
import Group from 'components/group/group'
import Search from 'components/search/search'
import TV from 'components/tv/tv'
import Music from 'components/music/music'
import MovieMore from 'components/movie/more'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/movie',
      component: Movie
    },
    {
      path: '/movie/nowintheater',
      component: MovieMore
    },
    {
      path: '/book',
      component: Book
    },
    {
      path: '/broadcast',
      component: Broadcast
    },
    {
      path: '/group',
      component: Group
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/music',
      component: Music
    },
    {
      path: '/tv',
      component: TV
    }
  ]
})
