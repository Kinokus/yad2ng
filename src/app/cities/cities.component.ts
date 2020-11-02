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

  constructor(
    private apiService: ApiService,
    private subjectsService: SubjectsService) {
  }

  ngOnInit(): void {
    this.cities$ = this.subjectsService.cities$
    this.apiService.getCities()
  }

}
