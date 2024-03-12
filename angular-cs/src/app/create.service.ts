import { HttpClient } from '@angular/common/http';
import { FactoryProvider, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateService<T> {

  constructor(private http:HttpClient) { }
  add(request:any):Promise<T>{
    return lastValueFrom(this.http.post<T>("http://localhost:3000",request));
  }
}
