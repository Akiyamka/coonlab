<template>
  <div class="vue-wrapper">
    <article id="hard">
      <h1>{{ text.title }}</h1>
      <table>
        <tr>
          <td>{{ text.table.row1[0] }}</td>
          <td>{{ text.table.row1[1] }}</td>
        <tr>
          <td>{{ text.table.row2[0] }}</td>
          <td>{{ text.table.row2[1] }}</td>
        </tr>
        <tr>
          <td>{{ text.table.row3[0] }}</td>
          <td>{{ text.table.row3[1] }}</td>
        </tr>
        <tr>
          <td>{{ text.table.row4[0] }}</td>
          <td>{{ text.table.row4[1] }} <sup>-1</sup></td>
        </tr>
        <tr>
          <td>{{ text.table.row5[0] }}</td>
          <td>{{ text.table.row5[1] }}</td>
        </tr>
        <tr>
          <td>{{ text.table.row6[0] }}</td>
          <td>{{ text.table.row6[1] }}</td>
        </tr>
        <tr>
          <td>{{ text.table.row7[0] }}</td>
          <td>{{ text.table.row7[1] }} <br> {{ text.table.row7[2] }}</td>
        </tr>
        <tr>
          <td>{{ text.table.row8[0] }}</td>
          <td>{{ text.table.row8[1] }}</td>
        </tr>
        <tr>
          <td>{{ text.table.row9[0] }}</td>
          <td>{{ text.table.row9[1] }}</td>
        </tr>
      </table>
      <div class="wildcat">{{ text.discript }}</div>
      <div style="clear: both;"></div>
      <nav class="bottom-nav">
        <router-link :to="'/' + lang + '/decription#tabs'" v-smooth-scroll><span>{{text.btns.decription}}</span></router-link>
        <router-link :to="'/' + lang + '/soft#tabs'" v-smooth-scroll><span>{{text.btns.soft}}</span></router-link>
      </nav>
    </article>
  </div>
</template>


<script>
export default {
  props: ['lang'],
  data () {
    return {
      ruText: {
        title: "Технические характекристики",
        table: {
          row1: ["Объем пробы","Около 440 мл."],
          row2: ["Тепловая мощность","650W"],
          row3: ["Скорость нагрева/охлаждения","от 0.1 до 8.5 °С/мин*"],
          row4: ["Скорость вращения сенсора","120 мин"],
          row5: ["Измерение крутящего момента","в электронном виде"],
          row6: ["Соединение с компьютером","USB"],
          row7: ["Подключение к сети","230 В; 50/60 Гц + N + PE; 2.8 A","115 В; 50/60 Гц + PE; 5.6 A"],
          row8: ["Габариты (Ш x В х Г)","230 x 650 x 230 мм"],
          row9: ["Вес","Около 25 кг нетто"],
        },
        discript: "*для специальных применений в определенных участках цикла температура до 5 °С/мин",
        btns: {
          decription: "Описание",
          soft: "Программное обеспечение"
        }
		  },
      engText: {
        title: "Technical characteristics",
        table: {
          row1: ["Sample volume","approximately 440ml"],
          row2: ["Heating capacity","650W"],
          row3: ["Heating/cooling rate:","0.1 … 8.5°C/min*"],
          row4: ["Sensor rotating speed","120 min"],
          row5: ["Torque measurement","electronic"],
          row6: ["PC port","USB"],
          row7: ["Electric power supply","230 V; 50/60 Hz + N + PE; 2.8 A","115 V; 50/60 Hz + PE; 5.6 A"],
          row8: ["Dimensions ((W × H × D)","230 x 650 x 230 mm"],
          row9: ["Net weight","approx. 20kg"],
        },
        discript: "* for special applications in certain sections of the temperature cycle up to 5°C/min",
        btns: {
          decription: "Description",
          soft: "Software"
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