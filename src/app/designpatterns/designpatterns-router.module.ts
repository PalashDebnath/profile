import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DesignPatternsComponent } from './designpatterns.component';
import { SingletonComponent } from './singleton/singleton.component';

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: DesignPatternsComponent,
        children: [
          {
            path: 'singleton',
            component: SingletonComponent
          },
          {
            path: '',
            redirectTo: 'singleton',
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
export class DesignPatternsRouterModule { }
