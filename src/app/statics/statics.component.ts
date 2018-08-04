import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {IStat, StaticsService} from './statics.service';

@Component({
  selector: 'app-statics',
  templateUrl: './statics.component.html',
  styleUrls: ['./statics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StaticsComponent implements OnInit {
  public video: IStat = {};
  public channel: IStat = {};

  constructor(private staticsService: StaticsService,
              private cd: ChangeDetectorRef) {
  }

  async ngOnInit() {
    const result = await this.staticsService.getBasic();
    this.video = result.video;
    this.channel = result.channel;

    this.cd.detectChanges();
  }

}
