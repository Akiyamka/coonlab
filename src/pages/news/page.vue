<template>
<div class="vue-wrapper">
  <article id="soft">
    <div id="leftCol">
      <post1 v-if="id == '1'" />
      <post2 v-if="id == '2'" />
    </div>
  </article>
  <sidebar langChoised="lang" />
  <div style="clear: both;"></div>
    <!--<nav class="bottom-nav">
      <router-link :to="'/' + lang + '/decription#tabs'" v-smooth-scroll><span>{{text.btns.decription}}</span></router-link>
      <router-link :to="'/' + lang + '/hard#tabs'" v-smooth-scroll><span>{{text.btns.tech}}</span></router-link>
    </nav>-->
	</div>
</template>
<script src="./main.js"></script>
<style lang="stylus">
  section
    p
     & > img
      width: 100%
</style>
