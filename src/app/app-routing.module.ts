import {NgModule} from '@angular/core';
import {PreloadAllModules, Route, RouterModule} from '@angular/router';
import {HomeComponent} from './core/home/home.component';
import {HeaderComponent} from './core/header/header.component';
import {ExpliquerComponent} from './core/expliquer/expliquer.component';
import {CreerComponent} from './creer/creer.component';
import {ExplorerComponent} from './explorer/explorer.component';
import {ContactComponent} from './contact/contact.component';
import {SePresenterComponent} from './creer/se-presenter/se-presenter.component';

const appRoutes: Route [] = [
  {path: '', component: HomeComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'expliquer', component: ExpliquerComponent},
  {
    path: 'creer', component: CreerComponent, children: [
      {path: 'se-presenter', component: SePresenterComponent}
    ]
  },
  {path: 'explorer', component: ExplorerComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]

})
export class AppRoutingModule {

}
