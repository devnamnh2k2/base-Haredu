import { Injectable } from '@angular/core';
import { Repository } from './repository';
import { AppHttpClient } from '#services/app-http-client.service';
import { Observable } from 'rxjs';
import { IResponse } from '#interfaces/index';
import { getCookie } from '#utils/cookie.helper';
import { STRING } from '#utils/const';

@Injectable()
export class AuthRepository extends Repository {
  constructor(httpClient: AppHttpClient) {
    super(httpClient);
  }

  renewToken(): Observable<IResponse<string>> {
    return this.httpClient.post('/auth/renew-token', {
      refreshToken: getCookie(STRING.REFRESH_TOKEN),
    });
  }

  confirmMail(token: string): Observable<IResponse<string>> {
    return this.httpClient.post('/auth/confirm', {
      token,
    });
  }

  logout() {
    return this.httpClient.post('/auth/logout');
  }
}
