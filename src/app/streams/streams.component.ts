import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {IStreamStat, StreamsService} from './streams.service';

const today = new Date();
today.setHours(0, 0, 0, 0);

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StreamsComponent implements OnInit {
  public nickname = 'SerzhPlay';
  public fromDate: Date = today;
  public toDate: Date = today;
  public result: IStreamStat[];
  public totalHours: string;

  constructor(private streamsService: StreamsService,
              private cd: ChangeDetectorRef) {
  }

  async ngOnInit() {

  }

  async load() {
    const strToTimestamp = str => (new Date(str)).getTime();
    const msToHours = ms => (ms / (60 * 60 * 1000));
    const result = await this.streamsService.getStatStreamer({nickname: this.nickname, from: this.fromDate, to: this.toDate});

    result.map(item => item.hours = msToHours(strToTimestamp(item.end) - strToTimestamp(item.start)));

    this.result = result;
    this.totalHours = result.reduce((sum, line) => sum + line.hours, 0).toFixed(2);

    this.cd.detectChanges();
  }

}
