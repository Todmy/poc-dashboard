import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';

import {TechsModule} from './components/techs';

import {MainComponent} from './components/main/main';
import {HeaderComponent} from './components/header/header';
import {TitleComponent} from './components/title/title';
import {FooterComponent} from './components/footer/footer';
import {NgGridstack} from './components/ng-gridstack/ng-gridstack';
import {NgGridstackItem} from './components/ng-gridstack-item/ng-gridstack-item';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    TechsModule
  ],
  declarations: [
    RootComponent,
    MainComponent,
    HeaderComponent,
    TitleComponent,
    FooterComponent,
    NgGridstack,
    NgGridstackItem
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
