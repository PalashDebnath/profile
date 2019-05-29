import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './shared/pagenotfound/page-not-found.component';
import { TopicComponent } from './topic/topic.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      {
        path: 'topics',
        component: TopicComponent
      },
      {
        path: 'topics/angular',
        loadChildren: './angular/angular.module#AngularModule'
      },
      {
        path: 'topics/designpatterns',
        loadChildren: './designpatterns/designpatterns.module#DesignPatternsModule'
      },
      { 
        path: '',
        redirectTo: 'topics',
        pathMatch: 'full'
      },
      { 
        path: '**',
        component: PageNotFoundComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
