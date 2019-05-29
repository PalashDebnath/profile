import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'pd-detail',
    templateUrl: './detail.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./detail.component.css']
})
export class DetailComponent {
    authorTitle: string = 'Palash Debnath - Software Developer';
    authorIntroduction: string = 'Experience working in multi-disciplinary teams through the development and maintenance phases of software delivery life cycle. Currently working in Agile Scrum team.';
    authorEmail: string = 'palashdebnath89@gamil.com';

    constructor(private modalService: NgbModal) {}

    openBackDropCustomClass(content) {
        this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
    }

    openVerticallyCentered(content) {
        this.modalService.open(content, { centered: true, size: 'lg' });
    }
}