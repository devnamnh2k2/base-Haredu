import { Injectable } from '@angular/core';
import { Repository } from './repository';
import { AppHttpClient } from '#services/app-http-client.service';
import { IAccount, IChangePassword, ILoginRequest, ILoginResponse } from '#interfaces/account.interface';
import { Observable, map } from 'rxjs';
import { IResponse } from '#interfaces/index';
import { BaseQueryRequest, BaseResponseRecords } from '#interfaces/api.interface';

@Injectable()
export class UserRepository extends Repository {
  constructor(httpClient: AppHttpClient) {
    super(httpClient);
  }

  login(data: ILoginRequest): Observable<IResponse<ILoginResponse>> {
    return this.httpClient.post('/auth/login', data);
  }

  changePassword(data: IChangePassword): Observable<IResponse<ILoginResponse>> {
    return this.httpClient.post('/auth/change-password', data);
  }

  forgotPassword(email: string): Observable<IResponse<boolean>> {
    return this.httpClient.post('/auth/forgot-password', { email });
  }

  getMe(): Observable<IResponse<IAccount>> {
    return this.httpClient.get('/users/get-me');
  }

  getAllUser(params: BaseQueryRequest) {
    return this.httpClient.get<BaseResponseRecords<IAccount>>('/user', params).pipe(map((res) => res.data));
  }
}
