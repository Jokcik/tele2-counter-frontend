import {Injectable} from '@angular/core';
import {IResourceMethod, ResourceRequestMethod} from '@ngx-resource/core/src/Declarations';
import {ResourceAction} from '@ngx-resource/core';
import {AppResource} from './app-resource';

@Injectable()
export class AppCRUDResource<TQuery, TShort, TFull> extends AppResource {

  @ResourceAction()
  query: IResourceMethod<TQuery, TShort[]>;

  @ResourceAction({ path: '/{!_id}' })
  get: IResourceMethod<{ _id: any }, TFull>;

  @ResourceAction({ method: ResourceRequestMethod.Post })
  save: IResourceMethod<TFull, TFull>;

  @ResourceAction({ method: ResourceRequestMethod.Put, path: '/{!_id}'})
  update: IResourceMethod<TFull, TFull>;

  @ResourceAction({ method: ResourceRequestMethod.Delete, path: '/{!_id}'})
  remove: IResourceMethod<{ _id: any }, any>;

  // Alias to save
  create(data: TFull, callback?: (res: TFull) => any): Promise<TFull> {
    return this.save(data, callback);
  }

}
