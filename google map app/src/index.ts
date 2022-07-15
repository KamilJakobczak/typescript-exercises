/// <reference types="@types/google.maps" />
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

function map(): void {
  const user = new User();
  console.log(user);
  const company = new Company();
  console.log(company);

  const mapContainer = document.getElementById('map');
  if (mapContainer) {
    const map = new CustomMap(mapContainer);
    map.addMarker(user);
    map.addMarker(company);
  }
}
map();
