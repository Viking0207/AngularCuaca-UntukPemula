import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey = 'YOUR_API_KEY';

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    return this.http.get('${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric').pipe(
    catchError(this.handleError)
    );
  }


  private handleError(error: any): Observable<never> {
    console.error('Terjadi kesalahan:', error);
    return throwError('Terjadi kesalahan, silahkan coba lagi.');
  }
}