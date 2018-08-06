import {Injectable} from '@angular/core';
import {IData} from '../statics/statics.service';

@Injectable({providedIn: 'root'})
export class UtilsService {

  constructor() {
  }

  public roundPoints(array: any[], fields: any[], divider: number) {
    const result = array.slice();
    result.forEach(value => fields.forEach(field => value[field] = Math.ceil(value[field] / divider)));

    return result;
  }

  public setEmptyPoint(data: IData[], field: string = 'count') {
    if (!data || !data.length) { return [] }

    const result = [];
    const stepTime = 3600 * 1000 + 20;

    let lastDate = +new Date(data[0].date);
    result.push([new Date(lastDate), data[0][field]]);
    for (let i = 1; i < data.length; ++i) {
      let currentDate = +new Date(data[i].date);


      while (currentDate - stepTime > lastDate) {
        lastDate += stepTime;

        if (currentDate - stepTime <= lastDate) {
          result.push([new Date(currentDate), data[i][field]]);
          lastDate = currentDate;
        } else {
          result.push([new Date(lastDate), 0])
        }
      }
    }

    return result;
  }
}
