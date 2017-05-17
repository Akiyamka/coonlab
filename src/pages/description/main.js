import ruText from './content/ru.md'
import engText from './content/eng.md'
export default {
  components: {
    ruText, engText
  },
  props: ['lang'],
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
        },
      ]
    }
  }
}