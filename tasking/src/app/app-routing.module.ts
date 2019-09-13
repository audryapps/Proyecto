import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'registro', loadChildren: './pages/registro/registro.module#RegistroPageModule' },
  { path: 'logueo', loadChildren: './pages/logueo/logueo.module#LogueoPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
 
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
