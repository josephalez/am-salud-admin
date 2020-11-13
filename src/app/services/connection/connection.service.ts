import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { AppSettings } from '../../app.settings';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private http: HttpClient) { }

  public async postUrl(endpoint: string,data: any) {
    console.log("token found ",AppSettings.token)
    return await this.http
      .post(`${AppSettings.apiUrl}/api/${endpoint}`, data, {
        headers: new HttpHeaders({
        'Authorization': await AppSettings.getToken(),
        'Accept': 'application/json'
      })}).toPromise();
    }
    
    public async putUrl(endpoint: string,data: any) {
      console.log("token found ",AppSettings.token)
      return await this.http
      .put(`${AppSettings.apiUrl}/api/${endpoint}`, data, {
        headers: new HttpHeaders({
        'Authorization': await AppSettings.getToken(),
        'Accept': 'application/json'
      })}).toPromise();
    }
    
    public async getUrl(endpoint: string) {
      console.log("token found ",AppSettings.token)
      let params={headers:{authorization:await AppSettings.getToken()}}
      return await this.http
      .get(`${AppSettings.apiUrl}/api/${endpoint}`, params)
      .toPromise();
  }

  public async deleteUrl(endpoint: string) {
    console.log("token found ",AppSettings.token)    
    let params={headers:{authorization:await AppSettings.getToken()}}
    return await this.http
      .delete(`${AppSettings.apiUrl}/api/${endpoint}`, params)
      .toPromise();
  }

}
