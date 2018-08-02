import {Injectable} from '@angular/core';

@Injectable()
export class SectionServiceClient {
  createSection = section =>
    fetch('http://localhost:3000/', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    })
}
