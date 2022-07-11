import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.page.html',
  styleUrls: ['./empresa.page.scss'],
})
export class EmpresaPage implements OnInit {
  empresa = {
    nombre: null,
    nit: null,
  };


  listaDeEmpresas = [];

  constructor(private database: DatabaseService) {}

  ngOnInit() {
    this.database.read('empresas').then((firebaseResponse) => {
      firebaseResponse.subscribe((listaDeEmpresasRef) => {
        this.listaDeEmpresas = listaDeEmpresasRef.map((empresaRef) => {
          let empresa = empresaRef.payload.doc.data();
          empresa['id'] = empresaRef.payload.doc.id;
          return empresa;
        });
        console.log(this.listaDeEmpresas);
      });
    });
  }

  crearEmpresa() {
    this.database
      .create('empresas', this.empresa)
      .then((res) => {
        alert('Se creo con exito');
      })
      .catch((err) => {
        console.log('Error en crear: ', err);
      });
  }

  eliminarEmpresa(id) {
    this.database
      .delete('empresas', id)
      .then((res) => {
        alert('Se elimino con exito');
      })
      .catch((err) => {
        console.log('Error al eliminar', err);
      });
  }

  filtro(nombre) {
    if(nombre == "amazon"){
      return true;
    }
    return false;
  }

}
