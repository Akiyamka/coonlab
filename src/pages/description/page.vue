<template>
  <div class="vue-wrapper">
    <article id="decription">
      <ru-text v-if="lang == 'ru'" />
      <eng-text v-if="lang == 'en'" />
    </article>
    <sidebar langChoised="lang" />
    <div style="clear: both;"></div>
    <!--<nav class="bottom-nav">
      <router-link :to="'/' + lang + '/hard#tabs'" v-smooth-scroll><span>{{ text.btns.tech }}</span></router-link>
      <router-link :to="'/' + lang + '/soft#tabs'" v-smooth-scroll><span>{{ text.btns.soft }}</span></router-link>
    </nav>-->
  </div>
</template>
<script src="./main.js"></script>