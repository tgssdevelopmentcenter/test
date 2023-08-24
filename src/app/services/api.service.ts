import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  token: any;
  constructor(
    private http: HttpClient,
  ) {
   }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.url}${path}`, { params });
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.url}${path}`,
      body
    );
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.url}${path}`,
      body
    );
  }

  emppost(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.url}${path}`,
      body
    );
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.url}${path}`
    );
  }



  downloadFile(path: string, paramsConfig = { fileName: 'E' }): Observable<HttpEvent<Blob>> {

    if (!paramsConfig.fileName) {
      console.error('mention fileName with your params');
      return;
    }

    let params = new HttpParams();
    for (let key in paramsConfig) {
      params = params.set(key, paramsConfig[key]);
    }

    return this.http.request(new HttpRequest(
      'GET',
      `${environment.url}${path}`,
     
      params,
      {
        reportProgress: true,
        responseType: 'blob'
      }));
  }


 

  FilterDownloadFile(path: string, params: HttpParams = new HttpParams(),paramsConfig = { fileName: 'E' }): Observable<HttpEvent<Blob>> {
    return this.http.request(new HttpRequest(
      'GET',
      `${this.token.employee_type == 2 || this.token.employee_type == 1 ? environment.url : environment.url}${path}`,
      {
        params: params,
        reportProgress: true,
        responseType: 'blob'
      }));
  }

  uploadFile(file: Blob, path = "upload"): Observable<HttpEvent<void>> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.request(new HttpRequest(
      'POST',
      `${environment.url}${path}`,
      formData,
      {
        reportProgress: true
      }));
  }
  
}
