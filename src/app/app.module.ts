import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

import { APP_ROUTES } from './adminpro.routes';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CuentasService } from './services/cuentas.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    PagesModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    APP_ROUTES
  ],
  providers: [
    CuentasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
