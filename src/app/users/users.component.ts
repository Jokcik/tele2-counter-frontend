import {Component, OnInit} from '@angular/core';
import {StaticsService} from '../statics/statics.service';
import {Chart} from 'angular-highcharts';
import {options} from '../charts/charts.component';
import {UtilsService} from '../core/utils';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public nickname: string = 'letmeplay';
  public chart1 = new Chart({...options, title: {text: 'Активность пользователей на канале стримера'}, tooltip: {...options.tooltip, pointFormat: 'в среднем {point.y} просм. час' }});
  public chart2 = new Chart({...options, title: {text: 'Активность пользователя на сайте'}, tooltip: {...options.tooltip, pointFormat: 'в среднем {point.y} просм. час' }} );

  constructor(private statService: StaticsService,
              private utils: UtilsService) {
  }

  async ngOnInit() {
    this.load();
  }

  public async load() {
    try {
      const stat = await this.statService.getStatStreamer({ nickname: this.nickname });
      stat.activityChannel = this.utils.roundPoints(stat.activityChannel, ['count', 'avg'], 60);
      stat.activitySite = this.utils.roundPoints(stat.activitySite, ['count', 'avg'], 60);

      const arr1 = this.utils.setEmptyPoint(stat.activityChannel);
      const arr2 = this.utils.setEmptyPoint(stat.activitySite);

      for (let i = 0; i < this.chart1.ref.series.length; ++i) {
        this.chart1.ref.series[i].remove(true);
      }

      for (let i = 0; i < this.chart2.ref.series.length; ++i) {
        this.chart2.ref.series[i].remove(true);
      }

      this.chart1.ref.setTitle({text: `Активность пользователей на канале стримера ${this.nickname}`});
      this.chart1.addSerie({ name: 'Стрим контент',  data: <any>arr1, type: 'area' });

      this.chart2.ref.setTitle({text: `Активность пользователя на сайте ${this.nickname}`});
      this.chart2.addSerie({ name: 'Стрим контент',  data: <any>arr2, type: 'area' });
    } catch (e) {
      console.log(e);
      window.alert('Не найдено имя');
    }

  }
}
