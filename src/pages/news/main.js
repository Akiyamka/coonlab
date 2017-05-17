import post1 from './posts/post_1.md'
import post2 from './posts/post_2.md'
import sidebar from '~/src/sidebar/sidebar.vue'

export default {
  components: {
    post1, post2, sidebar
  },
  props: ['lang', 'id'],
  data () { return { } }
}