import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {ExpliquerComponent} from './expliquer/expliquer.component';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ExpliquerComponent
  ],
  imports: [
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    AppRoutingModule
  ]
})
export class CoreModule {

}
