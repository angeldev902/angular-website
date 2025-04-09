import { Injectable } from '@angular/core';
import { properties } from '../config/properties';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { saveToLocalStorage } from '../utils/localStoreHelper';
import { endpoints } from '../api-dictionary';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient, private messagesService: MessagesService) { }

  //Auth method
  auth(endpoint:string, body: any): Observable<any> {
    const requestData = endpoints[`${endpoint}`];
    return this.httpClient.post<any>(`${properties.api}${requestData.url()}`, body).pipe(tap(
      (res: any) => {
        if(res) {
          saveToLocalStorage('userData', res);
        }
      },(error: any) => {
        console.log('Ocurrio un error', error);
        this.messagesService.errorMessage(error);
      }
    ))
  };

  //Global methods
  requestPost(endpoint:string, body: any): Observable<any> {
    return this.httpClient.post<any>(`${properties.api}${endpoint}`, body).pipe(tap(
      (res: any) => {
        if(res) {
          //Se detendra el loader y se mostrara algun mensaje si es que se necesita
        }
      },(error: any) => {
        console.log('Ocurrio un error', error);
      }
    ))
  };


  requestGet(endpoint:string, params:any=null): Observable<any> {
    const requestData = endpoints[`${endpoint}`];
    return this.httpClient.get<any>(`${properties.api}${requestData.url(params)}`).pipe(tap(
      (res: any) => {
        if(res) {
          //Se detendra el loader y se mostrara algun mensaje si es que se necesita
        }
      },(error: any) => {
        console.log('Ocurrio un error', error);
        this.messagesService.errorMessage(error);
      }
    ))
  };

}
