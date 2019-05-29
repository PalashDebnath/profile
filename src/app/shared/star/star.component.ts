import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

/*This component is a nested component and can receive or send back data from the container/parent component */
@Component({
    selector: 'pd-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    starWidth: number;
    @Input() rating: number;
    @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 90 / 5;
    }

    onClick(): void {
        //not yet fully implemented!!
        this.notify.emit('Clicked!');
    }
}