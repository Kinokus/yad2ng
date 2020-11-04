import {Component, OnInit} from '@angular/core';
import {SubjectsService} from "../subjects.service";
import {BehaviorSubject} from "rxjs";
import {IArea} from "../IArea";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent implements OnInit {
  public areas$: BehaviorSubject<IArea[]>;
  public area$: BehaviorSubject<IArea>;

  constructor(
    private subjectsService: SubjectsService,
    private apiService: ApiService
  ) {
  }

  ngOnInit(): void {
    this.areas$ = this.subjectsService.areas$
    this.area$ = this.subjectsService.area$
  }

  async getApartments(area: IArea) {

    this.subjectsService.apartment$.next(null)
    this.subjectsService.apartments$.next(null)
    this.subjectsService.addresses$.next(null)
    this.subjectsService.address$.next(null)


    this.area$.next(area)
    await this.apiService.getApartments(this.subjectsService.city$.value, area)
  }

  resetArea() {
    this.subjectsService.apartment$.next(null)
    this.subjectsService.apartments$.next(null)
    this.subjectsService.addresses$.next(null)
    this.subjectsService.address$.next(null)
    this.area$.next(null)

  }
}
