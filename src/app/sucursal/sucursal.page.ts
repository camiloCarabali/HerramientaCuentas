import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.page.html',
  styleUrls: ['./sucursal.page.scss'],
})
export class SucursalPage implements OnInit {
  sucursal = {
    nombre: null,
    cuidad: null,
    direccion: null,
    empresa: null,
  };

  listaDeSucursales = [];

  empresas = {
    nombre: null,
    nit: null,
  };

  listEmpresas = [];

  constructor(private database: DatabaseService) {}

  ngOnInit() {
    this.getEmpresas();
    this.database.read('sucursales').then((firebaseResponse) => {
      firebaseResponse.subscribe((listaDeSucursalesRef) => {
        this.listaDeSucursales = listaDeSucursalesRef.map((sucursalRef) => {
          let sucursal = sucursalRef.payload.doc.data();
          sucursal['id'] = sucursalRef.payload.doc.id;
          return sucursal;
        });
        console.log(this.listaDeSucursales);
      });
    });
  }

  getEmpresas() {
    this.database.read('empresas').then((firebaseResponse) => {
      firebaseResponse.subscribe((listaDeEmpresasRef) => {
        this.listEmpresas = listaDeEmpresasRef.map((empresaRef) => {
          let empresas = empresaRef.payload.doc.data();
          empresas['id'] = empresaRef.payload.doc.id;
          return empresas;
        });
      });
    });
  }

  crearSucursal() {
    this.database
      .create('sucursales', this.sucursal)
      .then((res) => {
        alert('Se creo con exito');
      })
      .catch((err) => {
        console.log('Error en crear: ', err);
      });
  }

  eliminarSucursal(id) {
    this.database
      .delete('sucursales', id)
      .then((res) => {
        alert('Se elimino con exito');
      })
      .catch((err) => {
        console.log('Error al eliminar', err);
      });
  }
}
