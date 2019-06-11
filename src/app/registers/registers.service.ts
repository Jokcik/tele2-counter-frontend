import {Injectable} from '@angular/core';
import {IResourceMethod, ResourceAction, ResourceParams} from '@ngx-resource/core';
import {AppResource} from '../core/resource/app-resource';

export interface IStreamStat {
  start: string;
  end: string;
  hours?: number;
}

@Injectable({providedIn: 'root'})
@ResourceParams({pathPrefix: 'statistics'})
export class RegistersService extends AppResource {
  @ResourceAction({path: '/registers'})
  getRegistersUser: IResourceMethod<{ from: Date, to: Date }, number>;
}
