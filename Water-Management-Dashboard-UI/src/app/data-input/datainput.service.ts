import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {DashboardData} from './dashboarddata';
import { map, catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatainputService {

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Sorry for the inconvenience..');
  };

  addnewdata(newDashboardData):Observable<DashboardData>{

    return this.http.post<DashboardData>('http://localhost:3000/api/data', JSON.stringify(newDashboardData), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  getData(){
    return this.http.get('http://localhost:3000/api/datas')
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  
}
