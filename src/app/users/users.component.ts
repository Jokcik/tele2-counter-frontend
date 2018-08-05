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
  public chart1 = new Chart({...options, title: {text: 'Активность пользователей на канале стримера'}});

  constructor(private statService: StaticsService,
              private utils: UtilsService) {
  }

  async ngOnInit() {
    this.load();
  }

  public async load() {
    try {
      const stat = await this.statService.getStatStreamer({ nickname: this.nickname });
      const arr1 = this.utils.setEmptyPoint(stat);

      for (let i = 0; i < this.chart1.ref.series.length; ++i) {
        this.chart1.ref.series[i].remove(true);
      }

      this.chart1.ref.setTitle({text: `Активность пользователей на канале стримера ${this.nickname}`});
      this.chart1.addSerie({ name: 'Стрим контент',  data: <any>arr1, type: 'area' });
    } catch (e) {
      window.alert('Не найдено имя');
    }

  }
}
