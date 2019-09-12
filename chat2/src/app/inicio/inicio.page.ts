import { Component, OnInit } from '@angular/core';
import {FireDBService} from '../Servicios/fire-db.service'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(public fireDB:FireDBService) { }

  ngOnInit() {
  }

}
