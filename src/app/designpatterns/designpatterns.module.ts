import { NgModule } from '@angular/core';
import { DesignPatternsComponent } from './designpatterns.component';
import { DesignPatternsRouterModule } from './designpatterns-router.module';
import { SingletonComponent } from './singleton/singleton.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DesignPatternsComponent,
    SingletonComponent
  ],
  imports: [
    SharedModule,
    DesignPatternsRouterModule
  ]
})
export class DesignPatternsModule { }
