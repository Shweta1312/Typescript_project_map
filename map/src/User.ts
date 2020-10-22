import faker from 'faker';

export class User {
  //Export this class to index.ts

  name: string;
  location: {
    //declared the object
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      //We have to initialize here.....as can't use 'this.location.lat = 20'
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
