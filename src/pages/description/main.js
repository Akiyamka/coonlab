import ruText from './content/ru.md'
import engText from './content/eng.md'
import sidebar from '~/src/sidebar/sidebar.vue'
export default {
  components: {
    ruText, engText, sidebar
  },
  props: ['lang'],
  data () {
    return {
 
    }
  }
}