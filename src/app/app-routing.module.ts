import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'empresa',
    pathMatch: 'full'
  },
  {
    path: 'empresa',
    loadChildren: () => import('./empresa/empresa.module').then( m => m.EmpresaPageModule)
  },
  {
    path: 'sucursal',
    loadChildren: () => import('./sucursal/sucursal.module').then( m => m.SucursalPageModule)
  },
  {
    path: 'personas',
    loadChildren: () => import('./personas/personas.module').then( m => m.PersonasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
