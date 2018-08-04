import {Injectable} from '@angular/core';
import {IResourceMethod, ResourceAction, ResourceParams} from '@ngx-resource/core';
import {AppResource} from '../core/resource/app-resource';

export interface IStat {
  qty?: number;
  count?: number;
}

export interface IBasicStat {
  video: IStat,
  channel: IStat,
}

@Injectable({providedIn: 'root'})
@ResourceParams({pathPrefix: 'statistics'})
export class StaticsService extends AppResource {
  @ResourceAction({path: '/basic'})
  getBasic: IResourceMethod<void, IBasicStat>;
}
