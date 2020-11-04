import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {SubjectsService} from "../subjects.service";
import {BehaviorSubject} from "rxjs";
import {ICity} from "../ICity";

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  // todo: use switchmap and activated route

  public cities$: BehaviorSubject<ICity[]>;
  public city$: BehaviorSubject<ICity>;

  constructor(
    private apiService: ApiService,
    private subjectsService: SubjectsService) {
  }

  async ngOnInit(): Promise<void> {
    this.cities$ = this.subjectsService.cities$
    this.city$ = this.subjectsService.city$
    await this.apiService.getCities()
  }

  async getAreas(city: ICity) {

    this.subjectsService.city$.next(city)
    await this.apiService.getAreas(city)

    this.subjectsService.apartment$.next(null)
    this.subjectsService.apartments$.next(null)
    this.subjectsService.addresses$.next(null)
    this.subjectsService.address$.next(null)

  }

  resetAll() {
    this.subjectsService.city$.next(null)
    this.subjectsService.area$.next(null)
    this.subjectsService.areas$.next(null)
    this.subjectsService.apartment$.next(null)
    this.subjectsService.apartments$.next(null)
    this.subjectsService.address$.next(null)
    this.subjectsService.addresses$.next(null)
  }
}
