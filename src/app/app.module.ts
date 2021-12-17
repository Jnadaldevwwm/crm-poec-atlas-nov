import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ErrorsInterceptor } from './core/interceptors/errors.interceptor';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    {provide: HTTP_INTERCEPTORS,useClass: ErrorsInterceptor, multi: true},
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
