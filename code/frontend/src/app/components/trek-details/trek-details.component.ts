import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, SimpleChanges, ViewChild, inject } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import * as L from 'leaflet';
import { ExternalApiService } from '../../services/externalApis.service';
import { SharedDependencies } from '../shared/shared.dependency';
declare var google: any;

@Component({
  selector: 'app-trek-details',
  imports: [SharedDependencies],
  templateUrl: './trek-details.component.html',
  styleUrl: './trek-details.component.scss'
})
export class TrekDetailsComponent implements OnInit {
  [x: string]: any;
  weatherData: any = {};
  isLoadingWeather = true;
  trail: any;
  options: any;
  layers: any[] = [];
  fitBounds: any;

  private localStorage: LocalStorageService = inject(LocalStorageService);
  private externalApi: ExternalApiService = inject(ExternalApiService);
  constructor(private http: HttpClient) { }

  @ViewChild('mapContainer') mapContainer!: ElementRef;
  private map!: L.Map;
  trekRoutes: { name: string; layer: L.Polyline }[] = [];
  private routeLayer: L.Polyline | null = null;
  ngOnInit(): void {
    this.trail = this.localStorage.get('trail');
    this.getWeatherData(this.trail.slug);
  }

  // ngAfterViewInit(): void {
  //   if (this.mapContainer) {
  //     this.map = L.map(this.mapContainer.nativeElement);
  //     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //     }).addTo(this.map);

  //     this.updateMapAndAnimateRoute();
  //   }
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['trekData'] && !changes['trekData'].firstChange && this.map) {
  //     this.updateMapAndAnimateRoute();
  //   }
  // }

  // private updateMapAndAnimateRoute(): void {
  //   if (this.map && this.trail && this.trail.routeCoordinates && this.trail.routeCoordinates.length > 0) {
  //     // Clear any existing route layer
  //     if (this.routeLayer) {
  //       this.map.removeLayer(this.routeLayer);
  //       this.routeLayer = null;
  //     }

  //     // Set map center and zoom if provided
  //     if (this.trail.center && this.trail.zoom) {
  //       this.map.setView(this.trail.center, this.trail.zoom);
  //     } else if (this.trail.routeCoordinates.length > 0) {
  //       // Fit bounds to the new route if center and zoom are not provided
  //       const bounds = L.latLngBounds(this.trail.routeCoordinates);
  //       this.map.fitBounds(bounds, { padding: [50, 50] });
  //     }

  //     // Create the new route layer
  //     this.routeLayer = L.polyline(this.trail.routeCoordinates, {
  //       color: this.trail.color || 'blue',
  //       weight: this.trail.weight || 3,
  //     });

  //     // Animate the route
  //     // @ts-ignore: Property 'snakeAnim' does not exist on type 'Polyline'
  //     this.routeLayer.snakeAnim().addTo(this.map);
  //   }
  // }

  getWeatherData(city: string): void {
    this.externalApi.getWeather(city).subscribe({
      next: (response) => {
        if (response.success === false) {
          console.error('Weather API error:', response.error.info);
          // this.weatherError = response.error.info;
          // Show fallback UI or message
        } else {
          this.weatherData = response;
        }
      },
      error: (err) => {
        console.error('Network/server error:', err);
        // this.weatherError = 'Something went wrong while fetching weather data.';
      }
    });
  }
}

