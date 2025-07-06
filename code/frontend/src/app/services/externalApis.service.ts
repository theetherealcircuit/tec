import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ExternalApiService {
    private apiKey = '5569f82a84b3c52b8f16ca5c0f0a2c5c';
    private baseUrl = 'http://api.weatherstack.com/current';
    constructor(private http: HttpClient) { }

    getWeather(city: string): Observable<any> {
        const url = `${this.baseUrl}?access_key=${this.apiKey}&query=${city}`;
        return this.http.get(url);
    }
}