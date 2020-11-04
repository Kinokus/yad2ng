import { Component, OnInit } from '@angular/core';
import {SubjectsService} from "../subjects.service";
import {BehaviorSubject} from "rxjs";
import {IApartment} from "../IApartment";
import {ApiService} from "../api.service";
import {IAddress} from "../IAddress";

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.scss']
})
export class ApartmentsComponent implements OnInit {
  public address$: BehaviorSubject<IAddress>;
  public addresses$: BehaviorSubject<IAddress[]>;

  constructor(private subjectsService:SubjectsService, private apiService:ApiService) { }

  ngOnInit(): void {
    this.address$ = this.subjectsService.address$
    this.addresses$ = this.subjectsService.addresses$
  }

  async getApartment(address: IAddress) {

    this.address$.next(address)

    await this.apiService.getApartment(
      this.subjectsService.city$.value,
      this.subjectsService.area$.value,
      address
    )

  }

  resetApartment() {
    this.address$.next(null)
    this.subjectsService.apartment$.next(null)
  }
}
