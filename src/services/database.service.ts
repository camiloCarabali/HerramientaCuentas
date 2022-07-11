import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(private firestore: AngularFirestore) {}

  async create(collection, dato) {
    try {
      return await this.firestore.collection(collection).add(dato);
    } catch (error) {
      console.log('Error en: create ', error);
    }
  }

  async read(collection) {
    try {
      return await this.firestore.collection(collection).snapshotChanges();
    } catch (error) {
      console.log('Error en: read ', error);
    }
  }

  async search(collection, id) {
    try {
      return await this.firestore.collection(collection).doc(id).get();
    } catch (error) {
      console.log('Error en: search ', error);
    }
  }

  async delete(collection, id) {
    try {
      return await this.firestore.collection(collection).doc(id).delete();
    } catch (error) {
      console.log('Error en: delete ', error);
    }
  }

  async update(collection, id, dato) {
    try {
      return await this.firestore.collection(collection).doc(id).set(dato);
    } catch (error) {
      console.log('Error en: update ', error);
    }
  }

}
