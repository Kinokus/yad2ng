import { Component, OnInit } from '@angular/core';
import {SubjectsService} from "../subjects.service";
import {BehaviorSubject} from "rxjs";
import {IApartment} from "../IApartment";

@Component({
  selector: 'app-apartment-info',
  templateUrl: './apartment-info.component.html',
  styleUrls: ['./apartment-info.component.scss']
})
export class ApartmentInfoComponent implements OnInit {
  public apartment$: BehaviorSubject<IApartment>;

  constructor(private subjectsService:SubjectsService) {

  }

  ngOnInit(): void {
    this.apartment$ = this.subjectsService.apartment$
  }

}
