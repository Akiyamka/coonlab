<template>
  <aside id="rightCol">
    <div class="post" v-for="post in posts">
      <img src="post.img" alt="">
      <h4>{{ post.title }}</h4>
      <router-link :to="'/' + langChoised + '/news/' + post.id"> Читать далее </router-link>
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
          img: '',
          id: 1,
          date: ''
        },
        {
          title: 'Управление реологическими свойствами вместе с CoonLab',
          img: '',
          id: 2,
          date: ''
        }
      ]
    }
  }
}
</script>

<style>

</style>
