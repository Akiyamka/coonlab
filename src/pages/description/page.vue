<template>
  <div class="vue-wrapper">
    <article id="decription">
      <ru-text v-if="lang == 'ru'" />
      <eng-text v-if="lang == 'en'" />
    </article>
    <aside id="rightCol">
      <div class="post" v-for="post in posts">
        <img src="post.img" alt="">
        <h4>{{ post.title }}</h4>
        <router-link :to="'/' + langChoised + '/news/' + post.id"> Читать далее </router-link>
      </div>
    </aside>
    <div style="clear: both;"></div>
    <!--<nav class="bottom-nav">
      <router-link :to="'/' + lang + '/hard#tabs'" v-smooth-scroll><span>{{ text.btns.tech }}</span></router-link>
      <router-link :to="'/' + lang + '/soft#tabs'" v-smooth-scroll><span>{{ text.btns.soft }}</span></router-link>
    </nav>-->
  </div>
</template>
<script src="./main.js"></script>