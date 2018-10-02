import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {IRefererStat, ReferersService} from './referers.service';

const today = new Date();
today.setHours(0, 0, 0, 0);

@Component({
  selector: 'app-referals',
  templateUrl: './referers.component.html',
  styleUrls: ['./referers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReferersComponent implements OnInit {
  public nickname = 'Pavel';
  public fromDate: Date = today;
  public toDate: Date = today;
  public result: IRefererStat[];

  constructor(private referersService: ReferersService,
              private cd: ChangeDetectorRef) {
  }

  async ngOnInit() {

  }

  async load() {
    const result = await this.referersService.getRefererStat({nickname: this.nickname, from: this.fromDate, to: this.toDate});
    this.result = result;

    this.cd.detectChanges();
  }

}
