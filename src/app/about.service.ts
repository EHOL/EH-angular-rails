import { Injectable } from '@angular/core';

import { About } from './about';
import { ABOUT } from './mock-aboutme'
import { MessageService } from './message.service';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AboutService {

  constructor(private messageService: MessageService) { }


getAboutme(): Observable<About[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('AboutService: fetched aboutme');
    return of(ABOUT);
  }
}


