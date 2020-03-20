import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ZMarkdownModule } from '../../projects/z-markdown/src/lib/z-markdown.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ShowComponent } from './show/show.component';

@NgModule( {
  declarations: [
    AppComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    ZMarkdownModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
