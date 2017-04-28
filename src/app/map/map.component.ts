import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  //Map Location
  lat = 0.82618691;
  lng = -77.63755288;
  //Zoom level
  zoom = 15;
  //markers
  markers: Marker[] = [
    {
      name: 'Parque 20 de Julio',
      lat: 0.82369069,
      lng: -77.63487376,
      draggable: true,
    },
    {
      name: 'Casa de la Cultura',
      lat: 0.82541203,
      lng: -77.63700004,
      draggable: true,
    },
    {
      name: 'Banco de la Republica',
      lat: 0.82625851,
      lng: -77.64284381,
      draggable: true,
    }
  ];

  constructor() { }

  clickedMarker(marker: Marker, index: number) {
    console.log(`clicked Marker ${marker.name} y el index ${index}`);
  }
  mapClicked($event: any) {
    console.log('Map Clicked');
    const newMarker = {
      name: 'Untitle',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true,
    };
    this.markers.push(newMarker);
  }
  markerDragEnd(marker: any, $event: any) {
    console.log('dragEnd' + marker, $event);

    let updMarker = {
      name: marker.name,
      lat: marker.lat,
      lng: marker.lng,
      draggable: false
    };

    let newLat = $event.coords.lat;
    let newLng = $event.coords.lng;
  }
}

// Type marker
interface Marker {
  name?: string;
  lat: number;
  lng: number;
  draggable: boolean;
}

