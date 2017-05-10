import Vue from 'vue'
import App from './App.vue'
import PageDecription from './PageDecription.vue'
import PageHard from './PageHard.vue'
import PageSoft from './PageSoft.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

const mainpage = { template: '<router-view></router-view>' }

const routes = [
  { path: '/', component: App,
    children: [ 
      { path: ':lang/decription', component: PageDecription },
      { path: ':lang/hard', component: PageHard },
      { path: ':lang/soft', component: PageSoft },
    ],
    redirect: '/ru/decription'
  }
];

const router = new VueRouter({
  // mode: 'history', // remove # from url 
  linkActiveClass: "current",
  routes // short for routes: routes
})

new Vue({
  router,
  render: h => h(mainpage)
}).$mount('#app')

function test(e) {
  console.log('test')
  console.log(e);
}

function closeOther(except) {
    var menus = document.querySelectorAll('#top>header>div');

    for (var menu of menus) {
      if (except != menu) {
        menu.classList.remove('open');
      }
    };
}



function topMenu() {
  var top = document.querySelector('#top > header');
  var menus = document.querySelectorAll('#top>header>div');


  for (let menu of menus) {
    menu.onclick = function(event) {
      event.currentTarget.classList.toggle('open');
      closeOther(event.currentTarget);
      
    };
    console.log(menu)
    menu.addEventListener("mouseleave", function(event) {
      menu.classList.remove('open')
    });
  }

  // menus.onclick = function(event) {
  //   console.log(event.currentTarget)
  //   for (var menu of menus) {
  //     if (event.currentTarget == menu) {
  //       menu.classList.toggle('open');
  //     } else {
  //       menu.classList.remove('open');
  //     }
  //   }
  // }
}

document.addEventListener("DOMContentLoaded", topMenu);