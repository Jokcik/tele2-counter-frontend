import {Injectable} from '@angular/core';
import {IResourceMethod, ResourceAction, ResourceParams} from '@ngx-resource/core';
import {AppResource} from '../core/resource/app-resource';

export interface IStat {
  qty?: number;
  count?: number;
}

export interface IData {
  date: Date;
  count: number;
  avg: number;
}

export interface IBasicStat {
  video?: IStat;
  channel?: IStat;
  regUser?: number;
  offertas?: number;
  premium?: number;
  activeChannel?: number;
}

export interface IViewersStat {
  videos: IData[];
  channels: IData[];
}

export interface IStatStreamer {
  activityChannel: IData[];
  activitySite: IData[];
}

@Injectable({providedIn: 'root'})
@ResourceParams({pathPrefix: 'statistics'})
export class StaticsService extends AppResource {
  @ResourceAction({path: '/basic'})
  getBasic: IResourceMethod<void, IBasicStat>;

  @ResourceAction({path: '/viewers'})
  getViewers: IResourceMethod<void, IViewersStat>;

  @ResourceAction({path: '/viewers/{!:nickname}'})
  getStatStreamer: IResourceMethod<{ nickname: string }, IStatStreamer>;
}
