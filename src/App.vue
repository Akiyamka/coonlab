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
          <li v-for="lang in langs" @click="langChoised = lang.value">{{ lang.name }}</i>
        </ul>
     </div>      

    </header>
    <div id="gallery">
      <div class="image" v-for="image in images" :style="{ backgroundImage: 'url(' + image + ')' }"></div>
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

<style lang="stylus" src="./main.styl">