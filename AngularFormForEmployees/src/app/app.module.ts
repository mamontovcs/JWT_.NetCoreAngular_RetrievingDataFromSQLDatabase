import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormComponent} from './form/form.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FooterComponent} from './footer/footer.component';
import {MatListModule} from '@angular/material/list';
import {HeaderComponent} from './header/header.component';
import {ACCESS_TOKEN_KEY} from './services/auth.service';
import {environment} from '../environments/environment';
import {ACCOUNTS_API_URL, ANSWERS_API_URL, AUTH_API_URL} from './app-injection-tokens';
import {AdminComponent} from './admin/admin.component';
import {MatCardModule} from '@angular/material/card';
import {LoginComponent} from './login/login.component';
import {JwtModule} from '@auth0/angular-jwt';
import {HttpClientModule} from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

export function tokenGetter() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FooterComponent,
    HeaderComponent,
    AdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,

    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: [environment.tokenWhiteListedDomain]
      }
    }),
    MatTableModule

  ],
  providers: [
    {
      provide: ANSWERS_API_URL,
      useValue: environment.repositoryApi
    },
    {
      provide: ACCOUNTS_API_URL,
      useValue: environment.repositoryApi
    },
    {
      provide: AUTH_API_URL,
      useValue: environment.authApi
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
