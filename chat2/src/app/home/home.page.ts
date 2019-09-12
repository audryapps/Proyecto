import { Component } from '@angular/core';
import * as firebase from 'firebase';
import {FireDBService} from '../Servicios/fire-db.service'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {



  constructor(public fireDB:FireDBService) {

    this.fireDB.escucharDB();
   
    }
  }