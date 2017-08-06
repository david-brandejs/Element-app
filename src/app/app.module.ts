import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { provideAuth } from 'angular2-jwt';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Http, RequestOptions } from '@angular/http';

import './rxjs-extensions';
import { AppComponent } from './app.component';
import { routing, routedComponents } from './app.routing';
import { HeroService } from './hero.service';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

import { SimpleNotificationsModule } from 'angular2-notifications';
import { FeedbackService } from './feedback.service';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";


export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
          tokenGetter: (() => localStorage.getItem('token')),
          globalHeaders: [{'Content-Type':'application/json'}],
     }), http, options);
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    SimpleNotificationsModule.forRoot(),
    SlimLoadingBarModule.forRoot(),
    MaterialModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FlexLayoutModule
  ],
  declarations: [
    AppComponent,
    routedComponents
  ],
  providers: [
    HeroService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    AuthService,
    AuthGuard,
    FeedbackService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
