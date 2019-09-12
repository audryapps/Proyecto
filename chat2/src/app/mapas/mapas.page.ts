import { Component, OnInit } from '@angular/core';
declare var mapboxgl:any;
declare var MapboxDirections:any;

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.page.html',
  styleUrls: ['./mapas.page.scss'],
})
export class MapasPage implements OnInit {

  constructor() {


   }

  ngOnInit() {
  }

  mostrarMapa() {

    mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2aWQxMjM0MzQ1IiwiYSI6ImNqemtrMno2cDAwa3MzZHQzYzB2bHFtM2oifQ.s6XzA5E0bQfltLiq5P7XjQ';
    var map = new mapboxgl.Map({
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-74.0066, 40.7135],
    zoom: 15.5,
    pitch: 45,
    bearing: -17.6,
    container: 'map',
    antialias: true
    });

    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true
      },
      trackUserLocation: true
      }));

      mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2aWQxMjM0MzQ1IiwiYSI6ImNqemtrMno2cDAwa3MzZHQzYzB2bHFtM2oifQ.s6XzA5E0bQfltLiq5P7XjQ';
      var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-79.4512, 43.6568],
      zoom: 13
      });
       
      map.addControl(new MapboxDirections({
      accessToken: mapboxgl.accessToken
      }), 'top-right');
  


  }

  ionViewDidEnter(){
    this.mostrarMapa();
  }

}
