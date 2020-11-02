import {Injectable} from '@angular/core';
import {SubjectsService} from "./subjects.service";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  serverProtocol = 'http'
  serverUrl = "127.0.0.1:9191"
  apiUrls = {
    cities: `${this.serverProtocol}://${this.serverUrl}/cities`
  }

  async getCities(): Promise<void> {
    const response = await fetch(this.apiUrls.cities)
    const json = await response.json()
    this.subjectsService.cities$.next(json)
  }


  constructor(private subjectsService: SubjectsService) {
  }
}
