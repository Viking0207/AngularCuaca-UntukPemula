import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'a4731324025c4612b4135716243007';
  private apiUrl = 'http://api.weatherapi.com/v1/current.json';

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?key=${this.apiKey}&q=${city}&aqi=no`)
      .pipe(
    catchError(this.handleError)
    );
  }


  private handleError(error: any): Observable<never> {
    console.error('Terjadi kesalahan:', error);
    return throwError('Terjadi kesalahan, silahkan coba lagi.');
  }
}