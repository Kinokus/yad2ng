import {Injectable} from '@angular/core';
import {SubjectsService} from "./subjects.service";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  serverProtocol = 'http'
  serverUrl = "127.0.0.1:9191"
  apiUrls = {
    cities: `${this.serverProtocol}://${this.serverUrl}/cities`,
    areas: (city) => `${this.serverProtocol}://${this.serverUrl}/areas/${city}`,
    apartments: (city, area) => `${this.serverProtocol}://${this.serverUrl}/apartments/${city}/${area}/`,
    apartment: (city, area, address) => `${this.serverProtocol}://${this.serverUrl}/apartment/${city}/${area}/${address}/`,
  }

  async getCities(): Promise<void> {
    const response = await fetch(this.apiUrls.cities)
    const json = await response.json()
    this.subjectsService.cities$.next(json)
  }

  async getAreas(city): Promise<void> {
    const response = await fetch(this.apiUrls.areas(city))
    const json = await response.json()
    this.subjectsService.areas$.next(json)
  }

  async getApartments(city, area): Promise<void> {
    const response = await fetch(this.apiUrls.apartments(city, area))
    const json = await response.json()
    this.subjectsService.apartments$.next(json)
  }
  async getApartment(city, area, address): Promise<void> {
    const response = await fetch(this.apiUrls.apartment(city, area, address))
    const json = await response.json()
    this.subjectsService.apartment$.next(json)
  }

  constructor(private subjectsService: SubjectsService) {
  }
}
