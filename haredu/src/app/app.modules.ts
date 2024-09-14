import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TranslocoModule } from '@ngneat/transloco';
import { TranslocoRootModule } from '#core/translate.module';
import { ShareModule } from '#components/share/share.module';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { SocketIoModule } from 'ngx-socket-io';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtInterceptor } from '#core/jwt.interceptor';
import { ErrorInterceptor } from '#core/error.interceptor';
import { HttpErrorHandler } from '#services/http-error-handler.service';
import { DialogComponent } from '#components/core/dialog/dialog.component';
import { AppHttpClient } from '#services/app-http-client.service';
import { AuthService } from '#services/auth.service';
import { BaseComponent } from '#components/core/base/base.component';
import { ToastComponent } from '#components/core/toast/toast.component';
import { MainLayoutComponent } from '#components/layout/main-layout/main-layout.component';
import { UserRepository } from '#repositories/user.repository';
import { AuthRepository } from '#repositories/auth.repository';

@NgModule({
  declarations: [AppComponent, BaseComponent, MainLayoutComponent],
  imports: [
    ShareModule,
    BrowserModule,
    MatIconModule,
    SocketIoModule,
    TranslocoModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoRootModule,
    BrowserAnimationsModule,
  ],
  providers: [
    HttpErrorHandler,
    DialogComponent,
    ToastComponent,
    AppHttpClient,
    AuthService,
    UserRepository,
    AuthRepository,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
