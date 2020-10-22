interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  //private: To prevent access of googlemaps to index.ts
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(user: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    });
  }

  //Bad approach/way to code......as we will use the same code for company again

  // addMarker(user: User):void{
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: user.location.lat,
  //       lng: user.location.lng
  //     }
  //   });
  // }

  //This is also a bad approach....as the pipe '|' allows only the common field among both User and Company i.e. location

  // addBothMarker(user: User | Company): void {
  //   user.location;
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: user.location.lat,
  //       lng: user.location.lng,
  //     },
  //   });
  // }
}
