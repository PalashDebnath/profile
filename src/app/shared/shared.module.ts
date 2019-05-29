import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLink, faStar, faTimesCircle, faHome } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faCopyright } from '@fortawesome/free-regular-svg-icons';

import { StarComponent } from './star/star.component';
import { PageNotFoundComponent } from './pagenotfound/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    StarComponent,
    PageNotFoundComponent,
    FooterComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbModule
  ],
  exports: [
    StarComponent,
    PageNotFoundComponent,
    FooterComponent,
    DetailComponent,
    FontAwesomeModule,
    CommonModule,
    NgbModule
  ]
})
export class SharedModule { 
  constructor() {
    library.add(faEnvelope, faCopyright, faStar, faLink, faTimesCircle, faHome);
  }
}
