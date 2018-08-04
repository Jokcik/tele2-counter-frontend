import { Component, OnInit } from '@angular/core';
import {Chart, Highcharts} from 'angular-highcharts';
import {IData, StaticsService} from '../statics/statics.service';
import * as moment from 'moment'

moment.locale("ru", );
Highcharts.setOptions({
  lang: <any>{
    loading: 'Загрузка...',
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    weekdays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    shortMonths: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Нояб', 'Дек'],
    exportButtonTitle: "Экспорт",
    printButtonTitle: "Печать",
    rangeSelectorFrom: "С",
    rangeSelectorTo: "По",
    rangeSelectorZoom: "Период",
    downloadPNG: 'Скачать PNG',
    downloadJPEG: 'Скачать JPEG',
    downloadPDF: 'Скачать PDF',
    downloadSVG: 'Скачать SVG',
    printChart: 'Напечатать график'
  }
});

const value = {
  chart: {
    zoomType: 'x'
  },
  title: {
    text: 'Просмотры stream-контента в час'
  },
  xAxis: {
    type: 'datetime',
    title: {
      text: 'Дата'
    },
    tickInterval: 60 * 3600 * 1000,
    labels: {
      formatter: function() {
        return moment(this.value).format("YYYY-MM-DD");
      }
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Просмотры'
    }
  },
  tooltip: {
    headerFormat: 'Дата и время: {point.x:%Y-%m-%d %H:%m}<br>',
    pointFormat: '{point.y} просмотров в час',
    shared: true
  },
  legend: {
    enabled: false
  },
  plotOptions: {
    series: {
      turboThreshold: 50
    },
    area: {
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1
        },
        stops: [
          [0, Highcharts.getOptions().colors[0]],
          [1, (<any>Highcharts.Color(Highcharts.getOptions().colors[0])).setOpacity(0).get('rgba')]
        ]
      },
      marker: {
        radius: 2
      },
      lineWidth: 1,
      states: {
        hover: {
          lineWidth: 1
        }
      },
      threshold: null
    }
  },

  series: []
};

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  public min: Date = new Date(Date.now() - 5 * 60 * 3600 * 1000);
  public max: Date = new Date();

  public chart1 = new Chart(value);
  public chart2 = new Chart({...value, title: {text: 'Среднее время просмотра stream-контента в час'}});
  public chart3 = new Chart({...value, title: {text: 'Просмотры video-контента в час'}});
  public chart4 = new Chart({...value, title: {text: 'Среднее время просмотра video-контента в час'}});

  constructor(private statService: StaticsService) {
  }

  async ngOnInit() {
    const viewers = await this.statService.getViewers();
    const channels = viewers.channels;
    const videos = viewers.videos;

    const arr1 = <number[][]>channels.map(val => ( [new Date(val.date), val.count] ));
    const arr2 = <number[][]>channels.map(val => ( [new Date(val.date), val.avg] ));
    const arr3 = <number[][]>videos.map(val => ( [new Date(val.date), val.count] ));
    const arr4 = <number[][]>videos.map(val => ( [new Date(val.date), val.avg] ));

    this.chart1.addSerie({ name: 'Стрим контент',  data: <any>arr1, type: 'area' });
    this.chart2.addSerie({ name: 'Стрим контент',  data: <any>arr2, type: 'area' });
    this.chart3.addSerie({ name: 'Видео контент',  data: <any>arr3, type: 'area' });
    this.chart4.addSerie({ name: 'Видео контент',  data: <any>arr4, type: 'area' });

    this.changeRange();
  }

  public changeRange() {
    this.chart1.ref.xAxis[0].setExtremes(+this.min, +this.max, true);
    this.chart2.ref.xAxis[0].setExtremes(+this.min, +this.max, true);
    this.chart3.ref.xAxis[0].setExtremes(+this.min, +this.max, true);
    this.chart4.ref.xAxis[0].setExtremes(+this.min, +this.max, true);
  }
}
