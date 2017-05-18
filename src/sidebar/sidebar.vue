<template>
  <aside id="rightCol">
    <h2>Новости</h2>
    <div class="post" v-for="post in posts">
      <img :src="post.img" alt="">
      <h4>{{ post.title }}</h4>
      <router-link :to="'/' + langChoised + '/news/' + post.id" class="readmore">Подробнее</router-link>
    </div>
  </aside>
</template>

<script>
export default {
  props: ['langChoised'],
  data () {
    return {
      posts: [
        {
          title: 'Первая презентация Вискографа и Амилографа на международной конференция «Крахмал и крахмалопродукты: рынок возможностей»',
          img: './photos/pic1.jpg',
          id: 1,
          date: ''
        },
        {
          title: 'Управление реологическими свойствами вместе с CoonLab',
          img: './photos/pic3.jpg',
          id: 2,
          date: ''
        }
      ]
    }
  }
}
</script>

<style src="./main.styl" lang="stylus" />
