import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AngularComponent } from './angular.component';
import { ComponentComponent } from './component/component.component';

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AngularComponent,
        children: [
          {
            path: 'component',
            component: ComponentComponent
          },
          {
            path: '',
            redirectTo: 'component',
            pathMatch: 'full'
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AngularRouterModule { }
