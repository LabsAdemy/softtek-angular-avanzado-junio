import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthInterceptor } from './api/auth.interceptor';
import { ErrorInterceptor } from './api/error.interceptor';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { APP_VERSION, LoggerService, ONLY_ERRORS } from './logger.service';

// function loggerFactory(): LoggerBaseService {
//   if (environment.production) return new LoggerPlusService();
//   else return new LoggerService();
// }

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [HeaderComponent, FooterComponent],
  providers: [
    { provide: ONLY_ERRORS, useValue: true },
    { provide: APP_VERSION, useValue: '1.0.0' },
    { provide: LoggerService, useClass: LoggerService },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // { provide: LoggerBaseService, useFactory: loggerFactory }
  ],
})
export class CoreModule {}
