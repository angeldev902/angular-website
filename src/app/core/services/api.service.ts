import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { saveToLocalStorage } from '../utils/localStoreHelper';
import { endpoints } from '../config/endpoints-dictionary/dictionary';
import { MessagesService } from './messages.service';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient, private messagesService: MessagesService) { }

  //Auth method
  auth(endpoint:string, body: any): Observable<any> {
    const requestData = endpoints[`${endpoint}`];
    return this.httpClient.post<any>(`${environment.apiBaseUrl}${requestData.url()}`, body).pipe(tap(
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
    return this.httpClient.post<any>(`${environment.apiBaseUrl}${endpoint}`, body).pipe(tap(
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
    return this.httpClient.get<any>(`${environment.apiBaseUrl}${requestData.url(params)}`).pipe(tap(
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

  requestDelete(endpoint:string, params:any=null): Observable<any> {
    const requestData = endpoints[`${endpoint}`];
    return this.httpClient.delete<any>(`${environment.apiBaseUrl}${requestData.url(params)}`).pipe(tap(
      (res: any) => {
        if(res) {
          this.messagesService.message(res.message);
        }
      },(error: any) => {
        console.log('Ocurrio un error', error);
        this.messagesService.errorMessage(error);
      }
    ))
  };

}
