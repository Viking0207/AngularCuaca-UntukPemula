import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'YOUR_ACTUAL_API_KEY';
  private baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    const url = `${this.baseUrl}?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url).pipe(
    catchError(this.handleError)
    );
  }


  private handleError(error: any): Observable<never> {
    console.error('Terjadi kesalahan:', error);
    return throwError('Terjadi kesalahan, silahkan coba lagi.');
  }
}