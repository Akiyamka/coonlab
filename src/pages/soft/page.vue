<template>
<div class="vue-wrapper">
  <article id="soft">
    <div id="leftCol">
      <ru-text v-if="lang == 'ru'" />
      <eng-text v-if="lang == 'en'" />
    </div>
    </article>  
    <aside id="rightCol">
      <div id="btn-lightbox" class="demo">
        <img src="../../assets/graph_s.png" alt="Пример кривой"><i class="ico_zoom"></i>
      </div>
    </aside>
    <div style="clear: both;"></div>
    <!--<nav class="bottom-nav">
      <router-link :to="'/' + lang + '/decription#tabs'" v-smooth-scroll><span>{{text.btns.decription}}</span></router-link>
      <router-link :to="'/' + lang + '/hard#tabs'" v-smooth-scroll><span>{{text.btns.tech}}</span></router-link>
    </nav>-->
	</div>
</template>
<script src="./main.js"></script>