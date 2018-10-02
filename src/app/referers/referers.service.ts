import {Injectable} from '@angular/core';
import {IResourceMethod, ResourceAction, ResourceParams} from '@ngx-resource/core';
import {AppResource} from '../core/resource/app-resource';

export interface IRefererStat {
  type: string;
  createdAt: string;
  user: any;
}

@Injectable({providedIn: 'root'})
@ResourceParams({pathPrefix: 'statistics'})
export class ReferersService extends AppResource {
  @ResourceAction({path: '/referers/'})
  getRefererStat: IResourceMethod<{ nickname: string, from: Date, to: Date }, IRefererStat[]>;
}
