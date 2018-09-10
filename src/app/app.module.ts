import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {CreerComponent} from './creer/creer.component';
import {ExplorerComponent} from './explorer/explorer.component';
import {ContactComponent} from './contact/contact.component';
import {SePresenterComponent} from './creer/se-presenter/se-presenter.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreerComponent,
    ExplorerComponent,
    ContactComponent,
    SePresenterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModules {
}
