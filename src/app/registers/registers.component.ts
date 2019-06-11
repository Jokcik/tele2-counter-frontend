import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {IStreamStat, RegistersService} from './registers.service';
import {first} from 'rxjs/operators';

const today = new Date();
today.setHours(0, 0, 0, 0);

@Component({
  selector: 'app-streams',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistersComponent implements OnInit {
  public fromDate: Date = today;
  public toDate: Date = today;
  public total: number;

  constructor(private registersService: RegistersService,
              private cd: ChangeDetectorRef) {
  }

  async ngOnInit() {

  }

  async load() {
    const strToTimestamp = str => (new Date(str)).getTime();
    const msToHours = ms => (ms / (60 * 60 * 1000));
    this.total = await this.registersService.getRegistersUser({from: this.fromDate, to: this.toDate});

    this.cd.detectChanges();
  }

}
