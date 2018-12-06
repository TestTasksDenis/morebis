import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { UserInterface } from '../interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(private _http: HttpClient) {}

  getCurrentUser(): Observable<UserInterface> {
    return this._http.get<UserInterface>(`${environment.serverDomain}/user`);
  }
}
