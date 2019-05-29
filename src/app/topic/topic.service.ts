import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITopic } from './topic';

/*To make the service available to root pass an object with {providedIn: 'root'}.
  Providing at root level angular injector can dependency inject to any component in the application
  Other words you can also make the service available for a component and it's child,
  in that case you need to provide it on component itself.
*/
@Injectable()
export class TopicService {
    constructor(private http: HttpClient) {}
    private topicURL = 'assets/topics.json';

    getTopic(): Observable<ITopic[]> {
        return this.http.get<ITopic[]>(this.topicURL);
    } 
}