import {Injectable} from '@angular/core';
import {SubjectsService} from "./subjects.service";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  serverUrl = "127.0.0.1:9191"
  apiUrls = {
    cities: `${this.serverUrl}/cities`
  }

  getCities(): void {
    fetch(this.apiUrls.cities)
      .then(response=>response.json())
      .then(this.subjectsService.cities$.next)
  }


  constructor(private subjectsService: SubjectsService) {
  }
}
