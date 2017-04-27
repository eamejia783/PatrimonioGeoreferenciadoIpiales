import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  //Map Location
  lat: number = 0.8270198;
  lng: number = -77.6565678;
  //Zoom level
  zoom = 10;
}
