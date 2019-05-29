import { NgModule } from '@angular/core';
import { AngularComponent } from './angular.component';
import { ComponentComponent } from './component/component.component';
import { SharedModule } from '../shared/shared.module';
import { AngularRouterModule } from './angular-router.module';

@NgModule({
  declarations: [
    AngularComponent,
    ComponentComponent
  ],
  imports: [
    SharedModule,
    AngularRouterModule
  ],
  exports: [
    AngularComponent
  ]
})
export class AngularModule { }
