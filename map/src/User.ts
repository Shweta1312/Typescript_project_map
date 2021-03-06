import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
  //Export this class to index.ts

  name: string;
  location: {
    //declared the object
    lat: number;
    lng: number;
  };
  color: string;

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      //We have to initialize here.....as can't use 'this.location.lat = 20'
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `<h4>Its ${this.name}</h4>`;
  }
}
