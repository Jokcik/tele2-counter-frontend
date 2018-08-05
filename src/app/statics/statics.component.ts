import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {IBasicStat, IStat, StaticsService} from './statics.service';

@Component({
  selector: 'app-statics',
  templateUrl: './statics.component.html',
  styleUrls: ['./statics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StaticsComponent implements OnInit {
  public video: IStat = {};
  public channel: IStat = {};
  public result: IBasicStat = {};

  constructor(private staticsService: StaticsService,
              private cd: ChangeDetectorRef) {
  }

  async ngOnInit() {
    const result = await this.staticsService.getBasic();
    this.video = <IStat>result.video;
    this.channel = <IStat> result.channel;
    this.result = result;

    this.cd.detectChanges();
  }

}
