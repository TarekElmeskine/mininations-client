import {NgModule} from '@angular/core';
import {PreloadAllModules, Route, RouterModule} from '@angular/router';
import {HomeComponent} from './core/home/home.component';
import {HeaderComponent} from './core/header/header.component';
import {ExpliquerComponent} from './core/expliquer/expliquer.component';

const appRoutes: Route [] = [
  {path: '', component: HomeComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'expliquer', component: ExpliquerComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]

})
export class AppRoutingModule {

}
