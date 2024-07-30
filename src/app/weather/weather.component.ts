import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";


@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  city: string = '';
  weatherData: any;
  errorMessage: string = '';


  constructor(private weatherService: WeatherService) {}

  getWeather(){
    this.weatherService.getWeather(this.city).subscribe(data => {
      console.log(data);
      this.weatherData = data;
      this.errorMessage = '';
    },
    error => {
      console.error(error);
      this.errorMessage = error;
      this.weatherData = null;
    });
  }
}
