import { Component } from '@angular/core';

@Component({
    selector: 'pd-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    footerTitle: string = new Date().getFullYear() + ' Palash Debnath';
}