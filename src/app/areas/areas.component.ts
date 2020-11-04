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

  constructor(
    private subjectsService: SubjectsService,
    private apiService: ApiService
  ) {
  }

  ngOnInit(): void {
    this.areas$ = this.subjectsService.areas$
  }

  async getApartments(area: IArea) {
    this.subjectsService.area$.next(area)
    await this.apiService.getApartments(this.subjectsService.city$.value, area)
  }
}
