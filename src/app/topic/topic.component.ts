import { Component, OnInit } from '@angular/core';
import { TopicService } from './topic.service';
import { ITopic } from './topic';

@Component({
    selector: 'pd-topic',
    templateUrl: './topic.component.html',
    styleUrls: ['./topic.component.css'],
    providers: [TopicService]
})
export class TopicComponent implements OnInit {

    //Dependency Injecting the TopicService into the component
    constructor(private topicService: TopicService){}
    topics: ITopic[];
    notifyMessage: string;
    onNotify(message: string): void {
        this.notifyMessage = message
    }

    ngOnInit() {
        this.topicService.getTopic().subscribe(
            topics => this.topics = topics
        );
    }
}