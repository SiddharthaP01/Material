import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _data: HttpClient) { }
  getData()
  {
    let url="https://reqres.in/api/users?page=2";
    return this._data.get<any>(url);
  }
}
