import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';


const routes: Routes = [

 
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
       path: 'registro',
        loadChildren: '../registro/registro.module#RegistroPageModule' },
  { 
    path: 'logueo', 
    loadChildren: '../logueo/logueo.module#LogueoPageModule' 
},
{
  path:'',
  redirectTo:'menu/logueo'
},
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
