<template>
<div class="vue-wrapper">
  <article id="soft">
    <div id="leftCol">
      <h1>{{ text.title }}</h1>
      <p class="atention">{{ text.atention }}</p>
      <p>{{ text.paragraph}}</p>
      <ol>
        <li>{{ text.list[0] }}</li>
        <li>{{ text.list[1] }}</li>
        <li>{{ text.list[2] }}</li>
        <li>{{ text.list[3] }}</li>
        <li>{{ text.list[4] }}</li>
      </ol>
      <p>{{ text.text[0] }}</p>

      <p>{{ text.text[1] }}</p>
      <ol>
        <li>{{ text.list2[0] }}</li>
        <li>{{ text.list2[1] }}</li>
        <li>{{ text.list2[2] }}</li>
        <li>{{ text.list2[3] }}</li>
      </ol>

      <p class="atention">{{ text.atention2 }}</p>
    </div>
    </article>  
    <aside id="rightCol">
      <div id="btn-lightbox" class="demo">
        <img src="./assets/graph_s.png" alt="Пример кривой"><i class="ico_zoom"></i>
      </div>
    </aside>
    <div style="clear: both;"></div>
    <nav class="bottom-nav">
      <router-link :to="'/' + lang + '/decription#tabs'" v-smooth-scroll><span>{{text.btns.decription}}</span></router-link>
      <router-link :to="'/' + lang + '/hard#tabs'" v-smooth-scroll><span>{{text.btns.tech}}</span></router-link>
    </nav>
	</div>
</template>


<script>
export default {
  props: ['lang'],
  data () {
    return {
      ruText: {
        title: "Программное обеспечение",
        atention: "Для правильной работы программы необходимо установить USB драйвер с установочного CD диска.",
        paragraph: "Для выгрузки записанных в приборе данных необходимо:",
        list: [
          "Скопировать с установочного диска  на компьютер программу Viskograph",
          "Запустить на компьютере программу Viskograph",
          "Выбрать порт обмена данными в поле «Порт»",
          "Нажать кнопку «Пуск», если все сделано правильно, то название кнопки изменится на «Стоп»",
          "В самом приборе зайти в меню 'ЗАПУСТИТЬ ТЕСТ' и нажать в нем кнопку «→PC».",
        ],
        text: [
          "Если все сделано правильно, то в внизу программы на компьютере вы увидите строку о текущем состоянии передачи, а в приборе в верхнем левом углу статус текущей передачи данных",
          "Чтобы распечатать полученные из прибора данные необходимо:"
        ],
        list2: [
          "Нажать кнопку «…» напротив надписи «Выбор файла для печати»",
          "Выбрать файл для отправки на печать",
          "Ввести, если необходимо, комментарий к графику в поле «Комментарий к графику»",
          "Нажать на кнопку печать",
        ],
        atention2: "Перед началом работы на Вискографе, тщательно изучите руководство по эксплуатации для прибора и управляющей программы.",
        btns: {
          decription: "Описание",
          tech: "Технические характекристики",
        }
		  },
      engText: {
        title: "Software",
        atention: "In order to ensure proper operation of the programme, it is necessary to install a USB driver from the CD.",
        paragraph: "For uploading the data recorded on the instrument, it is necessary to do the following:",
        list: [
          "Copy the Viscograph programme from the CD to your computer",
          "Start the Viscograph programme on your computer",
          "Select the data exchange port",
          "Click the “Start” button. If everything has been done correctly, it will change for “Stop”",
          "Get in the menu “START THE TEST” in the instrument itself and click “->PC”",
        ],
        text: [
          "If everything is correct, you will see the line indicating current status of the transfer at the bottom of the programme and the status of data transfer in the upper left-hand corner of the instrument.",
          "To print the data obtained from the instrument, do the following:"
        ],
        list2: [
          "Click «…» against надписи «Выбор файла для печати»",
          "Choose a file for printing",
          "If necessary, type the comment to the diagram in “Comments to diagram”",
          "Click the print button",
        ],
        atention2: "Carefully read the instructions for the instrument and the control programme before starting to operate on the Viscograph.",
        btns: {
          decription: "Description",
          tech: "Technical characteristics",
        }
		  },
    }
  },
  computed: {
    text: function() {
      if (this.lang == 'ru'){
        return this.ruText
      }
      else if (this.lang == 'en'){
        return this.engText
      };
    }
  }
}
</script>


<style>

</style>