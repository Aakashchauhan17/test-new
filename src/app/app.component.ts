import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // template: `
  // <input [( ngModule )] type="text">
  // {{name}}
  // `
})
export class AppComponent {
  titleof = 'My Profile';
  name = 'Aakash Chauhan';
  email = 'aakash.chauhan1994@gmail.com';
  phone = '(551)253-8755';
  address = '800 Pleasant st, Apt 1205, New Bedford, MA-02740';
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  latitude: any;
  longitude: any;

  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(41.6376, -70.9268),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }
}
