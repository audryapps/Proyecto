import { Component, OnInit } from '@angular/core';
import {FireDBService} from '../../Servicios/fire-db.service'

@Component({
  selector: 'app-logueo',
  templateUrl: './logueo.page.html',
  styleUrls: ['./logueo.page.scss'],
})
export class LogueoPage implements OnInit {

  constructor(public fireDB:FireDBService) { }

  ngOnInit() {
  }

}

