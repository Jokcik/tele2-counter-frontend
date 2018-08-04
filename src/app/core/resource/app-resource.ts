import {
  IResourceAction,
  IResourceActionInner,
  IResourceResponse,
  Resource,
  ResourceGlobalConfig,
  ResourceHandler,
} from '@ngx-resource/core';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {LocalStorageService} from '../local-storage';

ResourceGlobalConfig.url = environment.url;

interface ISuccessResponse {
  response: any;
}


interface IErrorResponse {
  error: { message: string };
}

export interface ApiResponse extends IErrorResponse, ISuccessResponse {
  success: boolean;
}

@Injectable()
export class AppResource extends Resource {
  constructor(handler: ResourceHandler,
              private localStorageService: LocalStorageService) {
    super(handler);
  }


  $getHeaders(actionOptions?: IResourceAction): any | Promise<any> {
    actionOptions.headers = { Authorization: 'Bearer ' + this.localStorageService.getToken() };

    return super.$getHeaders(actionOptions);
  }

  protected $handleSuccessResponse(options: IResourceActionInner, resp: IResourceResponse): any {
    const result: ApiResponse = super.$handleSuccessResponse(options, resp);
    if (!result.success) {
      throw new Error(result.error.message);
    }

    return result.response;
  }
}
