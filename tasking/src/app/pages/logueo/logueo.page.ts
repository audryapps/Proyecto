import { Component} from '@angular/core';
import {FireDBService} from '../../Servicios/fire-db.service'
import { Router } from '@angular/router';



@Component({
  selector: 'app-logueo',
  templateUrl: './logueo.page.html',
  styleUrls: ['./logueo.page.scss'],
})
export class LogueoPage {

  constructor(public fireDB:FireDBService,
    private router: Router) { 

    }

    public NuevoUser() {
      return this.router.navigateByUrl('/menu/registro');
      
    }
  
  }