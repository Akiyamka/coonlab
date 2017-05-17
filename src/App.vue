<template>
<div id="app">
  <section id="top">
    <header>
      <div class="logo-container">
        <img class="logo" src="./assets/logo.png" alt="CoonLab">
      </div>
      <div class="contact_info">
        <span>{{ translateHeader.contact }}</span>
        <ul class="menu">
          <li class="email">COONLAB@GMAIL.COM</li>
          <li class="telephone">+375(29) 688-10-20</li>
        </ul>
      </div>
      <div class="lang-switcher">
        <span>{{ langChoised }}</span>
        <ul id="lang">
          <li v-for="lang in langs" @click="langChoised = lang.value">{{ lang.name }}</li>
        </ul>
     </div>      

    </header>
    <div id="gallery">
      <div class="image"></div>
      <div class="descript">
        <h1>{{ translateTop.title }}</h1>
        <p>{{ translateTop.dicsript }}</p>
        <a href="#tabs" v-smooth-scroll><button>{{ translateTop.more }}</button></a>
      </div>
    </div>
    
      <div class="go-down">
        <a href="#tabs" v-smooth-scroll><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill=currentColor d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg></a>
      </div>
    
  </section>

  <div class="tabs-wrapper">
    <nav id="tabs">
      <router-link :to="'/' + langChoised + '/decription'">{{translateTabs.decription}}</router-link>
      <router-link :to="'/' + langChoised + '/hard'">{{translateTabs.hard}}</router-link>
      <router-link :to="'/' + langChoised + '/soft'">{{translateTabs.soft}}</router-link>
    </nav>
  </div>
    <router-view :lang="$route.params.lang" :id="$route.params.id"></router-view>

  <footer>
    <span>ООО "КунЛаб", 2016</span>
  </footer>
</div>
</template>

<script>
import Vue from 'vue'
import vueSmoothScroll from 'vue-smooth-scroll'
Vue.use(vueSmoothScroll)

export default {
  data () {
    return {
      langChoised:'ru',
      langs: [ 
        { name:'Русский', value:'ru' },
        { name:'English', value:'en' }
      ],
      images: ['../dist/visko.png'],
      tabs: this.translateTabs,
      header: this.translateHeader,
      top: this.translateTop,
    }
  },
  watch: {
    langChoised: function(val) {
      let current = this.$router.currentRoute.path.split('/')
      this.$router.push('/' + val + '/' + current[current.length-1] )
    }
  },
  computed: {
    translateTabs: function() {
      if (this.langChoised == 'ru') {
        return {
          decription: 'Описание',
          hard: 'Технические характекристики',
          soft: 'Программное обеспечение'
          }
      }
      else if (this.langChoised == 'en') {
        return {
          decription: 'Description',
          hard: 'Technical characteristics',
          soft: 'Software'
        }
      }
    },
    translateHeader: function() {
      if (this.langChoised == 'ru') {
        return {
          contact: 'Контакты',
        }
      }
      else if (this.langChoised == 'en') {
        return {
          contact: 'Contact',
        }
      }
    },
    translateTop: function() {
      if (this.langChoised == 'ru') {
        return {
          title: 'ВИСКОГРАФ COONLAB',
          dicsript: 'Прибор для измерения качества и вязкости крахмала',
          more: 'Подробнее'
        }
      }
      else if (this.langChoised == 'en') {
        return {
          title: 'The COONLAB Viscograph',
          dicsript: 'Instrument for measuring viscosity of starch and products containing starch',
          more: 'More'
        }
      }
    }    
  }
}
</script>

<style lang="stylus">

html
body
  margin: 0
  padding: 0

button
  background-color: #749fc5
  padding: 1.4em 1.6em
  border: none
  border-radius: 4px
  color: white
  font-weight: bold
  cursor: pointer
  letter-spacing: 1px
  text-transform: uppercase
  min-width: 150px
  &:hover
    background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.2) 100%), #749fc5
h1
  font-size: 1.8em
  color: inherit
  font-weight: normal
  line-height: 1.4em
h2
  margin: 2em 0 1em
  font-size: 1.4em
  line-height: 1.2em
ul
ol
  li
    padding: .3em 0

.vue-wrapper
  max-width: 960px
  margin: auto
  overflow: hidden
  padding: 30px
  &:after
    content: " "
    clear: both
  
  nav.bottom-nav
    display: block
    margin: 30px auto 0
    display: flex
    flex-flow: row wrap
    justify-content: center
    align-items: stretch
    a
      box-sizing: border-box
      color: white
      margin: 1%
      float: left
      text-align: center
      background-color: #749fc5
      padding: 20px 30px
      cursor: pointer
      border-radius: 4px
      text-decoration: none
      line-height: 1.4em
      display: flex
      &:hover
        background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.2) 100%), #749fc5
      span
        margin: auto
        
  

article
  padding-right: 30px
  box-sizing: border-box
  display: block
  // max-width: 960px
  width: 70%
  line-height: 1.8em
  float: left
  &#hard
    width: 100%
  p
    // text-indent: 30px
    text-align: justify

  .atention
    background-color: #ffffbf
    padding: 1em 1.5em
    font-size: .9em
    border-left: 4px solid #f3f39f
    text-align: left
    line-height: 1.6em

  .wildcat
    font-size: .8em
    line-height: 1.6em

  table
    width: 100%
    margin-bottom: 20px
    tr
      &:nth-child(odd)
        background-color: rgba(0,0,0,.04)
      td
        padding: 10px 30px

aside
  float: right
  width: 30%
  padding-left: 20px
  box-sizing: border-box
  display: block
  &:after
    content: " "
    clear: both
    float: none
  img
    width: 100%
    display: block
    min-height: 200px
    border: 1px solid lightgray
  
  ul
    padding-left: 25px

#app
  font-family: 'Open Sans', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  font-size: 16px 

  header
    position: relative
    text-align: right
    font-size: .8em
    padding: 5px 10px
    background-color: #749fc5
    color: white

    ul
      display: none
      position: absolute
      text-align: left
      margin: 0
      padding: 10px 0
      right: 0
      background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%,rgba(0,0,0,0.1) 100%), #749fc5
      li
        list-style: none
        padding: 10px 20px
        cursor: pointer
        &:hover
            background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.2) 100%), #749fc5

    .logo-container
      display: block
      position: absolute
      left: 0
      top: 0
      height: 100%
      img
        padding: 15px
        display: block
        height: 100%
        box-sizing: border-box


    
    .contact_info
    .lang-switcher
      font-weight: bold
      position: relative
      display: inline-block
      cursor: pointer
      span
        display: inline-block
        padding: 15px
        text-transform: uppercase

      &:hover
        background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%,rgba(0,0,0,0.1) 100%), #749fc5
      
      &.open
        ul
          display: block
          

  #top
    height: 100vh
    overflow: hidden
    display: flex
    flex-flow: column nowrap
    justify-content: space-between
    background: radial-gradient(ellipse at center, rgba(255,255,255,0) 1%,rgba(255,255,255,0.04) 26%,rgba(0,0,0,0.16) 100%)
        
    #gallery
      display: flex
      flex-flow: row nowrap
      justify-content: center
      align-items: center
      .image
        width: 50%
        height: 60vh
        background-size: contain
        background-repeat: no-repeat
        background-position: center
        margin-right: 30px
        background-image: url("./assets/visko.png")
      .descript
        display: flex
        flex-flow: column nowrap
        justify-content: flex-start
        h1
          text-transform: uppercase
          font-weight: bold
        p
          font-size: 1.2em
          margin-bottom: 3.8em
          margin-top: 0
          padding-right: 14px

  .go-down
    margin: 0 auto 10px
    color: #749fc5
    a
      display: block
      margin: auto
      color: unset
      svg
        display: block
        margin: auto

  .tabs-wrapper
    background-color: #749fc5

  #tabs
    max-width: 960px
    margin: auto
    a
      text-decoration: none
      padding: 20px
      display: inline-block
      font-size: 1em
      color: rgba(0,0,0, .5)
      font-weight: bold
      &:hover
        color: white
      &:active
      &.current
        color: white
        background-color: rgba(255,255,255, .12)
  footer
    padding: 15px
    text-align: center
    background: #567692
    color: white
    font-size: .8em




@media (max-width: 960px)
  article
  aside
    float: none
    width: 100%
  #app
    article
      padding: 0
    #top
      #gallery
        flex-flow: row wrap
        .image
          width: 80%
          margin: 0

@media (max-width: 770px)
  article
  aside
    float: none
    width: 100%
    padding: 0

  #app
    #tabs
      text-align: center
      a
        display: block
    #top
      #gallery
        .image
          width: 100%

@media (max-width: 620px)
  #app
    #top
      #gallery
        .image
          background-image: url("./assets/visko_one.png") !important
          background-size: contain
        .descript
          text-align: center
          justify-content: center
          button
            display: none

@media (max-width: 380px)
  #app
    #hard
      table
        tr
          td
            padding: 10px


@media (max-height: 850px) and (max-width: 1130px)
  #app
    font-size: 13px
    #top
      #gallery
        .image
          height: 60vh
        .descript
          height: 40vh
          padding: 20px
          padding-top: 0
          justify-content: center
          padding-bottom: 60px
          box-sizing: border-box
          h1
            margin-top: 0
          p
            font-size: 1.2em
          button
            display: none


</style>
