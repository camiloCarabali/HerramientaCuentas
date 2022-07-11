import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Empresas', url: '/empresa', icon: 'mail' },
    { title: 'Sucursales', url: '/sucursal', icon: 'paper-plane' },
    { title: 'Administradores', url: '/folder/Administrador', icon: 'heart' },
    { title: 'Conductores', url: '/folder/conductor', icon: 'archive' },
  ];
  constructor() {}
}
