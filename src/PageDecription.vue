<template>
  <div class="vue-wrapper">
    <article id="decription">
      <div id="content">
        <h1>{{ text.title }}</h1>
        <h2>{{ text.paragraph_1.subtitle }}</h2>
        <p>{{ text.paragraph_1.text }}</p>
        <ul>
          <li>{{ text.paragraph_1.list[0] }}</li>
          <li>{{ text.paragraph_1.list[1] }}</li>
          <li>{{ text.paragraph_1.list[2] }}</li>
          <li>{{ text.paragraph_1.list[3] }}</li>
          <li>{{ text.paragraph_1.list[4] }}</li>
          <li>{{ text.paragraph_1.list[5] }}</li>
          <li>{{ text.paragraph_1.list[6] }}</li>
        </ul>

        <h2>{{ text.paragraph_2.subtitle }}</h2>
        <p>{{ text.paragraph_2.text[0] }}</p>
        <p>{{ text.paragraph_2.text[1] }}</p>


        <h2>{{ text.paragraph_3.subtitle }}</h2>
        <ul>
          <li>{{ text.paragraph_3.list[0] }}</li>
          <li>{{ text.paragraph_3.list[1] }}</li>
          <li>{{ text.paragraph_3.list[2] }}</li>
          <li>{{ text.paragraph_3.list[3] }}</li>
          <li>{{ text.paragraph_3.list[4] }}</li>
          <li>{{ text.paragraph_3.list[5] }}</li>
          <li>{{ text.paragraph_3.list[6] }}</li>
          <li>{{ text.paragraph_3.list[7] }}</li>
          <li>{{ text.paragraph_3.list[8] }}</li>
          <li>{{ text.paragraph_3.list[9] }}</li>
        </ul>
      </div>
    </article>
    <aside id="rightCol">
      <div id="btn-lightbox" class="demo">
        <img src="./assets/graph_s.png" alt="Пример кривой"><i class="ico_zoom"></i>
      </div>
      <ul>
        <li><span>А</span> - {{ text.rightBar.aMark }}</li>
        <li><span>B</span>  - {{ text.rightBar.bMark }}</li>
        <li><span>B-C</span> - {{ text.rightBar.bcMark }}</li>
        <li><span>D</span>  - {{ text.rightBar.dMark }}</li>
      </ul>

    </aside>
    <div style="clear: both;"></div>
    <nav class="bottom-nav">
      <router-link :to="'/' + lang + '/hard#tabs'" v-smooth-scroll><span>{{text.btns.tech}}</span></router-link>
      <router-link :to="'/' + lang + '/soft#tabs'" v-smooth-scroll><span>{{text.btns.soft}}</span></router-link>
    </nav>
  </div>
</template>


<script>
export default {
  props: ['lang'],
  data () {
    return {
      ruText: {
        rightBar: {
          aMark: "Начало клейстеризации",
          bMark: "Макс. клейстеризация",
          bcMark: "Вязкость во время выдержки",
          dMark: "Вязкость в конце охлаждения"
        },
        title: "Вискограф Coonlab",
        paragraph_1: {
          subtitle: "Применение",
          text: "Вискограф Coonlab представляет собой стандарный прибор для измерения вязкости крахмала и продуктов, содержащих крахмал, используемый во всем мире. Данный прибор измеряет натуральный крахмал - пшеницы, кукурузы, картофеля, риса – также, как и все типы модифицированного крахмала, надежно и с высокой воспроизводимостью, обеспечивая при этом полный профиль реологических свойств продуктов:",
          list: [
            "Клейстеризация и свойства клейстеризации крахмала и крахмалосодержащих продуктов",
            "Вязкость при низких и высоких температурах",
            "Стабильность загустителей и связующих компонентов",
            "Кислотная стабильность крахмала",
            "Тестирование экструдата",
            "Измерение технического крахмала",
            "Измерение жидкостей, суспензий, пастообразных масс и пр."
          ]
        },
        paragraph_2: {
          subtitle: "Принцип работы",
          text: [
            "Проба нагревается внутри измерительного стакана и снова охлаждается при контролируемых условиях. В комбинации с удобной программой на основе Windows, встроенный, саморегулирующийся температурный датчик позволяет программировать и сохранять температурный профиль скорости нагрева и охлаждения, равной 0.5...3°C / мин. Измерительный датчик, погруженный в пробу, вращается и измеряет силу вращения в зависимости от вязкости пробы в деже. Данная сила измеряется как вращательный момент.",
            "В результате измерения получаются надежные и воспроизводимые данные о реологических свойствах Вашего материала - густая или жидкая варка, различные свойства загустения, клейстеризация, низкая или высокая вязкость при высоких или низких температурах, стабильность и пр."
          ]
        },
        paragraph_3: {
          subtitle: "Преимущества",
          list: [
            "Автоматическая процедура тестирования",
            "Сохранение любого количества температурных программ",
            "Скорость нагрева / охлаждения, равная 0.5...3°C/мин.",
            "Электронное регулирование скорости (0 - 300 мин-1)",
            "Свободный выбор диапазонов измерения",
            "Автоматическое масштабирование диаграммы",
            "Оценивание результатов в BU, мПа*мин.",
            "Сохранение трех последний измерений в памяти прибора",
            "Возможность передачи результатов по USB на компьютер",
            "Распечатка полученных результатов",
          ]
        },
        btns: {
          tech: "Технические характекристики",
          soft: "Программное обеспечение"
        }
		  },
      engText: {
        rightBar: {
          aMark: "Начало клейстеризации",
          bMark: "Макс. клейстеризация",
          bcMark: "Вязкость во время выдержки",
          dMark: "Вязкость в конце охлаждения"
        },
        title: "The COONLAB Viscograph",
        paragraph_1: {
          subtitle: "Employment",
          text: "The COONLAB Viscograph is a worldwide standard instrument for measuring viscosity of starch and products containing starch. This instrument measures natural starches – wheat, corn, potato, and rice – as well as all modified types of starches. The examination process is highly efficient and  provides the complete profile of rheological properties of the products:",
          list: [
            "Gelatinization of starch and starch-containing foods and its characteristics",
            "Viscosity at low and high temperatures",
            "Stability  of thickening agents and binders",
            "Acid stability of starch",
            "Extrudate testing",
            "Measurement  of industrial starch",
            "Measurement of liquids, suspensions, pasty mass, etc."
          ]
        },
        paragraph_2: {
          subtitle: "Operation principles",
          text: [
            "The sample is heated up within a rotating stainless steel bowl and cooled down again, both under controlled conditions. Together with the comfortable Windows software, the integrated, self-optimizing temperature controller allows programming and storage of any temperature profiles with heating/ cooling rates of 0.5...3 °C/min. A measuring sensor reaching into the sample is deflected according to the viscosity of the sample in the bowl. This deflection is measured as torque.",
            "The test will provide you with a reliable and reproducible profile of rheological properties of your product - baking behaviour, thickening properties, low or high viscosity at low or high temperatures, stability, etc."
          ]
        },
        paragraph_3: {
          subtitle: "Advantages",
          list: [
            "Automatic testing procedure",
            "Multiple temperature programmes",
            "Heating/cooling rates of 0.5...3°C/min.",
            "Electronic speed control  (0...300 min-1)",
            "Full-scale measurement range",
            "Automatic dimensional scaling of diagrams",
            "Results are presented in BU and mPa*min",
            "Three latest tests are stored in the instrument memory",
            "Results can be transmitted to the computer via USB",
            "Results can be printed",
          ]
        },
        btns: {
          tech: "Technical characteristics",
          soft: "Software",
        }
		  }
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